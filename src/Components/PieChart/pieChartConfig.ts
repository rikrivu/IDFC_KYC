import Chartjs from 'chart.js';

export const chartConfig: Chartjs.ChartConfiguration = {
    type: "pie",
    data: {
      labels: ['Passed', 'Not Passed'],
      datasets: [
        {
          data: [],
          backgroundColor: [
            '#75D58A',
            '#ffffff'
          ],
          borderColor: '#75D58A'
        }
      ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
      scales: {
        xAxes: [
            {
              ticks: {
                display: false
              },
              gridLines: {
                display: false,
              }
            }
        ],
        yAxes: [
          {
            ticks: {
              display: false
            },
            gridLines: {
              display: false
            }
          }
        ]
      }
    }
  };