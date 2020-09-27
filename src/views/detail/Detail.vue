<template>
  <div id="detail">
    <!-- 顶部导航navbar -->
    <detail-navbar class="detail-navbar" @itemClick="itemClick" ref="navbar" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <!-- 轮播图swiper -->
      <detailSwiper :swiperImgs="topImages" :swiperStyleObj="swiperStyleObj" />
      <!-- 商品信息goodsInfo -->
      <detail-base-info :goodsInfo="goodsInfo" />
      <!-- 店铺信息shopInfo -->
      <detail-shop-info :shop="shop" />
      <!-- 商品详情信息 -->
      <good-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <!-- 商品参数 -->
      <detail-param-info :paramInfo="paramInfo" ref="param" />
      <!-- 商品评论 -->
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <!-- 推荐数据 -->
      <detail-goods-list :goodsList="recommend" ref="recommend" />
    </scroll>
    <!-- 返回顶部按钮BackTop -->
    <back-top @click.native="backTop" v-show="isShowBackTop" class="detail-backtop" />
    <!-- 底部bar bottom-bar -->
    <detail-bottom-bar />
  </div>
</template>

<script>
//导入detailNavbar导航
import detailNavbar from "./childComponents/DetailNavbar";
//导入轮播图模块
import detailSwiper from "components/common/swiper/Swiper";
//导入DetailBaseInfo模块(goodsInfo)
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
//导入店铺模块(shopInfo)
import DetailShopInfo from "./childComponents/DetailShopInfo";
//导入 scroll滚动模块
import scroll from "components/common/scroll/Scroll";
//导入商品信息模块(goodInfo)
import goodInfo from "./childComponents/DetailGoodInfo";
//导入商品参数信息模块
import DetailParamInfo from "./childComponents/DetailParamInfo";
//导入评论信息模块
import DetailCommentInfo from "./childComponents/DetailCommentInfo";
//导入推荐模板
import DetailGoodsList from "components/content/goods/GoodsList";
//导入底部导航DetailBottomBar
import DetailBottomBar from "./childComponents/DetailBottomBar";
//导入backTop模块
import BackTop from "components/content/backTop/BackTop";
//导入detail数据请求
import {
  getDetailData,
  GoodsInfo,
  Shop,
  ParamInfo,
  getRecommend,
} from "network/detail";
//导入防抖器
import { debounce } from "@/common/utlis";
//导入混入
import { itemListenerMixin, backTopMixin } from "@/common/mixin";

export default {
  name: "Detail",
  components: {
    detailNavbar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    scroll,
    goodInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailGoodsList,
    DetailBottomBar,
    BackTop,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null, //商品ID
      topImages: null, //轮播图图片
      swiperStyleObj: { width: "100%", height: "400px" }, //轮播图样式
      goodsInfo: {}, //商品信息
      shop: {}, //店铺信息
      detailInfo: {}, //商品详情信息
      paramInfo: {}, //商品参数
      commentInfo: {}, //评论信息
      recommend: [], //推荐数据
      themeTopY: [], //模块到offsettOP的数组
      getThemeTopY: null,
      currentScrollIndex: null, //滚动时navbar中对应的index值
    };
  },
  created() {
    //获取id
    this.iid = this.$route.params.iid;
    //获取顶部轮播图数据及产品信息数据
    //根据id获取详情数据
    getDetailData(this.iid).then((res) => {
      let data = res.result;
      //获取轮播图信息
      this.topImages = res.result.itemInfo.topImages;
      //获取商品信息
      this.goodsInfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
      //获取goodInfo数据(商品信息)
      this.detailInfo = data.detailInfo;
      //获取商品参数
      this.paramInfo = new ParamInfo(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //获取评论数据
    getRecommend().then((res) => {
      this.recommend = res.data.list;
      //console.log(this.recommend);
    });
    this.getThemeTopY = debounce(() => {
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.param.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE);
    }, 500);
  },
  mounted() {
    //#region 已加入混入mixin
    //监听事件总线,加入防抖动处理
    //const _this=this;
    //const newRefresh = debounce(this.$refs.scroll.refresh, 500);
    //this.itemImgListener = () => {
    //  newRefresh();
    //};
    //this.$bus.$on("itemImgLoad", this.itemImgListener);
    //#endregion
  },
  methods: {
    imgLoad() {
      this.getThemeTopY();
      this.$refs.scroll.refresh();
    },
    //navbar点击后scroll滚动到相对应的位置
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 500);
    },
    //navbar滚动监听
    contentScroll(position) {
      let y = -position.y;
      let length = this.themeTopY.length;
      for (let i = 0; i < length; i++) {
      if (
      this.currentScrollIndex !== i &&
      y >= this.themeTopY[i] &&
      y < this.themeTopY[i + 1]
      ) {
      this.currentScrollIndex = i;
      this.$refs.navbar.currentIndex = this.currentScrollIndex;
      }
      }
      //判断是否显示backTop
      this.isShowBackTop = -position.y > 1000;
    },
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
};
</script>  

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: white;
  height: 100vh;
}
.detail-navbar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 38px - 49px);
}
</style>

