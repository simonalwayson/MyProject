<template>
  <div class="tag">
    <ul>
      <li
        class="tags-li"
        v-for="(item,index) in tagsList"
        :class="{'active': isActive(item.path)}"
        :key="index"
      >
        <router-link :to="item.path">{{item.title}}</router-link>
        <i class="el-icon-close" @click="closeTags(index)"></i>
      </li>
    </ul>

    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
// import bus from './bus';
export default {
  data() {
    return {
      tagsList: [
        { name: "wordembeddings", path: "/wordembeddings", title: "词向量" }
      ]
    };
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.tagsList = [
        { name: "wordembeddings", path: "/wordembeddings", title: "词向量" }
      ];
        this.$router.push("/wordembeddings");
      }
    },
    // 关闭全部标签
    closeAll() {
      this.tagsList = [
        { name: "wordembeddings", path: "/wordembeddings", title: "词向量" }
      ];
      this.$router.push("/wordembeddings");
    },
    // 关闭其他标签
    closeOther() {
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath;
      });
      this.tagsList = curItem;
    },
    // 设置标签
    setTags(route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift();
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.name
        });
      }
    },
    handleTags(command) {
      command === "other" ? this.closeOther() : this.closeAll();
    }
  },
  computed: {},
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  },
  created() {
    this.setTags(this.$route);
  }
};
</script>

<style lang="less" scoped>
.tag {
  height: 30px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 10px #ddd;
  ul {
    margin: 0;
    padding: 0 5px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    li {
      height: 23px;
      line-height: 23px;
      margin-right: 5px;
      list-style: none;
      border-radius: 3px;
      font-size: 12px;
      border: 1px solid #e9eaec;
      background: #fff;
      padding: 0 5px;
      color: #666;
      -webkit-transition: all 0.3s ease-in;
      -moz-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;
      a {
        text-decoration: none;
        color: #666;
      }
    }
  }
  .tags-close-box {
    text-align: center;
    width: 110px;
    height: 30px;
    background: #fff;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    .el-dropdown {
      height: 100%;
      margin-right:5px;
      display: flex;
      align-items: center;
    }
  }
}
.tags-li.active {
  color: #fff;
  background-color: #5cb0ff;
  a {
    color: #fff;
  }
}
</style>
