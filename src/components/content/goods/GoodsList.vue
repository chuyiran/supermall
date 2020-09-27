<template>
  <div class="goodsList">
    <goods-list-item v-for="(item,index) in goodsList" :key="index" :goodsListItem='item' />
  </div>
</template>

<script>
import goodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: { goodsListItem },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang='less' scoped >
.goodsList{
    display: flex;
    flex-flow: row wrap;
    justify-content:space-around;
    background-color: #ffffff;
    //width: 100vw;
}
</style>