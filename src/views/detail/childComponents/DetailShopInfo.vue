<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" />
      <span class="title">{{shop.name}}</span>
    </div>

    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells| sellCountFilter}}</div>
          <div class="sells-text">{{"总销量"}}</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>
<style lang='less' scoped>
.shop-info {
  padding: 10px 10px;
  border-top: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  .shop-top {
    height: 60px;
    line-height: 60px;
    display: flex;
    align-items: center;
    //text-align:center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .title {
      margin-left: 10px;
      font-size: 18px;
    }
  }

  .shop-middle {
    display: flex;
    margin-top: 15px;
    .shop-middle-item {
      flex: 1;
      text-align: center;
    }
    .shop-middle-left {
        display: flex;
        border-right: 1px solid #f2f2f2;
        justify-content:center;
        .info-sells,.info-goods{
            flex: 1;
            display: flex;
            flex-direction:column;
            justify-content: space-around;
        }
        .sells-count,.goods-count {
            font-size: 18px;
        }
    }

    .shop-middle-right {
        font-size: 13px;
        table{
            width: 180px;
        }
    }
  }
}


  .shop-middle-right .score {
    color: #5ea732;
  }
  .shop-middle-right .score-better {
    color: #f13e3a;
  }
  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }
  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }

</style>



<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

