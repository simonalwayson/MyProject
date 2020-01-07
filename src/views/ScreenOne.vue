<template>
  <div class="container">
    <div class="head">
      <span>{{title }}</span>
    </div>

    <div class="main" :style="{height:mainheight+'px'}">
      <div
        v-for="(v,i) in moduleList"
        class="chartframe bg-border"
        :key="v.id"
        :style="{width:v.width*mainwidth-(padding+border)+'px',
        height:v.height*mainheight-(padding+border)+'px',
        left:v.x*mainwidth+'px',
        top:v.y*mainheight+'px'}"
      >
        <i class="title-icon"></i>
        <label class="title">{{ v.title }}</label>
        <div class="chartgroup-content">
          <div v-for="(item,index) in v.graphDataList" :key="item.id" class="charts">
            <!-- 传入对应的数据给子组件 -->
            <component
              :is="item.graph.graphType"
              :type="item.graph.graphType"
              :options="item"
              :id="item.graph.graphType + item.id"
              :index="item.id"
              :size="{width:(v.width*mainwidth-(padding+border))/v.graphDataList.length+'px',
                height:v.height*mainheight-(padding+border)-20+'px'}"
              class="chart"
            ></component>
            <!-- 传入对应的数据给子组件 end -->
            <i class="el-icon-close" @click="deleteNode(i,index,item.id)" v-if="isShow"></i>
          </div>
        </div>
        <i class="el-icon-plus" @click="addChart(i)" v-if="isShow"></i>
        <el-dialog title="添加图表" :visible.sync="chartVisible" width="30%">
          <el-cascader
            v-model="typeVal"
            :options="dataTypes"
            :props="props"
            @change="handleChange"
            clearable
          ></el-cascader>
          <span slot="footer" class="dialog-footer">
            <el-button @click="chartVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirm(confirmIndex)">确 定</el-button>
          </span>
        </el-dialog>
        <i class="el-icon-close closeframe" @click="deleteChartFrame(i)" v-if="isShow"></i>
      </div>
    </div>

    <div class="add" @click="dialogVisible = true" v-if="isShow">+</div>
    <el-dialog title="添加图表框" :visible.sync="dialogVisible" width="30%">
      <el-input v-model="frameTitleVal" placeholder="请输入标题"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addChartFrame">确 定</el-button>
      </span>
    </el-dialog>
    <div class="foot">
      <el-button type="primary" size="small" v-if="isShow" @click="saveScreen">保存</el-button>
      <el-button type="default" size="small" v-if="isShow" @click="cancelScreen">取消</el-button>
    </div>
  </div>
</template>

<script>
import barchart from "../components/BarChart";
import linechart from "../components/LineChart";
import piechart from "../components/PieChart";
import netchart from "../components/NetChart";
import treechart from "../components/TreeChart";
import wordcloud from "../components/WordCloud";
import pictorialbar from "../components/PictorialBar";
import lists from "../components/List";
import timeline from "../components/TimeLine";

import fetchData from "../utils/fetchData";
import { API_GET_DATATYPELIST } from "../api/service";
// import { API_GET_GRAPHTYPELIST } from "../api/service";
import { API_POST_PERSONALIZESCREEN } from "../api/service";

