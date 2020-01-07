<template>
  <div :style="{width:graphSize.width,height:graphSize.height}"></div>
</template>

<script>
import echarts from "echarts";
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
      var type = "tree";
      var title = this.options.dataTypeInfo.remark;
      // 取出需要的数据
      var data = this.options.dataSource[0].value;
      let series = [
        {
          type: "tree",
          data: data,
          top: "middle",
          left: "40%",
          right: "30%",
          symbolSize: 7,
          label: {
            normal: {
              position: "left",
              verticalAlign: "middle",
              align: "right",
              fontSize: 15,
              color: "#fff"
            }
          },
          itemStyle: {
            borderWidth: 0
          },
          lineStyle: {
            curveness: 0,
            color: "#1B53B4"
          },
          leaves: {
            label: {
              normal: {
                position: "right",
                verticalAlign: "middle",
                align: "left",
                fontSize: 10
              }
            }
          },
          expandAndCollapse: true,
          animationDuration: 550,
          animationDurationUpdate: 750
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