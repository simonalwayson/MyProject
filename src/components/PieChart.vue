<template>
  <div :style="{width:graphSize.width,height:graphSize.height}"></div>
</template>

<script>
import echarts from "echarts";
import option from "../utils/optionPie";
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
      console.log(this.options);
      var that = this;
      var type = "pie";
      var title = this.options.dataTypeInfo.remark;
      var legend = [];
      var xAxis = [];
      // 取出需要的数据
      let series = this.options.dataSource.map(val => {
        let name = val.verticalName;
        let name2 = val.name;
        let data = val.value.map(child => {
          let obj = {
            value: child[`${name}`],
            name: child.horizontalAxis
          };
          return obj;
        });
        let obj = {
          name: name2,
          type: type,
          radius: ["30%", "50%"],
          center: ["50%", "63%"],
          labelLine: { show: false },
          label: { show: false },
          data
        };
        return obj;
      });

      this.options.dataSource.forEach((v, i) => {
        legend.push(v.name);
      });

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(
        document.getElementById(this.options.graph.graphType + this.index)
      );
      option.title.text = title;
      option.series = series;
      option.tooltip.formatter = "{b}:{d}%";
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