<template>
  <div class="chartgroup">
    <!-- <i class="el-icon-plus" @click="dialogVisible = true"></i>
    <el-dialog title="添加图表" :visible.sync="dialogVisible" width="30%">
      <el-select v-model="titleVal" placeholder="请选择标题">
        <el-option v-for="item in titles" :key="item.value" :label="item.label" :value="item.label"></el-option>
      </el-select>
      <el-select v-model="typeVal" placeholder="请选择图表类型">
        <el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.label"></el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>-->
    <div class="chartgroup-content">
      <div v-for="(v,i) in options" :key="v.id" @click="addtocart($event)" class="charts">
        <!-- 传入对应的数据给子组件 -->
        <charts :options="v" :id="'charts' +i" :index="i" class="chart"></charts>
        <!-- 传入对应的数据给子组件 end -->
        <i class="el-icon-close" @click="deleteNode(i)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import charts from "../components/Chart";
export default {
  components: {
    charts
  },
  data() {
    return {
      iconVisible: false,
      dialogVisible: false,
      titles: [
        {
          value: "选项1",
          label: "交易量"
        },
        {
          value: "选项2",
          label: "响应时间"
        },
        {
          value: "选项3",
          label: "模型算法指标"
        }
      ],
      types: [
        {
          value: "选项1",
          label: "bar"
        },
        {
          value: "选项2",
          label: "line"
        },
        {
          value: "选项3",
          label: "pie"
        }
      ],
      titleVal: "",
      typeVal: "",
      //根据用户登录后，获取此用户已配置保存的对应的图表数据
      options: [
        {
          title: "交易量",
          type: "bar",
          select: [
            { 201901: 60 },
            { 201902: 80 },
            { 201903: 20 },
            { 201904: 100 }
          ]
        }
        // {
        //   title: "响应时间",
        //   type: "line",
        //   select: [{ 周一: 60 }, { 周二: 80 }, { 周三: 20 }, { 周四: 100 }]
        // },
        // {
        //   title: "模型算法",
        //   type: "bar",
        //   select: [{ Mon: 60 }, { Tue: 80 }, { Wen: 20 }, { Tur: 100 }]
        // },
        // {
        //   title: "成绩单",
        //   type: "pie",
        //   select: [{ TFDF: 60 }, { BERT: 80 }, { LTP: 20 }, { WORD: 100 }]
        // }
      ]
    };
  },
  props: ["i"],
  methods: {
    confirm() {
      this.getData();
      this.dialogVisible = false;
    },
    deleteNode(i) {
      this.options.splice(i, 1); //删除index为i,位置的数组元素
    },

    //根据配置的图表参数（this.$route.query），发送请求，并获得相应的图表数据data
    getData() {
      var data = {
        title: "交易量",
        data: [{ TFDF: 60 }, { BERT: 80 }, { LTP: 20 }, { WORD: 100 }]
      };
      var newData = {
        type: this.typeVal,
        title: this.titleVal,
        select: data.data
      };
      console.log(newData);
      this.options.push(newData);
    },

    addtocart(e) {
      //获取点击元素
      // const rect = e.target.getBoundingClientRect(); //获取点击的dom的位置
      // console.log(rect);
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.chartgroup {
  position: relative;
  .el-icon-plus {
    position: absolute;
    top: -5px;
    right: 0px;
    display: none;
  }
  .el-select {
    margin-bottom: 20px;
  }
  .chartgroup-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .charts {
      position: relative;
      .el-icon-close {
        position: absolute;
        top: 10px;
        right: 10px;
        display: none;
      }
    }
  }
  .chart {
    width: 300px;
    height: 200px;
    padding: 10px;
    margin-bottom: 20px;
  }
}
.chartgroup:hover .el-icon-plus,
.charts:hover > .el-icon-close {
  display: block;
}
</style>