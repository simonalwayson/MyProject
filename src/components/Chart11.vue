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
      var legend = [];
      var xAxis = [];
      // 取出需要的数据
      console.log(this.options.datasource);
      this.options.datasource.map(val => {
        val.value.map(child => {
          xAxis.push(child.horizontalAxis);
        });
      });
      console.log(xAxis.slice(0, 4));

      let series = this.options.datasource.map(val => {
        let name = val.dataType;
        let name2 = val.name;
        let data = val.value.map(child => {
          return child[`${name}`];
        });
        let obj = {
          name: name2,
          type: that.type.toLowerCase(),
          data
        };
        return obj;
      });

      console.log(series);

      this.options.datasource.forEach((v, i) => {
        legend.push(v.name);
        // dataType.push(v.dataType);
      });

      // this.options.datasource.map(item => {
      //   legend.push(item.name);
      //   var dataType = item.dataType;

      //   arr2 = item.value.map(v => {
      //     var key = Object.keys(v);
      //     return {
      //       name: key,
      //       value: v[dataType]
      //     };
      //   });
      // });

      // console.log(arr2);
      // console.log(legend);
      //     var key = Object.keys(item)[0];
      // console.log(arr1);
      // console.log(arr2);
      // console.log(legend);

      // if (type != "PIE") {
      //   this.options.datasource.forEach((v, i) => {
      //     Object.keys(v).forEach(v => {
      //       arr1.push(v);
      //       arr2.push(this.options.datasource[i][v]);
      //     });
      //   });
      // } else {
      //   arr2 = this.options.datasource.map(item => {
      //     var key = Object.keys(item)[0];
      //     return {
      //       name: key,
      //       value: item[key]
      //     };
      //   });
      // }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(
        document.getElementById("charts" + this.index)
      );
      // option.dataset.source = result;
      // option.dataset.dimensions = legend;
      // option.legend.data = legend;
      console.log(option);
      // option.dataset.dimensions = arr4;
      // option.xAxis.show = type != "pie";
      // option.yAxis.show = type != "pie";
      // option.title.text = title;
      option.xAxis.data = xAxis.slice(0, 4);
      option.series = series;
      // option.series[0].type = type;
      // option.tooltip.formatter = type != "pie" ? "{b} : {c}" : "{b}:{d}%";
      // // 使用刚指定的配置项和数据显示图表。
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