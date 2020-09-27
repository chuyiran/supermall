<template>
  <div id="tabbar">
    <tabbar-item class="tabbar-item" path="/home">
      <img src="~/assets/images/tabbar/home.svg" alt slot="item-img" />
      <img src="~/assets/images/tabbar/home_active.svg" alt slot="item-img-active" />
      <p slot="item-text">首页</p>
    </tabbar-item>

    <tabbar-item class="tabbar-item" path="/category">
      <img src="~/assets/images/tabbar/category.svg" alt slot="item-img" />
      <img src="~/assets/images/tabbar/category_active.svg" alt slot="item-img-active" />
      <p slot="item-text">分类</p>
    </tabbar-item>

    <tabbar-item class="tabbar-item" path="/cart">
      <img src="~/assets/images/tabbar/shopcart.svg" alt slot="item-img" />
      <img src="~/assets/images/tabbar/shopcart_active.svg" alt slot="item-img-active" />
      <p slot="item-text">购物车</p>
    </tabbar-item>

    <tabbar-item class="tabbar-item" path="/profile">
      <img src="~/assets/images/tabbar/profile.svg" alt slot="item-img" />
      <img src="~/assets/images/tabbar/profile_active.svg" alt slot="item-img-active" />
      <p slot="item-text">我的</p>
    </tabbar-item>
  </div>
</template>

<script>
import tabbarItem from "components/common/tabbarItem/TabbarItem";
export default {
  name: "tabbar",
  components: {
    tabbarItem,
  },
};
</script>

<style scope>
#tabbar {
  display: flex;
  height: 35px;
  /*line-height: 42px;*/
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
  align-items: center;
  text-align: center;
  padding-top: 0px;
  /*padding-bottom: 2px;*/
  box-shadow: 1px -1px 3px rgba(0, 0, 0, 0.1);
  font-size: 16px;
}
.tabbar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.tabbar-item p {
  font-size: 10px;
}
img {
  height: 15px;
  widows: 15px;
  text-align: center;
  vertical-align: center;
}
</style>