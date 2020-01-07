<template>
  <div class="block">
    <el-carousel height="100vh">
      <el-carousel-item height="100vh">
        <div class="setting" @click="setting('one')">
          <i class="el-icon-setting"></i>
        </div>
        <screenOne></screenOne>
      </el-carousel-item>
      <el-carousel-item height="100vh">
        <div class="setting" @click="setting('two')">
          <i class="el-icon-setting"></i>
        </div>
        <screenTwo></screenTwo>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import screenOne from "./ScreenOne";
import screenTwo from "./ScreenTwo";
export default {
  components: {
    screenOne,
    screenTwo
  },
  methods: {
    setting(i) {
      this.$router.push({ path: `/screen${i}`, query: { isShow: true } });
    }
  },
  created() {
    this.$store.dispatch("initList");
  }
};
</script>

<style lang="less" scoped>
.block {
  height: 100vh;
  position: relative;
  .setting {
    position: absolute;
    top: 20px;
    right: 30px;
    display: none;
    z-index: 10;
    .el-icon-setting {
      color: #fff;
    }
  }
}
.block:hover .setting {
  display: block;
}
</style>