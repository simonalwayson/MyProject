var option = {
    color: [
        "#02E0F5",
        "#216DFD",
        "#FD6760",
        "#FFF17C",
        "#628BE6",
        "#28C8C0",
        "#41FF8E"],
    title: {
        text: '',
        textStyle: {
            fontSize: 13,
            color: '#fff',
            fontWeight: 'normal'
        }
    },
    legend: {
        show: false
    },
    grid: {
        top: 50,
        right: 10,
        bottom: 20,
        left: 40
    },
    xAxis: {
        type: "category",
        show: true,
        axisLine: {
            lineStyle: {
                color: "#02E0F5",
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#ccc",
        }
    },
    yAxis: [
        {
            type: "value",
            show: true,
            axisLine: {
                lineStyle: {
                    color: "#02E0F5",
                    width: 2
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#ccc",
                formatter: function (value, index) {
                    if (value >= 1000) {
                        return value / 1000 + 'w';
                    } else {
                        return value
                    }
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#113492'
                }
            }
        },
        {
            type: "value",
            show: false,
            axisLine: {
                lineStyle: {
                    color: "#02E0F5",
                    width: 2
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#ccc",
                formatter: function (value, index) {
                    console.log(value, index)
                    if (value >= 10000) {
                        return value / 10000 + 'w';
                    } else {
                        return value
                    }

                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }

        }
    ]
    ,
    tooltip: {
        show: true
    },
    series: []
}
export default option;

