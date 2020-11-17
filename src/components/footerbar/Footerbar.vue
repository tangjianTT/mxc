<template>
  <div class="footerbar">
    <div class="footerbar-inner">
      <p class="footerbar-logo">
        <img src="https://res.miaocode.com/web/mk/sprite-mmd.png" alt="" />
      </p>

      <p class="footerbar-title">
        免费领取价值
        <strong class="price">299元</strong>
        编程启蒙课
      </p>
      <ul class="form-list">
        <li class="form-item">
          <span>选择年级</span> <i class="iconfont icon-iconfontjiantou5"></i>
        </li>
        <li class="form-item"><span>手机号填写</span></li>
        <li class="form-item spec">立即领取</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footerbar",
};
</script>

<style scoped>
.footerbar {
  opacity: 0;
  position: fixed;
  height: 110px;
  width: 100%;
  left: 0;
  bottom: 0px;
  transform: translateY(100%);
  transition: all 0.3s;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-around;
}

.footerbar-inner {
  position: relative;
  padding-left: 116px;
  display: flex;

  align-items: center;
  width: 1200px;
  height: 110px;
  margin: 0 auto;
}
.footerbar-logo {
  position: absolute;
  top: -160px;
  left: -60px;
  width: 240px;
  height: 254px;
  pointer-events: none;
}

.footerbar-title {
  font-size: 28px;
  color: #fff;
}

.footerbar-title strong {
  font-size: 48px;
  color: #FFBE4C;
}

.form-list {
  display: flex;
  margin-left: 16px;
  pointer-events: none;
}

.form-list .form-item {
  width: 220px;
  height: 50px;
  margin-top: 0;
  margin-left: 20px;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  padding: 0px 12px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
}

.form-item span {
  font-size: 18px;
  color: rgb(177, 177, 177);
  line-height: 50px;
}
.form-list .spec {
  width: 110px;
  height: 100%;
  font-size: 18px;
  color: #fff;
  border: none;
  border-radius: 6px;
  background-color: #FFBE4C;
  padding: 0 19px;
}
</style>