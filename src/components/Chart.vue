<template>
  <div></div>
</template>

<script>
import echarts from "echarts";
import option from "../utils/option";
export default {
  // 传入对应的数值与动态index
  props: ["options", "index"],
  methods: {
    initOption() {
      var that = this;
      var type = this.options.graphType.toLowerCase();
      var title = this.options.remark;
      var legend = [];
      var xAxis = [];
      // console.log(this.options);
      // 取出需要的数据
      let series = this.options.dataSource.map(val => {
        let name = val.verticalName;
        let name2 = val.name;
        let data = val.value.map(child => {
          xAxis.push(child.horizontalAxis);
          return child[`${name}`];
        });
        let obj = {
          name: name2,
          barWidth: type == "bar" ? "10" : "",
          type: type,
          data
        };
        return obj;
      });

      let pieSeries = this.options.dataSource.map(val => {
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
          // radius: ["40%", "60%"],
          center: ["50%", "70%"],
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
        document.getElementById("charts" + this.index)
      );

      option.xAxis.show = type != "pie";
      option.yAxis[0].show = type != "pie";
      option.title.text = title;
      option.xAxis.data = xAxis.slice(0, 4);
      option.series = type != "pie" ? series : pieSeries;
      option.series.radius = ["50%", " 70%"];
      option.tooltip.formatter = type != "pie" ? "{b} : {c}" : "{b}:{d}%";
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.initOption();
  }
};
</script>

<style lang="less" scoped>
</style>