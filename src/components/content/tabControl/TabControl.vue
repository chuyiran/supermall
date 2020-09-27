<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      @click="itemClick(index)"
      :class="{active:currentIndex===index}"
      :key="index"
      class="tab-control-item"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabItemClick",index)
    }
  },
};
</script>
 

 

<style lang="less" scoped>
.tab-control {
  display: flex;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  background-color: #fff;
  //border-top: 7px solid #f2f2f2;
  .tab-control-item {
    flex: 1;
    text-align: center;
    span {
      padding: 6px;
    }
  }
}
.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}
</style>>

