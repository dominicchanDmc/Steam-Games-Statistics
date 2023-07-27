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
         valueList.push(chartObj.dataHash[key]);
    });
    const total = valueList.reduce((acc, curr) => acc + curr, 0);
    const threshold = total * 0.001; 

    let othersTotal = 0;
    const filteredValueList = valueList.filter((value,index) => {
        if (value < threshold) {
            othersTotal += value;
            keyList.splice(index, 1);
            return false;
        }
        return true;
    });

    if (othersTotal > 0) {
        keyList.push("Others");
        filteredValueList.push(othersTotal);
    }

    const data = {
        labels: keyList,
        datasets: [{
          label: chartObj.displayLable,
          data: filteredValueList,
          hoverOffset: 4,
          // backgroundColor: chartObj.backgroundColor || 'rgba(75, 192, 192, 0.2)',
          // borderColor: chartObj.borderColor || 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }]
      };
      const config = {
        type: chartObj.type,
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: showTittle(chartObj,filteredValueList.length),
              font: {
                size: 30,
                weight: 'bold',
              },
              color: "white"
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const dataIndex = context.dataIndex;
                  const dataset = context.dataset;
                  const currentValue = dataset.data[dataIndex];
                  const percentage = ((currentValue / total) * 100).toFixed(2);
                  return `${currentValue} (${percentage}%)`;
                }
              }
            },
            legend: {
              labels: {
                font: {
                  size: 15           
                },
                color: 'yellow'
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
          },
          responsive: true, 
          maintainAspectRatio: false,
        }
      };
      new Chart(chartObj.ctx, config);
}
function showTittle(chartObj,valueLength) {
  if (valueLength === 0)
    return "No result"
  else
    return charTittleTran(chartObj.displayLable);
}
function charTittleTran(string) {
  switch (string) {
    case "supported_languages":
        return "Supported Languages";    
    case "categories":
        return "Categories";    
    case "tags":
        return "Tags";    
    case "genres":
        return "Genres"; 
 }
}