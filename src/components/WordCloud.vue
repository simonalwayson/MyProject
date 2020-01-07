<template>
  <div :style="{width:graphSize.width,height:graphSize.height}"></div>
</template>

<script>
import echarts from "echarts";
import echart from "echarts-wordcloud";

import option from "../utils/optionTree";
export default {
  // 传入对应的数值与动态index
  props: ["options", "index", "size"],
  computed: {
    graphSize() {
      return this.size;
    }
  },
  methods: {
    initOption() {
      var that = this;
      var type = "wordCloud";
      var title = this.options.dataTypeInfo.remark;
      // 取出需要的数据
      var data = this.options.dataSource[0].value;
      let series = [
        {
          name: "热点分析", //数据提示窗标题
          type: "wordCloud",
          sizeRange: [6, 30], //画布范围，如果设置太大会出现少词（溢出屏幕）
          rotationRange: [0, 0], //数据翻转范围
          //shape: 'circle',
          textPadding: 0,
          autoSize: {
            enable: true,
            minSize: 6
          },
          textStyle: {
            normal: {
              color: function() {
                var colors = [
                  "#02E0F5",
                  "#216DFD",
                  "#FD6760",
                  "#FFF17C",
                  "#628BE6",
                  "#28C8C0",
                  "#41FF8E"
                ];
                return colors[parseInt(Math.random() * 8)];
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: "#333"
            }
          },
          data: data //name和value建议用小写，大写有时会出现兼容问题
        }
      ];

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(
        document.getElementById(this.options.graph.graphType + this.index)
      );
      option.title.text = title;
      option.series = series;
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    }
  },
  mounted() {
    this.initOption();
  }
};
</script>

<style lang="less" scoped>
</style>