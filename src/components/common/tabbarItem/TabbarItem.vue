<template>
  <div class="tabbarItem" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  data() {
    return {
      //isActive: false,
    };
  },
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'#ff5777'
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
};
</script>

<style scope>
</style>