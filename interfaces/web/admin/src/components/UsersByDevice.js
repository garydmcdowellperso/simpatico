import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";

import Chart from "../utils/chart";

import { fetchUsersByDeviceRequest } from "../actions/stats";

export default function UsersByDevice(props) {
  const { title } = props;

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [chartData, setChartData] = useState({
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [68, 32],
        backgroundColor: [
          "rgba(0,123,255,0.9)",
          "rgba(0,123,255,0.5)"
        ]
      }
    ],
    labels: ["Desktop", "Smartphone"]
  });

  const dispatch = useDispatch();

  const { devices } = useSelector(state => state.stats)

  // First time effect
  useEffect(() => {
    // Go and get user device stats
    dispatch(fetchUsersByDeviceRequest(localStorage.getItem("accountId")));
  }, []);

  useEffect(() => {
    if (devices && devices.length > 0) {
      // Re-format the data
      const localChartData = {
        datasets: [
          {
            hoverBorderColor: "#ffffff",
            data: [],
            backgroundColor: []
          }
        ],
        labels: []
      };

      // To do percentages - loop through everything to get some totals
      let totalVisits = 0;
      devices.map((device, idx) => {
        totalVisits += device.nb_visits;
      })

      devices.map((device, idx) => {
        localChartData.labels.push(device.label)
        localChartData.datasets[0].data.push((device.nb_visits / totalVisits) * 100)
        localChartData.datasets[0].backgroundColor.push("rgba(0,123,255,0.9)")
      })

      setChartData(localChartData)

      if (chartContainer && chartContainer.current) {
        chartInstance.data.datasets[0].data = localChartData.datasets[0].data;
        chartInstance.update();
      }
    }
  }, [devices]);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const chartConfig = {
    type: "pie",
    data: chartData,
    options: {
      ...{
        legend: {
          position: "bottom",
          labels: {
            padding: 25,
            boxWidth: 20
          }
        },
        cutoutPercentage: 0,
        tooltips: {
          custom: false,
          mode: "index",
          position: "nearest"
        }
      },
      ...props.chartOptions
    }
  };

  return (
    <Card small className="h-100">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <CardBody className="d-flex py-0">
        <canvas
          height="220"
          ref={chartContainer}
          className="blog-users-by-device m-auto"
        />
      </CardBody>
    </Card>
  )
}
