<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登陆界面</span>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="70px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密  码" prop="pwd">
          <el-input type="password" v-model="ruleForm.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>
        <p v-show="error">用户名或密码错误</p>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import fetchData from "../utils/fetchData";
import axios from "axios";
// import checkRes from '../utils/checkRes'
import { API_GET_LIST } from "../api/service";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      error: false,
      ruleForm: {
        name: "",
        pwd: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 8, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...mapMutations(["initList"]),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        let _this = this;
        if (valid) {
          // let params = {
          //   userid: this.ruleForm.name,
          //   pwd: this.ruleForm.pwd
          // };
          // fetchData(API_POST_LOGIN, params, "post").then(res => {
          //   if (res.data.msg === "ok") {
          //     this.$router.push("./usermanage"); //跳转到词向量
          //     localStorage.setItem("acc", this.ruleForm.name);
          //     localStorage.setItem("id", res.data.id);
          //     localStorage.setItem("userGroup", res.data.usergroup);
          //     localStorage.setItem('Authorization',res.data.token)
          //     _this.userToken = res.data.token;
          //     // 将用户token保存到vuex中
          //     _this.changeLogin({ Authorization: _this.userToken });
          //   }
          // });

          // fetchData(API_GET_LIST, {}, "get").then(res => {
          //   if (res.status === 200) {
          //     // 将用户屏幕列表保存到vuex中
          //     _this.screenList = res.data.screenList;
          //     console.log(_this.screenList);
          //     _this.initList({ screenList: _this.screenList });
          //     this.$router.push("./screentwo"); //跳转到screenOne
          //   }
          // });
          // _this.$store.dispatch("initList");
          this.$router.push("./screen");

          // axios.get("api/customization/getList/1").then(res => {
          //   console.log(res);
          //   if (res.data.msg === "ok") {
          //     // this.$router.push("./screenone"); //跳转到screenOne
          //     // 将用户token保存到vuex中

          //     _this.screenList = res.data.screenList;
          //     _this.saveList({ screenList: _this.screenList });
          //   }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  height: 100%;
  min-width: 500px;
  align-items: center;
  .box-card {
    width: 500px;
    height: 300px;
  }
}
</style>