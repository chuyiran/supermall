<template>
  <div class="back-top">
      <img src="~assets/images/home/back_top.png" alt="">
  </div>
</template>

<script>
export default {
    name:'BackTop'
}
</script>

<style scoped>
    .back-top{
        position: fixed;
        right: 10px;
        bottom: 50px;
    }
    .back-top img{
        height: 40px;
        width: 40px;
        opacity: 0.8;
    }
</style>