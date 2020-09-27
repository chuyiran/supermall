<template>
  <div class="recommend">
    <div v-for="(item,index) in childrenRecommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
      <div class="recommend-title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    childrenRecommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  padding: 10px 0 15px;
  text-align: center;
  justify-content: space-around;
  border-bottom: 7px solid #f2f2f2;
  background-color: #fff;
}
img {
  width: 70px;
  height: 70px;
  margin-bottom: 5px;

}
.recommend-title {
  font-size: 13px;
  color: #777;
}
</style>