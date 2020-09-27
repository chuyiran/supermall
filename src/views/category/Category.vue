<template>
  <div class="wrapper">
    <ul class="content">
      <li>
        <button class="btn" @click="btnClick">按钮</button>
      </li>
      <li>列表项目*2</li>
      <li>列表项目*3</li>
      <li>列表项目*4</li>
      <li>列表项目*5</li>
      <li>列表项目*6</li>
      <li>列表项目*7</li>
      <li>列表项目*8</li>
      <li>列表项目*9</li>
      <li>列表项目*10</li>
      <li>列表项目*11</li>
      <li>列表项目*12</li>
      <li>列表项目*13</li>
      <li>列表项目*14</li>
      <li>列表项目*15</li>
      <li>列表项目*16</li>
      <li>列表项目*17</li>
      <li>列表项目*18</li>
      <li>列表项目*19</li>
      <li>列表项目*20</li>
      <li>列表项目*21</li>
      <li>列表项目*22</li>
      <li>列表项目*23</li>
      <li>列表项目*24</li>
      <li>列表项目*25</li>
      <li>列表项目*26</li>
      <li>列表项目*27</li>
      <li>列表项目*28</li>
      <li>列表项目*29</li>
      <li>列表项目*30</li>
      <li>列表项目*31</li>
      <li>列表项目*32</li>
      <li>列表项目*33</li>
      <li>列表项目*34</li>
      <li>列表项目*35</li>
      <li>列表项目*36</li>
      <li>列表项目*37</li>
      <li>列表项目*38</li>
      <li>列表项目*39</li>
      <li>列表项目*40</li>
      <li>列表项目*41</li>
      <li>列表项目*42</li>
      <li>列表项目*43</li>
      <li>列表项目*44</li>
      <li>列表项目*45</li>
      <li>列表项目*46</li>
      <li>列表项目*47</li>
      <li>列表项目*48</li>
      <li>列表项目*49</li>
      <li>列表项目*50</li>
      <li>列表项目*51</li>
      <li>列表项目*52</li>
      <li>列表项目*53</li>
      <li>列表项目*54</li>
      <li>列表项目*55</li>
      <li>列表项目*56</li>
      <li>列表项目*57</li>
      <li>列表项目*58</li>
      <li>列表项目*59</li>
      <li>列表项目*60</li>
      <li>列表项目*61</li>
      <li>列表项目*62</li>
      <li>列表项目*63</li>
      <li>列表项目*64</li>
      <li>列表项目*65</li>
      <li>列表项目*66</li>
      <li>列表项目*67</li>
      <li>列表项目*68</li>
      <li>列表项目*69</li>
      <li>列表项目*70</li>
      <li>列表项目*71</li>
      <li>列表项目*72</li>
      <li>列表项目*73</li>
      <li>列表项目*74</li>
      <li>列表项目*75</li>
      <li>列表项目*76</li>
      <li>列表项目*77</li>
      <li>列表项目*78</li>
      <li>列表项目*79</li>
      <li>列表项目*80</li>
      <li>列表项目*81</li>
      <li>列表项目*82</li>
      <li>列表项目*83</li>
      <li>列表项目*84</li>
      <li>列表项目*85</li>
      <li>列表项目*86</li>
      <li>列表项目*87</li>
      <li>列表项目*88</li>
      <li>列表项目*89</li>
      <li>列表项目*90</li>
      <li>列表项目*91</li>
      <li>列表项目*92</li>
      <li>列表项目*93</li>
      <li>列表项目*94</li>
      <li>列表项目*95</li>
      <li>列表项目*96</li>
      <li>列表项目*97</li>
      <li>列表项目*98</li>
      <li>列表项目*99</li>
      <li>列表项目*100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "category",
  data() {
    return {
      bscroll: null,
    };
  },
  components: {},
  mounted() {

    this.bscroll = new BScroll(document.querySelector(".wrapper"), {
      probeType: 3, //0与1均不起监听位置,2与3作用...
      click: false, //默认为false,阻止原生点击事件
      pullUpLoad: true,
    });

    this.bscroll.on("scroll", (position) => {
      //console.log(position.y);
    });

    this.bscroll.on("pullingUp", () => {
      console.log("上拉加载更多!");
      setTimeout(() => {
        this.bscroll.finishPullUp();
      }, 5000);
    });
  },
  methods: {
    btnClick(){
      console.log('object');
    }
  },
};
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: pink;
  overflow: hidden;
}
</style>