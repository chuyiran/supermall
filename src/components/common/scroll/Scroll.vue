<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default:1,
    },
    pullingUp: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    //创建scroll对象并初始化
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullingUp,
    });
    //监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }
    //监听上拉加载
    if (this.pullingUp === true) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    //滚动刷新重新计算滚动高度
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    //回滚到顶部
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //加载完成,可并允许多次下拉
    finishPulLoad() {
      this.scroll.finishPullUp();
    },
    //获取当前scroll的y位置
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },
  },
};
</script>

<style scoped>
</style>