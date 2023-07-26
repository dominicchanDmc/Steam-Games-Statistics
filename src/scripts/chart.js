import * as Helper from "./helper.js"

export function buildCompareChart(chartObj,i) {
    const colorList = ["skyblue","lavenderblush","wheat","powderblue","silver"];
    new Chart(chartObj.ctx, {
      type: chartObj.type,
      data: {
        labels: [chartObj.game1Data.name,chartObj.game2Data.name],
        datasets: [{
          label: Helper.stringTran(chartObj.compareCol),
          data: [chartObj.game1Data[chartObj.compareCol],
          chartObj.game2Data[chartObj.compareCol]],
          borderWidth: 1,
          backgroundColor: colorList[i]
        }]
      },
      options: {
        plugins: {
            legend: {
              labels: {
                font: {
                  size: 18           
                },
                color: 'yellow'
              }
            }
          },
        scales: {
          y: {
            beginAtZero: chartObj.beginAtZero,
            grid: {
                zeroLineColor: "yellow",
                color: "white"
            },
            border: {
                color: "yellow"
            },
            ticks: {
                color: "yellow",
                font: {
                    size: 18
                }
            }
          },
          x: {
            drawTicks: true,
            beginAtZero: true,
            grid: {
                zeroLineColor: "yellow",
                color: "white"
            },
            border: {
                color: "yellow"
            },
            ticks: {
                color: "yellow",
                font: {
                    size: 18
                }
            },
            mirror: true
        }
        }
      }
    });
}

export function buildStatistChart(chartObj) {
    let keyList = [];
    let valueList = [];
    Object.keys(chartObj.dataHash).forEach((key) => {
        keyList.push(key);
    });
    Object.values(chartObj.dataHash).forEach((values) => {
        valueList.push(values);
    });

    const data = {
        labels: keyList,
        datasets: [{
          label: chartObj.property,
          data: valueList,
        //   backgroundColor: [
        //     'rgb(255, 99, 132)',
        //     'rgb(54, 162, 235)',
        //     'rgb(255, 205, 86)'
        //   ],
          hoverOffset: 4
        }]
      };
      const config = {
        type: chartObj.type,
        data: data,
        options: {
          responsive: true, 
          maintainAspectRatio: false,
        //   scales: {
        //     yAxes: [{
        //       ticks: {
        //         beginAtZero:true
        //               }
        //         }]
        //   }
        }
      };
      new Chart(chartObj.ctx, config);
}