export default {
  components: {
    BAR: barchart,
    LINES: linechart,
    PIE: piechart,
    NET: netchart,
    TREE: treechart,
    WORDCLOUD: wordcloud,
    PICTORIALBAR: pictorialbar,
    LIST: lists,
    TIMELINE: timeline
  },
  data() {
    let that = this;
    return {
      padding: 20,
      border: 2,
      id: 1,
      index: 1,
      confirmIndex: "",
      chartVisible: false,
      dialogVisible: false,
      dataTypes: [],
      typeVal: "",
      idVal: "",
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          that.initData(node, resolve);
        }
      },
      selectedDataTypeInfo: {},
      selectedGraph: [],
      selectedDataSource: [],
      frameTitleVal: "",
      mainStyle: {
        width: "",
        height: ""
      }
    };
  },
  methods: {
    handleChange(value) {
      // console.log(value);
    },
    //根据选择类型，加载下一级可选择数据项
    initData(node, resolve) {
      const { data } = node;

      //1.所选图表的dataTypeInfo
      this.selectedDataTypeInfo = data;
      if (data && data.children && data.children.length !== 0) {
        return resolve([]);
      }
      const params = {};
      if (data) {
        //判断data是不是空，如果不是，将data中的某个数据拿出来作为参数传递
        params["dataTypeId"] = data["id"] || "";
      }
      try {
        let API_GET_GRAPHTYPELIST =
          "api/graphData/getGraphTypeListByDataTypeId" +
          "/" +
          `${params.dataTypeId}`;
        fetchData(API_GET_GRAPHTYPELIST, {}, "get").then(res => {
          console.log(res);
          let types = res.data.map(item => {
            let obj = {
              id: item.graphDataId,
              value: item.graphType,
              label: item.graphDesc,
              leaf: true
            };
            return obj;
          });
          const targetData = [];
          for (const item of types) {
            //将拿到的数据一层一层拿出来处理
            const temp = {
              id: item["id"] || "",
              value: item["value"] || "",
              label: item["label"] || "",
              leaf: item["leaf"], //后端数据中leaf一开始要为false,最后一次的时候才为true
              children: item["children"] || []
            };
            targetData.push(temp); //然后push到节点中
          }
          this.selectedGraphs = targetData;
          resolve(targetData);
        });
      } catch (e) {
        console.log(e);
        resolve([]);
      }
    },

    //根据配置的图表参数，发送请求，并获得相应的图表数据对象
    async getData(i) {
      //根据dataType获取对应图表数据的dataSource
      let API_GET_DATASOURCE =
        "api/graphData/getDataSourceByDataType" + "/" + `${this.typeVal[0]}`;
      let res = await fetchData(API_GET_DATASOURCE, {}, "get");
      //3.所选图表的dataSource
      this.selectedDataSource = res.data;

      //2.所选图表的graph信息
      var [selectedGraph] = this.selectedGraphs.filter(item => {
        return item.value == this.typeVal[1];
      });
      //4.拼接图表对象所需属性值
      var newGraphData = {
        id: selectedGraph.id,
        dataTypeInfo: {
          dataType: this.selectedDataTypeInfo.value,
          remark: this.selectedDataTypeInfo.label
        },
        graph: {
          graphType: this.typeVal[1],
          graphDesc: selectedGraph.label
        },
        dataSource: this.selectedDataSource
      };
      let result = this.moduleList[i].graphDataList.filter(
        item => item.id == newGraphData.id
      );
      if (result.length > 0) {
        this.$message({
          message: "图表已存在面板中，请添加其他图表！！！",
          type: "warning"
        });
      } else {
        this.$message({
          message: "添加图表成功！！！",
          type: "success"
        });
        this.moduleList[i].graphDataList.push(newGraphData);
        console.log(this.moduleList[i].graphDataList);
      }
    },

    //添加图表
    addChart(i) {
      this.chartVisible = true;
      this.confirmIndex = i;
      //获取所有数据类型
      fetchData(API_GET_DATATYPELIST, {}, "get").then(res => {
        this.dataTypes = res.data.map(item => {
          let obj = {
            id: item.id,
            value: item.dataType,
            label: item.remark
          };
          return obj;
        });
      });
    },
    confirm(i) {
      this.chartVisible = false;
      this.getData(i);
      // this.idVal = "";
      // this.titleVal = "";
      // this.typeVal = "";
    },
    //删除图表
    deleteNode(i, index, item) {
      this.moduleList[i].graphDataList.splice(index, 1); //删除index为i,位置的数组元素
    },

    //添加图表框
    addChartFrame() {
      this.dialogVisible = false;
      var data = {
        title: this.frameTitleVal,
        graphDataList: []
      };
      this.moduleList.push(data);
      console.log(this.moduleList);
    },
    //删除图表框
    deleteChartFrame(i) {
      this.moduleList.splice(i, 1); //删除index为i,位置的数组元素
    },
    saveScreen() {
      let params = {
        id: 1,
        screenList: [
          {
            moduleList: [
              {
                graphDataList: [
                  {
                    id: 1
                  }
                ],
                title: "string"
              }
            ],
            screenIndex: 1,
            title: "string"
          }
        ]
      };
      console.log(111);
      console.log(this.$store.state.screenList);
      // paramas.id =this.$store.state.screenList[1].id
      // fetchData(API_POST_PERSONALIZESCREEN, {parmas}, "post").then(res=>{
      //   console.log(res)
      // })
      // this.$router.push("/screen");
    },
    cancelScreen() {
      console.log(222);
      // this.$router.push("/screen");
    },
    getSize() {
      this.mainStyle.width = document.body.clientWidth;
      this.mainStyle.height = document.body.clientHeight - 40;
    }
  },
  computed: {
    mainwidth() {
      return this.mainStyle.width / 100;
    },
    mainheight() {
      return this.mainStyle.height / 100;
    },
    title() {
      if (this.$store.state.screenList.length) {
        return this.$store.state.screenList[1].title;
      }
    },
    moduleList() {
      if (this.$store.state.screenList.length) {
        return this.$store.state.screenList[1].moduleList;
      }
    },
    isShow() {
      if (this.$route.query.isShow) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.$store.dispatch("initList");
    this.getSize();
    window.addEventListener("resize", this.getSize);
    console.log(document.body.clientWidth);
    console.log(document.body.clientHeight);
  }
};
</script>

