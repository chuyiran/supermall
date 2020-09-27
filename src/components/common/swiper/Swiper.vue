<template>
  <van-swipe class="my-swipe" :autoplay="5000" indicator-color="red">
    <van-swipe-item v-for="(item,index) in swiperImgs " :key="index">
      <img :src="item" @load="imgLoad" :style="swiperStyleObj" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name: "Swiper",
  components: {},
  props: {
    swiperImgs: {
      type: Array,
      default() {
        return [];
      },
    },
    swiperStyleObj: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      isLoad: false,
    };
  },

  methods: {
    //轮播图第一张图片加载完成后执行操作
    imgLoad() {
      if (!this.isLoad) {
        this.$bus.$emit("swiperImgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
/*.my-swipe .van-swipe-item {*/
/*color: #fff;
  font-size: 20px;*/
/*height: 200px;*/
/*line-height: 200px;*/
/*text-align: center;*/
/*}*/
/*.van-swipe-item i {
  color: 40px;
}*/
.my-swipe img {
  width: 100%;
  height: 200px;
}
</style>