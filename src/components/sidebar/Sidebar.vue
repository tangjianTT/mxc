<template>
  <div id="sidebar">
    <ul class="sidebar-list">
      <li>
        <i class="iconfont icon-fenlei-saishi" style="color: #fa5a2e"></i>
        <p>编程赛事</p>
      </li>
      <li>
        <i class="iconfont icon-dianhuazixun" style="color: #2bd1fd"></i>
        <p>电话咨询</p>
      </li>
      <li>
        <i class="iconfont icon-gongzhonghao" style="color: #46bb36"></i>
        <p>公众号</p>
      </li>
    </ul>
    <div class="sidebar-code">
      <p class="qrcode">
        <img
          src="https://res.miaocode.com/web/home/qrcode_service.jpg"
          alt=""
          width="75px"
        />
      </p>
      <p class="qr">二维码</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
#sidebar {
  position: fixed;
  width: 80px;
  height: 240px;
  box-shadow: 0 0 5px #c2b099;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 10px;
  background-color: #fff;
  z-index: 99999;
}
.sidebar-list {
  display: flex;
  border-radius: 10px;
  background-color: #fff;
  flex-direction: column;
  justify-content: space-between;
}
.sidebar-list li {
  padding: 6px 0px;
  height: 80px;
  text-align: center;
}

.sidebar-list li p {
  font-size: 16px;
}

.sidebar-list::before {
  content: "";
  background: url("https://res.miaocode.com/web/mk/ip.png") no-repeat center
    center/contain;
  display: block;
  height: 139px;
  width: 95px;
  bottom: 0;
  position: absolute;
  left: 35px;
  z-index: -1;
}

.sidebar-code {
  position: absolute;
  left: -10px;
  top: 255px;
  width: 102px;
  right: 20px;
  width: 102px;
  text-align: center;
  background-color: #fff;
  padding: 10px 0px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
}

.sidebar-code::before {
  content: "\e629";
  font-family: iconfont;
  position: absolute;
  top: -17px;
  left: 39px;
  color: #fff;
}

/* 二维码 */
.qrcode {
  width: 75px;
  height: 75px;
  margin: auto auto;
}

.qr {
  font-size: 12px;
}
/* 字体设置 */
.iconfont {
  font-size: 40px;
}
</style>