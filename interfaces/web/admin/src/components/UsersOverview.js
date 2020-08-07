import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";

import Chart from "../utils/chart";

import { fetchVisitorsByDayForMonthRequest } from "../actions/stats";

function UsersOverview(props) {
  const { title } = props;

  const chartContainer = useRef(null);

  const dispatch = useDispatch();

  const { visitors } = useSelector(state => state.stats)
  const { accountId } = useSelector(state => state.auth)

  const [chartInstance, setChartInstance] = useState(null);
  const [chartData, setChartData] = useState({
    labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
    datasets: [
      {
        label: "July",
        fill: "start",
        data: [
          1,
          1,
          1,
          2,
          2,
          10
        ],
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }
    ]
  });


  // First time effect
  useEffect(() => {
    if (accountId !== null) {
      // Go and get user device stats
      dispatch(fetchVisitorsByDayForMonthRequest(accountId, 7));
    }
  }, [accountId]);

  useEffect(() => {
    if (visitors && visitors.length > 0) {
      // Re-format the data
      const localChartData = {
        datasets: []
      };

      visitors.map((visitor) => {
        console.log('visitor', visitor)
        let data = [];
        visitor.data.map((d) => {
          if (d.nb_visits) {
            data.push(d.nb_visits)
          } else {
            data.push(0)
          }
        })
        localChartData.datasets.push({
          label: visitor.label,
          fill: "start",
          data,
          backgroundColor: "rgba(0,123,255,0.1)",
          borderColor: "rgba(0,123,255,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgb(0,123,255)",
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3
        })
      })

      console.log('localChartData', localChartData)
      setChartData(localChartData)

      if (chartContainer && chartContainer.current) {
        chartInstance.data.datasets = localChartData.datasets;
        chartInstance.update();
      }
    }
  }, [visitors]);

  const chartOptions = {
    ...{
      responsive: true,
      legend: {
        position: "top"
      },
      elements: {
        line: {
          // A higher value makes the line look skewed at this ratio.
          tension: 0.3
        },
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [
          {
            gridLines: false,
            ticks: {
              callback(tick, index) {
                // Jump every 7 values on the X axis labels to avoid clutter.
                return index % 7 !== 0 ? "" : tick;
              }
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              suggestedMax: 45,
              callback(tick) {
                if (tick === 0) {
                  return tick;
                }
                // Format the amounts using Ks for thousands.
                return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
              }
            }
          }
        ]
      },
      hover: {
        mode: "nearest",
        intersect: false
      },
      tooltips: {
        custom: false,
        mode: "nearest",
        intersect: false
      }
    },
    ...props.chartOptions
  };

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, {
        type: "LineWithLine",
        data: chartData,
        options: chartOptions
      });
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <Card small className="h-100">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <CardBody className="pt-0">
        <canvas
          height="120"
          ref={chartContainer}
          style={{ maxWidth: "100% !important" }}
        />
      </CardBody>
    </Card>
  );
}

export default UsersOverview;
