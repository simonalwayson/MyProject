<template>
  <div class="main">
    <!-- 顶部 -->
    <el-header height="6%">
      <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="collapseChage">
        <i class="el-icon-menu"></i>
      </div>
      <!-- 全屏按钮 -->
      <div class="btn-fullscreen" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
    </el-header>

    <el-container>
      <!-- 侧边菜单 -->
      <el-menu
        :default-active="active"
        :class="{'scroll':isScroll}"
        class="el-menu-vertical-demo"
        ref="menu"
        @open="handleOpen"
        @close="handleClose"
        unique-opened
        router
        :collapse="collapse"
      >
        <template v-for="item in $store.state.items">
          <!--        含有二级菜单及以上-->
          <template v-if="item.children">
            <el-submenu :index="item.id" :key="item.id">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.label }}</span>
              </template>
              <template v-for="subItem in item.children">
                <!--        含有三级菜单及以上-->
                <el-submenu v-if="subItem.children" :index="subItem.id" :key="subItem.id">
                  <template slot="title">
                    <i :class="subItem.icon"></i>
                    {{ subItem.label }}
                  </template>
                  <template v-for="secondItem in subItem.children">
                    <!--               含有四级菜单-->
                    <el-submenu
                      v-if="secondItem.children"
                      :index="secondItem.id"
                      :key="secondItem.id"
                    >
                      <template slot="title">
                        <i :class="secondItem.icon"></i>
                        {{ secondItem.label }}
                      </template>
                      <el-menu-item
                        v-for="thirdItem in secondItem.children"
                        :index="thirdItem.id"
                        :key="thirdItem.id"
                      >
                        <i :class="thirdItem.icon"></i>
                        {{ thirdItem.label }}
                      </el-menu-item>
                    </el-submenu>
                    <!--                含有四级菜单-->

                    <!--                  仅到三级菜单-->
                    <el-menu-item v-else :index="secondItem.id" :key="secondItem.id">
                      <i :class="secondItem.icon"></i>
                      {{ secondItem.label }}
                    </el-menu-item>
                    <!--                  仅到三级菜单-->
                  </template>
                </el-submenu>
                <!--        含有三级菜单及以上-->

                <!-- 仅到二级菜单-->
                <el-menu-item v-else :index="subItem.id" :key="subItem.id">
                  <i :class="subItem.icon"></i>
                  {{ subItem.label }}
                </el-menu-item>
                <!-- 仅到二级菜单-->
              </template>
            </el-submenu>
          </template>
          <!--        含有二级菜单及以上-->

          <!--仅一级菜单-->
          <template v-else>
            <el-menu-item :index="item.id" :key="item.id">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.label }}</span>
            </el-menu-item>
          </template>
          <!--仅一级菜单-->
        </template>
      </el-menu>

      <!-- 右侧内容 -->
      <el-main>
        <Tags></Tags>
        <div class="content">
          <transition name="move" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Tags from "./index/Tags";
import fetchData from "../utils/fetchData";
import { API_GET_USERMANAGE } from "../api/service";
export default {
  components: {
    Tags
  },
  data() {
    return {
      collapse: false,
      fullscreen: false,
      active: "1-1-1-1",
      isScroll: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // if (key.length >= 7) {
      //   this.isScroll = true;
      // }
    },
    handleClose(key, keyPath) {
      // this.isScroll = false;
      // console.log(key, keyPath);
    },
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse;
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    getUser() {
      fetchData(API_GET_USERMANAGE, "get").then(res => {
        console.log(res);
      });
    }
  },
  created() {
    this.getUser();
  },
  mounted() {
    if (document.body.clientWidth < 1200) {
      this.collapseChage();
    }
  }
};
</script>
<style lang="less">
.main {
  height: 100%;
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #62acf5;
    color: #fff;
  }
  .el-container {
    height: 94%;
    .el-menu {
      height: 100%;
    }
    .el-main {
      padding: 0;
      height: 100%;
      // background-color: #f0f0f0;
    }
  }
  .scroll {
    overflow-y: scroll;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
  }
}
</style>