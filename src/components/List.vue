<template>
  <div class="hotQuestion" :style="{width:'100%',height:'100%'}">
    <h5 class="subtitle">
      <i class="subtitle-icon"></i>
      {{list.dataTypeInfo.remark}}
    </h5>
    <ul>
      <li v-for="item in list.dataSource[0].value" :key="item.id">{{item.desc}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["options", "index"],
  data() {
    return {};
  },
  computed: {
    list() {
      return this.options;
    }
  }
};
</script>

<style lang="less" scoped>
.subtitle {
  margin: 0 0 10px 0;
  font-size: 13px;
  font-weight: normal;
}

.hotQuestion {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0 0 3px 0;
      background-image: linear-gradient(to right, #145bad, #080c67);
      font-size: 10px;
      text-indent: 20px;
      height: 18px;
      line-height: 18px;
    }
  }
}
</style>