<style lang="less" scoped>
.bg-border {
  border: 1px solid #216dfd;
  box-shadow: 0px 0px 10px 10px rgba(23, 69, 195, 0.5) inset;
}
.title {
  font-size: 14px;
  height: 2vh;
}
.title-icon {
  width: 10px;
  height: 10px;
  display: inline-block;
  background: url("../assets/icon_prompt@2x.png") no-repeat;
  background-size: 100% 100%;
  margin-right: 5px;
}
.container {
  color: #fff;
  height: 100%;
  position: relative;
  .head {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color: #01a7fe;
    margin: 0 auto;
    background: url("../assets/Navigation bar.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    span {
      position: absolute;
      top: -7%;
      left: 45%;
    }
  }
  .main {
    position: relative;
    .chartframe {
      padding: 10px;
      position: absolute;
      background: linear-gradient(
            to left,
            rgba(2, 224, 245, 1),
            rgba(2, 224, 245, 1)
          )
          left top no-repeat,
        linear-gradient(to bottom, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
          left top no-repeat,
        linear-gradient(to left, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
          right top no-repeat,
        linear-gradient(to bottom, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
          right top no-repeat,
        linear-gradient(to left, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
          left bottom no-repeat,
        linear-gradient(to bottom, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
          left bottom no-repeat,
        linear-gradient(to left, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
          right bottom no-repeat,
        linear-gradient(to left, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
          right bottom no-repeat;
      /*设置大小*/
      background-size: 0.15rem 1.1rem, 1.1rem 0.15rem, 0.15rem 1.1rem,
        1.1rem 0.15rem;
      .el-icon-plus {
        position: absolute;
        top: 5px;
        right: 30px;
      }
      .closeframe {
        position: absolute;
        top: 5px;
        right: 10px;
      }
      .chartgroup-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .charts {
          flex: 1;
          position: relative;
          // margin: 0 1vw 0 1vw;
          .el-icon-close {
            position: absolute;
            top: 10px;
            right: 10px;
          }
          .chart {
            // flex: 1;
            width: 20vw;
            height: 20vh;
            // max-height: 40vh;
            margin: 0 1vw 1vh 0;
          }
        }
      }
    }

    .el-cascader {
      margin-bottom: 20px;
    }
  }

  .add {
    position: absolute;
    top: 0vh;
    right: 40vh;
    text-align: center;
    font-size: 40px;
    color: #ccc;
    // border: 1px dashed #ccc;
  }
  .foot {
    position: absolute;
    top: 2.4vh;
    right: 16vh;
    .el-button:first-child {
      margin-right: 10px;
    }
  }
  // .main {
  //   display: flex;
  //   flex-direction: column;
  //   // flex-wrap: wrap;
  //   padding: 1vh 1vw 1vh 1vw;
  //   // justify-content: center;
  //   .chartframe {
  //     flex: 1;
  //     min-width: 18vw;
  //     min-height: 24vh;
  //     max-height: 86vh;
  //     margin: 0 5px 1vh 5px;
  //     position: relative;
  //     background: linear-gradient(
  //           to left,
  //           rgba(2, 224, 245, 1),
  //           rgba(2, 224, 245, 1)
  //         )
  //         left top no-repeat,
  //       linear-gradient(to bottom, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
  //         left top no-repeat,
  //       linear-gradient(to left, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
  //         right top no-repeat,
  //       linear-gradient(to bottom, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
  //         right top no-repeat,
  //       linear-gradient(to left, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
  //         left bottom no-repeat,
  //       linear-gradient(to bottom, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
  //         left bottom no-repeat,
  //       linear-gradient(to left, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
  //         right bottom no-repeat,
  //       linear-gradient(to left, rgba(2, 224, 245, 1), rgba(2, 224, 245, 1))
  //         right bottom no-repeat;
  //     /*设置大小*/
  //     background-size: 0.15rem 1.1rem, 1.1rem 0.15rem, 0.15rem 1.1rem,
  //       1.1rem 0.15rem;
  //     .el-icon-plus {
  //       position: absolute;
  //       top: 5px;
  //       right: 30px;
  //     }
  //     .closeframe {
  //       position: absolute;
  //       top: 5px;
  //       right: 10px;
  //     }
  //     .chartgroup-content {
  //       display: flex;
  //       flex-wrap: wrap;
  //       justify-content: space-around;
  //       .charts {
  //         flex: 1;
  //         position: relative;
  //         margin: 0 1vw 0 1vw;
  //         .el-icon-close {
  //           position: absolute;
  //           top: 10px;
  //           right: 10px;
  //         }
  //         .chart {
  //           width: 20vw;
  //           height: 20vh;
  //           // max-height: 40vh;
  //           margin: 0 1vw 1vh 0;
  //         }
  //       }
  //     }
  //   }

  //   .el-cascader {
  //     margin-bottom: 20px;
  //   }
  // }
  // .add {
  //   position: absolute;
  //   bottom: 10vh;
  //   right: 40vh;
  //   text-align: center;
  //   font-size: 40px;
  //   color: #ccc;
  //   // border: 1px dashed #ccc;
  // }
  // .foot {
  //   position: absolute;
  //   bottom: 10vh;
  //   right: 10vh;
  //   .el-button:first-child {
  //     margin-right: 10px;
  //   }
  // }
}
</style>

