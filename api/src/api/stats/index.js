const fs = require('fs')
const shell = require('shelljs');

const config = require('../../config');

import DebatesController from "../../services/debates/lib/controllers/DebatesController";

/**
 * Defines all the routes
 * @param  {Object}   fastify  The global fastify server object
 * @returns {Object} Different per route
 */
const routes = async fastify => {
    fastify.get(
        "/fetchStats",
        {
            config,
            schema: {
                description: "fetches statistics for a platform",
                tags: ["api"],
                querystring: {
                    name: { type: "string" }
                },
                response: {
                    200: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                label: { type: "string" },
                                value: { type: 'string' },
                                percentage: { type: 'string' },
                                increase: { type: 'boolean' },
                                chartLabels: {
                                    type: "array",
                                    items: {
                                        type: "string" 
                                    }
                                },
                                attrs: { 
                                    type: "object",
                                    properties: {
                                        md: { type: "string" },
                                        sm: { type: "string" }
                                    }        
                                },
                                datasets: { 
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            label: { type: "string" },
                                            fill: { type: "string" },
                                            borderWidth: { type: "number" },
                                            backgroundColor: { type: "string" },
                                            data: { 
                                                type: "array",
                                                items: {
                                                    type: "number" 
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        async request => {
            fastify.log.info("[src#api#fetchStats] Entering");

            // Hard coded for now
            return [
                {
                  label: "Posts",
                  value: "2,390",
                  percentage: "4.7%",
                  increase: true,
                  chartLabels: [null, null, null, null, null, null, null],
                  attrs: { md: "6", sm: "6" },
                  datasets: [
                    {
                      label: "Today",
                      fill: "start",
                      borderWidth: 1.5,
                      backgroundColor: "rgba(0, 184, 216, 0.1)",
                      borderColor: "rgb(0, 184, 216)",
                      data: [1, 2, 1, 3, 5, 4, 7]
                    }
                  ]
                },
                {
                  label: "Pages",
                  value: "182",
                  percentage: "12.4",
                  increase: true,
                  chartLabels: [null, null, null, null, null, null, null],
                  attrs: { md: "6", sm: "6" },
                  datasets: [
                    {
                      label: "Today",
                      fill: "start",
                      borderWidth: 1.5,
                      backgroundColor: "rgba(23,198,113,0.1)",
                      borderColor: "rgb(23,198,113)",
                      data: [1, 2, 3, 3, 3, 4, 4]
                    }
                  ]
                },
                {
                  label: "Comments",
                  value: "8,147",
                  percentage: "3.8%",
                  increase: false,
                  decrease: true,
                  chartLabels: [null, null, null, null, null, null, null],
                  attrs: { md: "4", sm: "6" },
                  datasets: [
                    {
                      label: "Today",
                      fill: "start",
                      borderWidth: 1.5,
                      backgroundColor: "rgba(255,180,0,0.1)",
                      borderColor: "rgb(255,180,0)",
                      data: [2, 3, 3, 3, 4, 3, 3]
                    }
                  ]
                },
                {
                  label: "New Customers",
                  value: "29",
                  percentage: "2.71%",
                  increase: false,
                  decrease: true,
                  chartLabels: [null, null, null, null, null, null, null],
                  attrs: { md: "4", sm: "6" },
                  datasets: [
                    {
                      label: "Today",
                      fill: "start",
                      borderWidth: 1.5,
                      backgroundColor: "rgba(255,65,105,0.1)",
                      borderColor: "rgb(255,65,105)",
                      data: [1, 7, 1, 3, 1, 4, 8]
                    }
                  ]
                },
                {
                  label: "Subscribers",
                  value: "17,281",
                  percentage: "2.4%",
                  increase: false,
                  decrease: true,
                  chartLabels: [null, null, null, null, null, null, null],
                  attrs: { md: "4", sm: "6" },
                  datasets: [
                    {
                      label: "Today",
                      fill: "start",
                      borderWidth: 1.5,
                      backgroundColor: "rgb(0,123,255,0.1)",
                      borderColor: "rgb(0,123,255)",
                      data: [3, 2, 3, 2, 4, 5, 4]
                    }
                  ]
                }
              ];
        }
    );
};

module.exports = routes;
