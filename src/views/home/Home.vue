<template>
  <div id="home">
    <!-- navbar头部导航 -->
    <navbar class="home-navbar">
      <div class="center" slot="center">购物街</div>
    </navbar>
    <!-- 固定在顶部的tabControl -->
    <tab-control
      ref="tabControlTop"
      :titles="['流行','新款','精选']"
      class="tab-control-top"
      @tabItemClick="tabItemClick"
      v-show="ifFixedTabcontrol"
    />
    <!-- scroll滚动区域 -->
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :probe-type="2"
      :pullingUp="true"
    >
      <!-- 轮播图 -->
      <home-swiper :swiperImgs="swiperImgs" />
      <!-- recommend -->
      <recommend :childrenRecommend="recommend" />
      <!-- 本周流行featrue -->
      <featrue />
      <!-- tabControl -->
      <tab-control
        ref="tabControlDown"
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabItemClick="tabItemClick"
      />
      <!-- goodsListItem -->
      <goods-list :goodsList="goods[clickType].list" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
//引入vant模块
import { Button } from "vant";
//引入顶部导航组件
import navbar from "components/common/navbar/Navbar";
//引入网络方法文件
import { getHomeMultidata, getHomeGoods } from "network/home";
//引入轮播图组件
import homeSwiper from "components/common/swiper/Swiper.vue";
//引用recommend组件
import recommend from "./childrenComponents/Recommend";
//引用本周流行featrue组件
import featrue from "./childrenComponents/Featrue";
//引入tabControl组件
import tabControl from "components/content/tabControl/TabControl";
//引入goodsList组件
import goodsList from "components/content/goods/GoodsList";
//引入bscroll滚动监听组件
import scroll from "components/common/scroll/Scroll";
//引入backtop组件
import BackTop from "components/content/backTop/BackTop";
//导入utlis工具js模块
import { debounce } from "../../common/mixin";
//导入全局事件混入
import { itemListenerMixin,backTopMixin } from "@/common/mixin";
export default {
  name: "Home",
  components: {
    navbar,
    homeSwiper,
    recommend,
    featrue,
    tabControl,
    goodsList,
    scroll,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      swiperImgs: [], //轮播图的数组
      clickType: "pop",
      tabControlTop: 0,
      goods: {
        //商品对象
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      ifFixedTabcontrol: false, //判断tabControl是否吸顶
      saveY: 0, //保存存scroll滚动的位置
    };
  },
  created() {
    //请求banner,recommend数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
    this.getHomeGoods("pop");
  },
  mixins:[itemListenerMixin,backTopMixin],
  mounted() {
    //监听事件总线,加入防抖动处理
    //const newRefresh = debounce(this.$refs.scroll.refresh, 500);
    //this.itemImgListener = () => {
    //  newRefresh();
    //};
    //this.$bus.$on("itemImgLoad", this.itemImgListener);
    //this.$bus.$on("itemImgLoad", () => {
    //  newRefresh();
    //});
    //监听事件-总线计算tabControl的offsetTop
    const _this = this;
    this.$bus.$on("swiperImgLoad", function () {
      _this.tabControlTop = _this.$refs.tabControlDown.$el.offsetTop;
    });
  },
  methods: {
    //tabControl点击事件监控
    tabItemClick(index) {
      switch (index) {
        case 0:
          this.clickType = "pop";
          break;
        case 1:
          this.clickType = "new";
          break;
        case 2:
          this.clickType = "sell";
      }
      this.$refs.tabControlDown.currentIndex = index;
      this.$refs.tabControlTop.currentIndex = index;
    },
    ////点击返回顶部
    //backTop() {
    //  this.$refs.scroll.scrollTo(0, 0, 600);
    //},
    //滚动监听并判断是否显示backTop与tabControlTop
    contentScroll(position) {
      //判断是否显示backTop
      this.isShowBackTop = -position.y > 1000;
      //判断是否显示tabControl
      this.ifFixedTabcontrol = -position.y > this.tabControlTop;
    },
    //上拉加载更多
    loadMore() {
      this.getHomeGoods(this.clickType);
    },
    //获取首页banner\recommend数据方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        //轮播图数据
        this.banner = res.data.banner.list;
        //recommend数据
        this.recommend = res.data.recommend.list;
        //获取父传子数组swiperImgs(采用普通循环方法)
        //for (let i = 0; i < this.banner.length; i++) {
        //  this.swiperImgs.push(this.banner[i].image);
        //}
        //获取父传子数组swiperImgs(采用高阶函数map)
        this.banner.map((n) => this.swiperImgs.push(n.image));
      });
    },
    //获取商品数据方法
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPulLoad();
      });
    },
  },
  activated() {
    //活跃
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //离开
    this.saveY = this.$refs.scroll.scroll.y; //保存当前scroll的y位置
    //取消全局事件的监听
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
};
</script>

 <style scoped>
#home {
  height: 100vh;
}
.home-navbar {
  background-color: var(--color-tint);
  color: #ffffff;
}
.home-navbar .center {
  text-align: center;
  color: white;
  font-size: 15px;
  font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑;
  letter-spacing: 5px;
}
.tab-control-top {
  position: relative;
  z-index: 9;
}
.content {
  position: absolute;
  top: 38px;
  right: 0;
  left: 0;
  bottom: 35px;
  overflow: hidden;
}
</style>