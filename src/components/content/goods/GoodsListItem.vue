<template>
  <div class="goods" @click='itemClick'>
    <div class="goods-images">
      <img :src="showImage" @load="itemImgLoad"/>
    </div>
    <div class="goods-info">
      <p>{{goodsListItem.title}}</p>
      <span class="price">
        <i class="iconfont icon-ziyuanldpi"></i>
        {{goodsListItem.price }}
      </span>
      <span class="collect">
        <i class="iconfont icon-shoucang"></i>
        {{goodsListItem.cfav}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    itemImgLoad(){
      //发送一个事件总线
      this.$bus.$emit('itemImgLoad')
    },
    itemClick(){
      this.$router.push('/detail'+'/'+this.goodsListItem.iid)
    }
  },
  computed: {
    showImage(){
      return this.goodsListItem.image||this.goodsListItem.show.img
    }
  }
};
</script>

<style lang='less' scoped>
@import url("~assets/css/home_icon.css");
.goods {
  width: 48%;
  display: flex;
  flex-flow: column nowrap;
  //margin: 20px 0;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
}
.goods-images{
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.goods-info {
  margin-top: 5px;
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price {
    margin-left: -10px;
    margin-right: 20px;
    color: red;
    font-size: 12px;
  }
  .collect {
    font-size: 12px;
  }
}
</style>