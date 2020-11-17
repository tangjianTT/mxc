<template>
  <div id="foot">
    <div class="foot-inner">
      <div class="foot-left">
        <p class="foot-logo">
          <img
            src="https://res.miaocode.com/web/mk/bottom_logo.png?v=1"
            alt=""
          />
        </p>
        <p class="foot-title">上海耕子教育科技有限公司</p>
        <dl>
          <dt>
            <img
              src="https://res.miaocode.com/web/mk/icon-address.png"
              alt=""
            />
          </dt>
          <dd>上海市闵行区新龙路399弄16号歌斐七宝T2—403 妙小程</dd>
        </dl>
        <dl>
          <dt>
            <img src="https://res.miaocode.com/web/mk/icon-tel.png" alt="" />
          </dt>
          <dd>400-169-7887</dd>
        </dl>
        <dl>
          <dt>
            <img src="https://res.miaocode.com/web/mk/icon-email.png" alt="" />
          </dt>
          <dd>
            <a href="#">商务合作 miaocode.mkt@37.com </a>
            <a href="#">客户服务 official@miaocode.com</a>
          </dd>
        </dl>
      </div>
      <div class="foot-middle">
        <a href="#">加入我们</a>
        <a href="#">商务合作</a>
        <a href="#">用户协议</a>
        <a href="#">隐私协议</a>
      </div>
      <div class="foot-right">
        <p class="foot-fd-title">友情链接</p>
        <div class="foot-fd-icon">
          <p class="wc">
            <img
              src="https://res.miaocode.com/web/mk/icon-wechat.png?v=1"
              alt=""
            />
          </p>
          <p class="wb">
            <img
              src="https://res.miaocode.com/web/mk/icon-weibo.png?v=1"
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot",
};
</script>

<style scoped>
#foot {
  max-width: 1920px;
  min-width: 1200px;
  height: 380px;
  margin: 0 auto;
  background-color: #303040;
}
.foot-inner {
  width: 1200px;
  margin: 110px auto 0;
  display: flex;
  justify-content: space-between;
  padding-top: 85px;
}

.foot-logo {
  width: 400px;
}
.foot-title {
  margin-top: 8px;
  font-size: 24px;
  color: #fff;
}
.foot-left dl {
  display: flex;
  margin-top: 10px;
  color: #fff;
}
.foot-left dl a {
  color: #fff;
  display: flex;
}
.foot-left dl:first-of-type {
  margin-top: 30px;
}
.foot-left dt {
  width: 20px;
  height: 20px;
}
.foot-left dd {
  margin-left: 10px;
  font-size: 16px;
  line-height: 20px;
}
.foot-middle {
  display: flex;
  flex-direction: column;
}
.foot-middle {
  font-size: 18px;
  line-height: 48px;
}
.foot-middle a {
  color: #fff;
}

.foot-fd-title {
  font-size: 18px;
  color: #fff;
}
.foot-fd-icon {
  display: flex;
  justify-content: space-between;
  width: 140px;
}
.wc,
.wb {
  width: 60px;
  height: 60px;
}
</style>