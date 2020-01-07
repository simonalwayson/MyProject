<template>
  <div class="graphchart" :style="{width:graphSize.width,height:graphSize.height}"></div>
</template>

<script>
import echarts from "echarts";
import option from "../utils/optionGraph";
export default {
  // 传入对应的数值与动态index
  props: ["options", "index", "size"],
  computed: {
    graphSize() {
      return this.size;
    }
  },
  methods: {
    getData(tree) {
      var queen = [];
      var out = [];
      const obj = JSON.parse(JSON.stringify(tree));
      queen = queen.concat(obj);
      while (queen.length) {
        var first = queen.shift();
        if (first.children) {
          queen = queen.concat(first.children);
          delete first["children"];
        }
        out.push(first);
      }
      return out;
    },
    getLinks(tree) {
      var queen = [];
      var links = [];
      const obj = JSON.parse(JSON.stringify(tree));
      queen = queen.concat(obj);
      while (queen.length) {
        var first = queen.shift();
        if (first.children) {
          queen = queen.concat(first.children);
          var link = first.children.map(item => {
            let obj = {
              source: first.name,
              target: item.name
            };
            return obj;
          });
          delete first["children"];
          links.push(link);
        }
      }
      return links;
    },
    unique(arr) {
      const res = new Map();
      return arr.filter(arr => !res.has(arr.name) && res.set(arr.name, 1));
    },
    initOption() {
      console.log(this.size);
      var that = this;
      var type = "graph";
      var title = this.options.dataTypeInfo.remark;
      var xAxis = [];
      // 取出需要的数据
      var datas = this.options.dataSource.map(item => {
        return this.getData(item.value);
      });
      var link = this.options.dataSource.map(item => {
        return this.getLinks(item.value);
      });
      var links = link.flat(Infinity);

      var data = datas[0].map(item => {
        let obj = {
          name: item.name
        };
        return obj;
      });
      var datalist = this.unique(data);
      let series = [
        {
          type: "graph",
          layout: "force",
          symbolSize: 20,
          roam: true,
          label: {
            normal: {
              show: true,
              color: "#fff"
            }
          },
          force:{
           gravity:0.1,
          repulsion :600
          },
            
          top: 30,
          symbol: "circle",
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            normal: {
              textStyle: {
                fontSize: 10
              }
            }
          },
          data: datalist,
          links: links
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