<template>
  <div v-if="Object.keys(goodsInfo).length!==0" class="base-info">
    <div class="info-title">{{goodsInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goodsInfo.newPrice}}</span>
      <span class="o-price">{{goodsInfo.oldPrice}}</span>
      <span v-if="goodsInfo.discount" class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length - 1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goodsInfo.services.length-1" :key="index">
        <img :src="goodsInfo.services[index-1].icon" />
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang='less' scoped >
.base-info {
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
  .info-title {
    font-size: 18px;
  }
  .info-price {
    margin: 15px 0px;
    .n-price {
      font-size: 20px;
      color: var(--color-tint);
      margin-right: 20px;
    }
    .o-price {
      text-decoration: line-through;
      color: #999;
      margin-right: 20px;
      font-size: 15px;
    }
    .discount {
      background-color: var(--color-tint);
      font-size: 15px;
      color: #f2f2f2;
      padding: 3px 10px;
      font-weight: 600;
      border-radius: 5px;
    }
  }

  .info-other {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    margin-bottom: 12px;
    border-bottom: 1px solid #f2f2f2;
    font-size: 13px;
    //最后一个元素
    & :last-child {
      display: flex;
      justify-content: flex-end;
    }
    //最后一个元素
    & :first-child {
      display: flex;
      justify-content: flex-start;
    }
    text-align: center;
    span {
      flex: 1;
      //border: 1px solid red;
    }
  }
  .info-service {
    display: flex;
    justify-content: space-between;
  }
}
</style>
