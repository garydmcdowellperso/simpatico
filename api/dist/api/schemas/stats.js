"use strict";

var devicesSchema = {
  type: "object",
  properties: {
    label: {
      type: "string"
    },
    nb_uniq_visitors: {
      type: "number"
    },
    nb_visits: {
      type: "number"
    },
    nb_actions: {
      type: "number"
    },
    nb_users: {
      type: "number"
    },
    max_actions: {
      type: "number"
    },
    sum_visit_length: {
      type: "number"
    },
    bounce_count: {
      type: "number"
    },
    nb_visits_converted: {
      type: "number"
    },
    segment: {
      type: "string"
    },
    logo: {
      type: "string"
    }
  }
};
var visitorsSchema = {
  type: "object",
  properties: {
    label: {
      type: "string"
    },
    data: {
      type: "array",
      items: devicesSchema
    }
  }
};
var statsDefault = {
  "shares": {
    "label": "Shares",
    "value": 0,
    "percentage": "0%",
    "increase": false,
    "decrease": true,
    "chartLabels": [null, null, null, null, null, null, null],
    "attrs": {
      "md": "4",
      "sm": "6"
    },
    "datasets": [{
      "label": "Today",
      "fill": "start",
      "borderWidth": 1.5,
      "backgroundColor": "rgb(0,123,255,0.1)",
      "borderColor": "rgb(0,123,255)",
      "data": [3, 2, 3, 2, 4, 5, 4]
    }]
  },
  "signups": {
    "label": "New Customers",
    "value": 0,
    "percentage": "0%",
    "increase": false,
    "decrease": true,
    "chartLabels": [null, null, null, null, null, null, null],
    "attrs": {
      "md": "4",
      "sm": "6"
    },
    "datasets": [{
      "label": "Today",
      "fill": "start",
      "borderWidth": 1.5,
      "backgroundColor": "rgba(255,65,105,0.1)",
      "borderColor": "rgb(255,65,105)",
      "data": [1, 7, 1, 3, 1, 4, 8]
    }]
  },
  "reactions": {
    "value": 0,
    "percentage": "0%",
    "increase": false,
    "decrease": true,
    "chartLabels": [null, null, null, null, null, null, null],
    "attrs": {
      "md": "4",
      "sm": "6"
    },
    "datasets": [{
      "label": "Today",
      "fill": "start",
      "borderWidth": 1.5,
      "backgroundColor": "rgba(255,180,0,0.1)",
      "borderColor": "rgb(255,180,0)",
      "data": [2, 3, 3, 3, 4, 3, 3]
    }]
  },
  "pageviews": {
    "value": 0,
    "percentage": "0%",
    "increase": true,
    "chartLabels": [null, null, null, null, null, null, null],
    "attrs": {
      "md": "6",
      "sm": "6"
    },
    "datasets": [{
      "label": "Today",
      "fill": "start",
      "borderWidth": 1.5,
      "backgroundColor": "rgba(23,198,113,0.1)",
      "borderColor": "rgb(23,198,113)",
      "data": [1, 2, 3, 3, 3, 4, 4]
    }]
  },
  "posts": {
    "value": 0,
    "percentage": "0%",
    "increase": true,
    "chartLabels": [null, null, null, null, null, null, null],
    "attrs": {
      "md": "6",
      "sm": "6"
    },
    "datasets": [{
      "label": "Today",
      "fill": "start",
      "borderWidth": 1.5,
      "backgroundColor": "rgba(0, 184, 216, 0.1)",
      "borderColor": "rgb(0, 184, 216)",
      "data": [1, 2, 1, 3, 5, 4, 7]
    }]
  }
};
var statsSchema = {
  type: "object",
  properties: {
    id: {
      type: "number"
    },
    accountId: {
      type: "number"
    },
    timestamp: {
      type: "string"
    },
    deleted: {
      type: "boolean"
    },
    posts: {
      type: "object",
      properties: {
        value: {
          type: 'string'
        },
        percentage: {
          type: 'string'
        },
        increase: {
          type: 'boolean'
        },
        chartLabels: {
          type: "array",
          items: {
            type: "string"
          }
        },
        attrs: {
          type: "object",
          properties: {
            md: {
              type: "string"
            },
            sm: {
              type: "string"
            }
          }
        },
        datasets: {
          type: "array",
          items: {
            type: "object",
            properties: {
              label: {
                type: "string"
              },
              fill: {
                type: "string"
              },
              borderWidth: {
                type: "number"
              },
              backgroundColor: {
                type: "string"
              },
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
    },
    pageviews: {
      type: "object",
      properties: {
        value: {
          type: 'string'
        },
        percentage: {
          type: 'string'
        },
        increase: {
          type: 'boolean'
        },
        chartLabels: {
          type: "array",
          items: {
            type: "string"
          }
        },
        attrs: {
          type: "object",
          properties: {
            md: {
              type: "string"
            },
            sm: {
              type: "string"
            }
          }
        },
        datasets: {
          type: "array",
          items: {
            type: "object",
            properties: {
              label: {
                type: "string"
              },
              fill: {
                type: "string"
              },
              borderWidth: {
                type: "number"
              },
              backgroundColor: {
                type: "string"
              },
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
    },
    reactions: {
      type: "object",
      properties: {
        value: {
          type: 'string'
        },
        percentage: {
          type: 'string'
        },
        increase: {
          type: 'boolean'
        },
        chartLabels: {
          type: "array",
          items: {
            type: "string"
          }
        },
        attrs: {
          type: "object",
          properties: {
            md: {
              type: "string"
            },
            sm: {
              type: "string"
            }
          }
        },
        datasets: {
          type: "array",
          items: {
            type: "object",
            properties: {
              label: {
                type: "string"
              },
              fill: {
                type: "string"
              },
              borderWidth: {
                type: "number"
              },
              backgroundColor: {
                type: "string"
              },
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
    },
    signups: {
      type: "object",
      properties: {
        value: {
          type: 'string'
        },
        percentage: {
          type: 'string'
        },
        increase: {
          type: 'boolean'
        },
        chartLabels: {
          type: "array",
          items: {
            type: "string"
          }
        },
        attrs: {
          type: "object",
          properties: {
            md: {
              type: "string"
            },
            sm: {
              type: "string"
            }
          }
        },
        datasets: {
          type: "array",
          items: {
            type: "object",
            properties: {
              label: {
                type: "string"
              },
              fill: {
                type: "string"
              },
              borderWidth: {
                type: "number"
              },
              backgroundColor: {
                type: "string"
              },
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
    },
    shares: {
      type: "object",
      properties: {
        value: {
          type: 'string'
        },
        percentage: {
          type: 'string'
        },
        increase: {
          type: 'boolean'
        },
        chartLabels: {
          type: "array",
          items: {
            type: "string"
          }
        },
        attrs: {
          type: "object",
          properties: {
            md: {
              type: "string"
            },
            sm: {
              type: "string"
            }
          }
        },
        datasets: {
          type: "array",
          items: {
            type: "object",
            properties: {
              label: {
                type: "string"
              },
              fill: {
                type: "string"
              },
              borderWidth: {
                type: "number"
              },
              backgroundColor: {
                type: "string"
              },
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
};
module.exports = {
  statsSchema: statsSchema,
  statsDefault: statsDefault,
  devicesSchema: devicesSchema,
  visitorsSchema: visitorsSchema
};