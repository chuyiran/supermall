<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name:'Navbar'
}
</script>

<style scoped>
  .navbar{
    height: 38px;
    line-height: 38px;
    display: flex;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, .1);
  }
  .navbar .left,.navbar .right{
     width: 60px;
  }
  .navbar .center{
      flex: 1;
  }

</style>