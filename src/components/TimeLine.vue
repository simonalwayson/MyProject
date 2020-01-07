<template>
  <div class="timeline" :style="{width:graphSize.width,height:graphSize.height}">
    <h5 class="subtitle">
      <i class="subtitle-icon"></i>
      {{timeline.dataTypeInfo.remark}}
    </h5>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timing"
        color="#02E0F5"
        icon="el-icon-more"
        placement="top"
      >
        <p>{{activity.event}}</p>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  props: ["options", "index", "size"],
  created() {},
  computed: {
    graphSize() {
      return this.size;
    },
    timeline() {
      return this.options;
    },
    activities() {
      if (this.options.dataSource[0].value) {
        return this.options.dataSource[0].value;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.subtitle {
  text-indent: 1em;
  margin: 0 0 10px 0;
  font-size: 13px;
  font-weight: normal;
}
.timeline {
  // height: 500px !important;
  // width: 200px !important;
  overflow: auto;
  .el-timeline {
    // height: 500px !important;
    // width: 200px !important;
    color: #02e0f5;
    // max-height: 40vh;
    // overflow: hidden;
    .el-timeline-item {
      .is-stop {
        color: #02e0f5 !important;
      }
      p {
        color: #fff;
      }
    }
  }
}

::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}

::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb {
  border-radius: 999px;
  border: 5px solid transparent;
}

::-webkit-scrollbar-track {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2) inset;
}

::-webkit-scrollbar-thumb {
  min-height: 20px;
  background-clip: content-box;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2) inset;
}

::-webkit-scrollbar-corner {
  background: transparent;
}
</style>