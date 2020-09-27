<template>
  <div id="detail-navbar">
    <navbar>
      <div slot="left" class="back" @click="backClick"><img src="~assets/images/detail/back.png" alt=""></div>
      <div slot="center" class="navbaritem">
        <div
          v-for="(item,index) in titles"
          :key="index"
          @click="itemClick(index)"
          :class="{active:currentIndex===index}"
        >{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";
export default {
  name: "DetailNavbar",
  components: {
    navbar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
      itemClick(index){
         this.currentIndex = index
         //发送到父组件的一个事件
         this.$emit("itemClick",index)
      },
      backClick(){
          this.$router.back();
      }
  },
};
</script>

<style scoped>
.navbaritem {
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
}
.active {
  color: var(--color-high-text);
}
.back{
    padding:5px 15px 5px;
}
.back img{
    width: 20px;
    height: 20px;
}
</style>