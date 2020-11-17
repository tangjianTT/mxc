<template>
  <div id="top">
    <div class="head-inner">
      <div class="head-logo left">
        <img src="https://res.miaocode.com/web/mk/logo.png" alt="" />
      </div>

      <div class="head-nav right">
        <ul class="nav-list">
          <li><a href="#" class="active">首页</a></li>
          <li><a href="#">课程体系</a></li>
          <li><a href="#">妙小程世界</a></li>
          <li><a href="#">关于我们</a></li>
          <li>
            <a href="#" class="study">学习中心</a>
            <div class="study-desc">创作学习由此进入</div>
          </li>
          <li><a href="#">下载中心</a></li>
          <li><p class="login">登录</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
};
</script>

<style scoped>
.active {
  color: #2ec8f1 !important;
}
/* 头部导航栏目总体样式 */
#top {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: #fff;
  z-index: 1000;
}
/* 内部样式 */
.head-inner {
  width: 1200px;
  margin: 0 auto;
}
/* logo样式 */
.head-logo {
  margin-top: 19px;
}
/* 菜单样式 */
.head-nav .nav-list li {
  position: relative;
  float: left;
}
/* 菜单文字样式 */
.nav-list li a {
  color: #c9c9c9;
  font-size: 20px;
  padding: 0 20px;
  line-height: 80px;
  height: 80px;
}
.nav-list li:first-child::after {
  content: "";
  position: absolute;
  background-color: #2ec8f1;
  left: 20px;
  right: 20px;
  bottom: 18px;
  height: 3px;
}
.nav-list li a:hover {
  color: #2ec8f1;
}
/* 登录样式 */
.nav-list .login {
  border: 1px solid #2ec8f1;
  border-radius: 18px;
  width: 82px;
  height: 36px;
  display: inline-block;
  color: #2ec8f1;
  text-align: center;
  line-height: 36px;
  margin-top: 20px;
}
/* 学习中心样式 */
.study-desc {
  position: absolute;
  width: 170px;
  height: 80px;
  bottom: -42px;
  left: -20px;
  background: url("~assets/img/nav_img1.png") no-repeat center center;
  background-size: 100%;
  text-align: center;
  line-height: 92px;
  font-size: 16px;
  color: #666666;
}
</style>