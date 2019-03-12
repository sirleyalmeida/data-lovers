let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".container-nav").style.top = "0";
    } else {
        document.querySelector(".container-nav").style.top = "100%";
    }
    prevScrollpos = currentScrollPos;
}

let filterAlert = () => {
    alert("Click na legenda dos gráficos para filtrar os dados")
};
let graphicAlert = document.querySelector("#graphicNav");
graphicAlert.addEventListener("click", filterAlert);

let ctxBRA = document.getElementById("myChartBRA");
let ctxCHL = document.getElementById("myChartCHL");
let ctxMEX = document.getElementById("myChartMEX");
let ctxPER = document.getElementById("myChartPER");
let datas = itens;
let myChart;

let search = () => {
    let resultSearch = document.querySelector("#resultIndicators");
    let selectCountry = document.getElementById("selectCountry");
    let itemSelectCountry = selectCountry.options[selectCountry.selectedIndex].value;

    let selectYear = document.getElementById("selectYear");
    let itemSelectYear = selectYear.options[selectYear.selectedIndex].value;

    let SelectIndicator = document.getElementById("selectIndicator");
    let itemSelectIndicator = SelectIndicator.options[SelectIndicator.selectedIndex].value;

    for (let x of datas) {

        if (x.indicatorName === itemSelectIndicator && x.country === itemSelectCountry) {
            for (let i in x.allYears) {
                if (x.allYears[i] == itemSelectYear) {
                    let resultPush = Math.round(x.allResult[i]);
                    return document.querySelector("#resultIndicators").innerHTML = resultPush + "%";
                }
            }
        }
    }

};
let btnSearch = document.querySelector(".btn-indicators");
btnSearch.addEventListener('click', search);

