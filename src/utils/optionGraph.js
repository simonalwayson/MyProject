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
    dataset: {
        dimensions: [],
        source: []
    },
    grid: {
        top: 50,
        right: 10,
        bottom: 20,
        left: 40
    },
    xAxis: {
        type: "category",
        show: false
    },
    yAxis:
    {
        type: "value",
        show: false

    },
    tooltip: {
        show: false
    },
    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 20,
            roam: true,
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                }
            },
            symbol: 'circle',
            // edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 10
                    }
                }
            },
            data: [
                {
                    name: '智能应答',
                },
                {
                    name: '多轮会话',
                }, {
                    name: '智能交易',
                },
                {
                    name: '问题推荐',
                },
                {
                    name: '意图识别',
                },
                {
                    name: '上下文关联',
                },
                {
                    name: 'slotFilling',
                },
                {
                    name: 'BERT',
                },
                {
                    name: 'CRF',
                },
                {
                    name: 'SEQ2SEQ',
                },
            ],
            // links: [],
            links: [{
                source: '智能应答',
                target: '多轮会话'

            }, {
                source: '智能应答',
                target: '智能交易'
            }, {
                source: '智能应答',
                target: '问题推荐'
            }, {
                source: '智能应答',
                target: '意图识别'
            },
            {
                source: '智能应答',
                target: '上下文关联'
            },
            {
                source: '多轮会话',
                target: 'slotFilling'
            },
            {
                source: '智能交易',
                target: 'BERT'
            },
            {
                source: '智能交易',
                target: 'CRF'
            },
            {
                source: '上下文关联',
                target: 'SEQ2SEQ'
            },
            ],
        }
    ]
}
export default option;

