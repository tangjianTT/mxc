<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <top></top>
    <!-- 内容区 -->
    <router-view></router-view>
    <!-- 侧边导航栏 -->
    <!-- <sidebar></sidebar> -->
    <!-- 底部区 -->
    <foot></foot>
    <!-- 底部导航栏 -->
    <!-- <footerbar :class="{ active: active }"></footerbar> -->
  </div>
</template>

<script>
import Top from "components/top/Top";
import Sidebar from "components/sidebar/Sidebar";
import Footerbar from "components/footerbar/Footerbar";
import Foot from "components/foot/Foot";

export default {
  name: "App",
  components: { Top, Sidebar, Footerbar, Foot },
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.footerbar_ops);
  },
  methods: {
    footerbar_ops() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      console.log(scrollTop);
      if (scrollTop > 650 && 7650 > scrollTop) {
        if (this.active == false) this.active = !this.active;
      } else {
        if (this.active == true) this.active = !this.active;
      }
    },
  },
};
</script>

    
<style>
@import "assets/iconfont/iconfont.css";
@import "assets/css/base.css";

.active {
  transform: translateY(0) !important;
  opacity: 1 !important;
}
</style>