myChart = new Chart(ctxBRA, {
    type: 'bar',
    data: {
        labels: datas[0].labels,
        datasets: [{
            type: 'line',
            label: datas[0].indicatorName,
            data: datas[0].values,
            backgroundColor: datas[0].backgroundColor,
            borderColor: datas[0].borderColor,
            borderWidth: 2
        },
        {
            type: 'line',
            label: datas[1].indicatorName,
            data: datas[1].values,
            backgroundColor: datas[1].backgroundColor,
            borderColor: datas[1].borderColor,
            borderWidth: 2
        }, {
            type: 'line',
            label: datas[2].indicatorName,
            data: datas[2].values,
            backgroundColor: datas[2].backgroundColor,
            borderColor: datas[2].borderColor,
            borderWidth: 2
        },
        {
            label: datas[3].indicatorName,
            data: datas[3].values,
            backgroundColor: datas[3].backgroundColor,
            borderColor: datas[3].borderColor,
            borderWidth: 2
        },
        {
            label: datas[4].indicatorName,
            data: datas[4].values,
            backgroundColor: datas[4].backgroundColor,
            borderColor: datas[4].borderColor,
            borderWidth: 2
        },
        {
            label: datas[5].indicatorName,
            data: datas[5].values,
            backgroundColor: datas[5].backgroundColor,
            borderColor: datas[5].borderColor,
            borderWidth: 2
        },
        {
            label: datas[6].indicatorName,
            data: datas[6].values,
            backgroundColor: datas[6].backgroundColor,
            borderColor: datas[6].borderColor,
            borderWidth: 2
        },
        {
            label: datas[7].indicatorName,
            data: datas[7].values,
            backgroundColor: datas[7].backgroundColor,
            borderColor: datas[7].borderColor,
            borderWidth: 2
        },
        {
            label: datas[8].indicatorName,
            data: datas[8].values,
            backgroundColor: datas[8].backgroundColor,
            borderColor: datas[8].borderColor,
            borderWidth: 2
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Brasil",
            fontSize: 20
        },
        legend: {
            position: "right",
            labels: {
                fontSize: 15,
                boxWidth: 20,
            }
        }
        ,
        scales: {
            xAxes: [{
                stacked: false
            }],
            yAxes: [{
                stacked: false,
                ticks: {
                    min: 0,
                    max: 100,
                    stepSize: 10
                }
            }
            ]
        }
    }
});

myChart = new Chart(ctxCHL, {
    type: 'bar',
    data: {
        labels: datas[9].labels,
        datasets: [{
            type: 'line',
            label: datas[9].indicatorName,
            data: datas[9].values,
            backgroundColor: datas[9].backgroundColor,
            borderColor: datas[9].borderColor,
            borderWidth: 2
        },
        {
            type: 'line',
            label: datas[10].indicatorName,
            data: datas[10].values,
            backgroundColor: datas[10].backgroundColor,
            borderColor: datas[10].borderColor,
            borderWidth: 2
        }, {
            type: 'line',
            label: datas[11].indicatorName,
            data: datas[11].values,
            backgroundColor: datas[11].backgroundColor,
            borderColor: datas[11].borderColor,
            borderWidth: 2
        },
        {
            label: datas[12].indicatorName,
            data: datas[12].values,
            backgroundColor: datas[12].backgroundColor,
            borderColor: datas[12].borderColor,
            borderWidth: 2
        },
        {
            label: datas[13].indicatorName,
            data: datas[13].values,
            backgroundColor: datas[13].backgroundColor,
            borderColor: datas[13].borderColor,
            borderWidth: 2
        },
        {
            label: datas[14].indicatorName,
            data: datas[14].values,
            backgroundColor: datas[14].backgroundColor,
            borderColor: datas[14].borderColor,
            borderWidth: 2
        },
        {
            label: datas[15].indicatorName,
            data: datas[15].values,
            backgroundColor: datas[15].backgroundColor,
            borderColor: datas[15].borderColor,
            borderWidth: 2
        },
        {
            label: datas[16].indicatorName,
            data: datas[16].values,
            backgroundColor: datas[16].backgroundColor,
            borderColor: datas[16].borderColor,
            borderWidth: 2
        },
        {
            label: datas[17].indicatorName,
            data: datas[17].values,
            backgroundColor: datas[17].backgroundColor,
            borderColor: datas[17].borderColor,
            borderWidth: 2
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Chile",
            fontSize: 20
        },
        legend: {
            position: "right",
            labels: {
                fontSize: 15,
                boxWidth: 20
            }
        }
        ,
        scales: {
            xAxes: [{
                stacked: false
            }],
            yAxes: [{
                stacked: false
            }]
        }
    }
});

myChart = new Chart(ctxMEX, {
    type: 'bar',
    data: {
        labels: datas[18].labels,
        datasets: [{
            type: 'line',
            label: datas[18].indicatorName,
            data: datas[18].values,
            backgroundColor: datas[18].backgroundColor,
            borderColor: datas[18].borderColor,
            borderWidth: 2
        },
        {
            type: 'line',
            label: datas[19].indicatorName,
            data: datas[19].values,
            backgroundColor: datas[19].backgroundColor,
            borderColor: datas[19].borderColor,
            borderWidth: 2
        }, {
            type: 'line',
            label: datas[20].indicatorName,
            data: datas[20].values,
            backgroundColor: datas[20].backgroundColor,
            borderColor: datas[20].borderColor,
            borderWidth: 2
        },
        {
            label: datas[21].indicatorName,
            data: datas[21].values,
            backgroundColor: datas[21].backgroundColor,
            borderColor: datas[21].borderColor,
            borderWidth: 2
        },
        {
            label: datas[22].indicatorName,
            data: datas[22].values,
            backgroundColor: datas[22].backgroundColor,
            borderColor: datas[22].borderColor,
            borderWidth: 2
        },
        {
            label: datas[23].indicatorName,
            data: datas[23].values,
            backgroundColor: datas[23].backgroundColor,
            borderColor: datas[23].borderColor,
            borderWidth: 2
        },
        {
            label: datas[24].indicatorName,
            data: datas[24].values,
            backgroundColor: datas[24].backgroundColor,
            borderColor: datas[24].borderColor,
            borderWidth: 2
        },
        {
            label: datas[25].indicatorName,
            data: datas[25].values,
            backgroundColor: datas[25].backgroundColor,
            borderColor: datas[25].borderColor,
            borderWidth: 2
        },
        {
            label: datas[26].indicatorName,
            data: datas[26].values,
            backgroundColor: datas[26].backgroundColor,
            borderColor: datas[26].borderColor,
            borderWidth: 2
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: "México",
            fontSize: 20
        },
        legend: {
            position: "right",
            labels: {
                fontSize: 15,
                boxWidth: 20
            }
        }
        ,
        scales: {
            xAxes: [{
                stacked: false
            }],
            yAxes: [{
                stacked: false
            }]
        }
    }
});


myChart = new Chart(ctxPER, {
    type: 'bar',
    data: {
        labels: datas[27].labels,
        datasets: [{
            type: 'line',
            label: datas[27].indicatorName,
            data: datas[27].values,
            backgroundColor: datas[27].backgroundColor,
            borderColor: datas[27].borderColor,
            borderWidth: 2
        },
        {
            type: 'line',
            label: datas[28].indicatorName,
            data: datas[28].values,
            backgroundColor: datas[28].backgroundColor,
            borderColor: datas[28].borderColor,
            borderWidth: 2
        }, {
            type: 'line',
            label: datas[29].indicatorName,
            data: datas[29].values,
            backgroundColor: datas[29].backgroundColor,
            borderColor: datas[29].borderColor,
            borderWidth: 2
        },
        {
            label: datas[30].indicatorName,
            data: datas[30].values,
            backgroundColor: datas[30].backgroundColor,
            borderColor: datas[30].borderColor,
            borderWidth: 2
        },
        {
            label: datas[31].indicatorName,
            data: datas[31].values,
            backgroundColor: datas[31].backgroundColor,
            borderColor: datas[31].borderColor,
            borderWidth: 2
        },
        {
            label: datas[32].indicatorName,
            data: datas[32].values,
            backgroundColor: datas[32].backgroundColor,
            borderColor: datas[32].borderColor,
            borderWidth: 2
        },
        {
            label: datas[33].indicatorName,
            data: datas[33].values,
            backgroundColor: datas[33].backgroundColor,
            borderColor: datas[33].borderColor,
            borderWidth: 2
        },
        {
            label: datas[34].indicatorName,
            data: datas[34].values,
            backgroundColor: datas[34].backgroundColor,
            borderColor: datas[34].borderColor,
            borderWidth: 2
        },
        {
            label: datas[35].indicatorName,
            data: datas[35].values,
            backgroundColor: datas[35].backgroundColor,
            borderColor: datas[35].borderColor,
            borderWidth: 2
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Perú",
            fontSize: 20
        },
        legend: {
            position: "right",
            labels: {
                fontSize: 15,
                boxWidth: 20
            }
        }
        ,
        scales: {
            xAxes: [{
                stacked: false
            }],
            yAxes: [{
                stacked: false
            }]
        }
    }
});