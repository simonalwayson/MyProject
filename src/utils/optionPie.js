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
        top: 20,
        itemWidth: 5,
        itemHeight: 5,
        textStyle: {
            fontSize: 10,
            color: '#fff'
        }
    },

    dataset: {
        dimensions: [],
        source: []
    },
    grid: {
        top: 60,
        right: 10,
        bottom: 10,
        left: 40
    },
    xAxis: {
        type: "category",
        show: false,
    },
    yAxis:
    {
        show: false,
    }

    ,
    tooltip: {
        show: true
    },
    series: []
}
export default option;

