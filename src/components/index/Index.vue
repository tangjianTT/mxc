<template>
  <div id="index">
    <section class="index-img"></section>
    <section class="index-reason">
      <p class="title">学编程，解决孩子成长四大阻碍</p>
      <div class="reason-inner">
        <ul class="inner-list">
          <li class="inner-item">
            <p class="inner-img">
              <img
                src="https://res.miaocode.com/web/mk/index/index_icon_1.png"
                alt=""
              />
            </p>
            <div class="reason-info">
              <p class="reason-idx">01</p>
              <p class="reason-title">爱玩游戏,无法专心学些？</p>
              <p class="reason-desc">
                用写程序取代玩游戏，编程连通语数外，编程让孩子挖掘学习的乐趣
              </p>
            </div>
          </li>
          <li class="inner-item">
            <p class="inner-img">
              <img
                src="https://res.miaocode.com/web/mk/index/index_icon_2.png"
                alt=""
              />
            </p>
            <div class="reason-info">
              <p class="reason-idx">01</p>
              <p class="reason-title">爱玩游戏,无法专心学些？</p>
              <p class="reason-desc">
                用写程序取代玩游戏，编程连通语数外，编程让孩子挖掘学习的乐趣
              </p>
            </div>
          </li>
          <li class="inner-item">
            <p class="inner-img">
              <img
                src="https://res.miaocode.com/web/mk/index/index_icon_3.png"
                alt=""
              />
            </p>
            <div class="reason-info">
              <p class="reason-idx">01</p>
              <p class="reason-title">爱玩游戏,无法专心学些？</p>
              <p class="reason-desc">
                用写程序取代玩游戏，编程连通语数外，编程让孩子挖掘学习的乐趣
              </p>
            </div>
          </li>
          <li class="inner-item">
            <p class="inner-img">
              <img
                src="https://res.miaocode.com/web/mk/index/index_icon_4.png"
                alt=""
              />
            </p>
            <div class="reason-info">
              <p class="reason-idx">01</p>
              <p class="reason-title">爱玩游戏,无法专心学些？</p>
              <p class="reason-desc">
                用写程序取代玩游戏，编程连通语数外，编程让孩子挖掘学习的乐趣
              </p>
            </div>
          </li>
        </ul>
        <p class="bg-img">
          <img src="https://res.miaocode.com/web/mk/index/bg2.png" alt="" />
        </p>
      </div>
    </section>
    <section class="index-reason2">
      <p class="title">为什么选择妙小程</p>

      <div class="reason2-inner">
        <div class="reason2-left">
          <ul class="reason2-list">
            <li class="reason2-item" :class="{ active: 0 == index }">
              <p class="reason2-cron">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r1a.png"
                  alt=""
                />
              </p>
              <p class="reason2-title">上市企业保障，安全无忧</p>
              <p class="reason2-desc">
                妙小程已纳入A股上市企业三七互娱旗下，实现更多资源与技术的支持，学员权益有保障。
              </p>
            </li>
            <li class="reason2-item" :class="{ active: 1 == index }">
              <p class="reason2-cron">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r2a.png"
                  alt=""
                />
              </p>
              <p class="reason2-title">小班直播课堂，学习效果佳</p>
              <p class="reason2-desc">
                课堂采用直播小班教学，讲师+班主任全程服务，及时启发和答疑，提高孩子的学习效果。
              </p>
            </li>
            <li class="reason2-item" :class="{ active: 2 == index }">
              <p class="reason2-cron">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r3a.png"
                  alt=""
                />
              </p>
              <p class="reason2-title">硅谷教研，打造实力课程体系</p>
              <p class="reason2-desc">
                前甲骨文首席工程师联合硅谷AI教育专家，打造符合中国孩子的课程体系。配合全职老师授课，教学更具专业性。
              </p>
            </li>
            <li class="reason2-item" :class="{ active: 3 == index }">
              <p class="reason2-cron">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r4a.png"
                  alt=""
                />
              </p>
              <p class="reason2-title">对标竞赛，助力升学择校</p>
              <p class="reason2-desc">
                拥有从幼儿编程思维—图形化编程—Python编程的完整教育体系，对标编程重大赛事、等级考试等项目，升学择校更有竞争力。
              </p>
            </li>
          </ul>
          <ul class="reason2-btns">
            <li
              class="reason2-btn-item"
              @click="change(0)"
              :class="{ active_btn: 0 == index }"
              @mouseover="mouseover(0)"
            >
              <p class="reason2-btn-cron">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r1b.png"
                  alt=""
                />
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r1c.png"
                  alt=""
                />
              </p>
              <p class="reason2-btn-title">上市企业</p>
            </li>

            <li
              class="reason2-btn-item"
              @click="change(1)"
              :class="{ active_btn: 1 == index }"
              @mouseover="mouseover(1)"
            >
              <p class="reason2-btn-cron">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r2b.png"
                  alt=""
                />
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r2c.png"
                  alt=""
                />
              </p>
              <p class="reason2-btn-title">小班课堂</p>
            </li>

            <li
              class="reason2-btn-item"
              @click="change(2)"
              :class="{ active_btn: 2 == index }"
              @mouseover="mouseover(2)"
            >
              <p class="reason2-btn-cron">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r3b.png"
                  alt=""
                />
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r3c.png"
                  alt=""
                />
              </p>
              <p class="reason2-btn-title">硅谷教研</p>
            </li>

            <li
              class="reason2-btn-item"
              @click="change(3)"
              :class="{ active_btn: 3 == index }"
              @mouseover="mouseover(3)"
            >
              <p class="reason2-btn-cron">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r4b.png"
                  alt=""
                />
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-r4c.png"
                  alt=""
                />
              </p>
              <p class="reason2-btn-title">对标竞赛</p>
            </li>
          </ul>
        </div>
        <div class="reason2-right">
          <p :class="{ active_cg: 0 == index }" @mouseover="mouseover(0)">01</p>
          <p :class="{ active_cg: 1 == index }" @mouseover="mouseover(1)">02</p>
          <p :class="{ active_cg: 2 == index }" @mouseover="mouseover(2)">03</p>
          <p :class="{ active_cg: 3 == index }" @mouseover="mouseover(3)">04</p>
        </div>
        <div class="reason2-over">
          <img src="https://res.miaocode.com/web/mk/index/bg3.png" alt="" />
        </div>
      </div>

      <div class="international">
        <p class="title">国际接轨，提升全球化视野</p>
        <div class="international-inner">
          <video
            src="https://res.miaocode.com/web/mk/index/index_video.mp4"
            width="100%"
            height="100%"
            controls
          ></video>
        </div>
      </div>

      <div class="cysy">
        <p class="title">4-16岁编程课程体系</p>
        <div class="cysy-pic1 active">
          <img src="https://res.miaocode.com/web/mk/index/bg5_new.png" alt="" />
        </div>
        <p class="cysy-pic2">
          <img src="https://res.miaocode.com/web/mk/index/bg6_new.png" alt="" />
        </p>
      </div>

      <div class="teacher">
        <p class="title">10年经验教研团队</p>
        <div class="teacher-img">
          <ul class="teacher-list2">
            <li
              class="teacher-item2"
              :class="{ active_teacher: 0 == teacherIndex }"
            >
              <p class="teacher-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/teacher1.png"
                  alt=""
                />
              </p>
              <div class="teacher-info">
                <p class="teacher2-name">管春华</p>
                <p class="teacher2-level">精英班主任</p>
                <ul class="teacher-achs">
                  <li class="teacher-ach">南京大学计算机系</li>
                  <li class="teacher-ach">中国人工智能学会会员</li>
                  <li class="teacher-ach">曾任甲骨文首席工程师</li>
                  <li class="teacher-ach">行业经验累积超过12年</li>
                </ul>
              </div>
            </li>
            <li
              class="teacher-item2"
              :class="{ active_teacher: 1 == teacherIndex }"
            >
              <p class="teacher-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/teacher2.png"
                  alt=""
                />
              </p>
              <div class="teacher-info">
                <p class="teacher2-name">吴强</p>
                <p class="teacher2-level">精英班主任</p>
                <ul class="teacher-achs">
                  <li class="teacher-ach">上海交通大学计算机系硕士</li>
                  <li class="teacher-ach">曾任科技公司CEO</li>
                  <li class="teacher-ach">多次主导参与创业项目</li>
                  <li class="teacher-ach">行业经验累积超过10年</li>
                </ul>
              </div>
            </li>
            <li
              class="teacher-item2"
              :class="{ active_teacher: 2 == teacherIndex }"
            >
              <p class="teacher-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/teacher3.png"
                  alt=""
                />
              </p>
              <div class="teacher-info">
                <p class="teacher2-name">王丽娜</p>
                <p class="teacher2-level">精英班主任</p>
                <ul class="teacher-achs">
                  <li class="teacher-ach">西北民族大学</li>
                  <li class="teacher-ach">7年STEAM教育行业经验</li>
                  <li class="teacher-ach">课程累计开发1000余课时</li>
                  <li class="teacher-ach">落地千所学校及培训机构</li>
                  <li class="teacher-ach">行业经验累积超过10年</li>
                </ul>
              </div>
            </li>
            <li
              class="teacher-item2"
              :class="{ active_teacher: 3 == teacherIndex }"
            >
              <p class="teacher-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/teacher4.png"
                  alt=""
                />
              </p>

              <div class="teacher-info">
                <p class="teacher2-name">储修乐</p>
                <p class="teacher2-level">精英班主任</p>
                <ul class="teacher-achs">
                  <li class="teacher-ach">拥有高中信息技术教师资格证</li>
                  <!-- <li class="teacher-ach">
                    精通数据分析、人工智能领域教育产品研发
                  </li> -->
                  <li class="teacher-ach">全国少儿编程竞赛专业测评师</li>
                  <li class="teacher-ach">5年互联网教育产品研发经验</li>
                </ul>
              </div>
            </li>
            <li
              class="teacher-item2"
              :class="{ active_teacher: 4 == teacherIndex }"
            >
              <p class="teacher-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/teacher5.png"
                  alt=""
                />
              </p>
              <div class="teacher-info">
                <p class="teacher2-name">杨浩东</p>
                <p class="teacher2-level">精英班主任</p>
                <ul class="teacher-achs">
                  <li class="teacher-ach">南京大学计算机系</li>
                  <li class="teacher-ach">中国人工智能学会会员</li>
                  <li class="teacher-ach">曾任甲骨文首席工程师</li>
                  <li class="teacher-ach">行业经验累积超过12年</li>
                </ul>
              </div>
            </li>
          </ul>
          <ul class="teacher-list">
            <li
              class="teacher-item"
              :class="{ active_info: 0 == teacherIndex }"
            >
              <p class="teacher-cover">
                <img
                  src="https://res.miaocode.com/web/mk/index/teacher1.png"
                  alt=""
                />
              </p>
              <p class="teacher-name">管春华</p>
              <p class="teacher-level">精英班主任</p>
            </li>
            <li
              class="teacher-item"
              :class="{ active_info: 1 == teacherIndex }"
            >
              <p class="teacher-cover">
                <img
                  src="https://res.miaocode.com/web/mk/index/teacher2.png"
                  alt=""
                />
              </p>
              <p class="teacher-name">吴强</p>
              <p class="teacher-level">精英班主任</p>
            </li>
            <li
              class="teacher-item"
              :class="{ active_info: 2 == teacherIndex }"
            >
              <p class="teacher-cover">
                <img
                  src="https://res.miaocode.com/web/mk/index/teacher3.png"
                  alt=""
                />
              </p>
              <p class="teacher-name">王丽娜</p>
              <p class="teacher-level">精英班主任</p>
            </li>
            <li
              class="teacher-item"
              :class="{ active_info: 3 == teacherIndex }"
            >
              <p class="teacher-cover">
                <img
                  src="https://res.miaocode.com/web/mk/index/teacher4.png"
                  alt=""
                />
              </p>
              <p class="teacher-name">储修乐</p>
              <p class="teacher-level">精英班主任</p>
            </li>
            <li
              class="teacher-item"
              :class="{ active_info: 4 == teacherIndex }"
            >
              <p class="teacher-cover">
                <img
                  src="https://res.miaocode.com/web/mk/index/teacher5.png"
                  alt=""
                />
              </p>
              <p class="teacher-name">杨浩东</p>
              <p class="teacher-level">精英班主任</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="model">
        <p class="title">更高效的教学模式</p>
        <div class="model-inner">
          <p class="model-pic">
            <img src="https://res.miaocode.com/web/mk/index/bg8.png" alt="" />
          </p>
          <div class="model-content">
            <ul class="model-list">
              <li class="model-item" :class="{ active_model: 0 == index }">
                <p class="model-idx">
                  <img
                    src="https://res.miaocode.com/web/mk/index/num1a.png?v=1"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                  <img
                    src="https://res.miaocode.com/web/mk/index/num1b.png?v=1"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </p>
                <p class="model-desc">
                  固定时间+固定老师+固定学伴，还原真实课堂环境，孩子相互促进，更易坚持。
                </p>
              </li>
              <li class="model-item" :class="{ active_model: 1 == index }">
                <p class="model-idx">
                  <img
                    src="https://res.miaocode.com/web/mk/index/num2a.png?v=1"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                  <img
                    src="https://res.miaocode.com/web/mk/index/num2b.png?v=1"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </p>
                <p class="model-desc">
                  固定时间+固定老师+固定学伴，还原真实课堂环境，孩子相互促进，更易坚持。
                </p>
              </li>
              <li class="model-item" :class="{ active_model: 2 == index }">
                <p class="model-idx">
                  <img
                    src="https://res.miaocode.com/web/mk/index/num3a.png?v=1"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                  <img
                    src="https://res.miaocode.com/web/mk/index/num3b.png?v=1"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </p>
                <p class="model-desc">
                  固定时间+固定老师+固定学伴，还原真实课堂环境，孩子相互促进，更易坚持。
                </p>
              </li>
              <li class="model-item" :class="{ active_model: 3 == index }">
                <p class="model-idx">
                  <img
                    src="https://res.miaocode.com/web/mk/index/num4a.png?v=1"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                  <img
                    src="https://res.miaocode.com/web/mk/index/num4b.png?v=1"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </p>
                <p class="model-desc">
                  固定时间+固定老师+固定学伴，还原真实课堂环境，孩子相互促进，更易坚持。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="promise">
        <p class="title">服务承诺</p>
        <div class="promise-inner">
          <ul class="promise-list">
            <li class="promise-item">
              <p class="promise-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-p1.png"
                  alt=""
                />
              </p>
              <p class="promise-info">
                付费后，每个学员都将与妙小程签订
                <strong>《课程服务协议》</strong>
                ，保障家长的利益。
              </p>
            </li>
            <li class="promise-item">
              <p class="promise-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-p1.png"
                  alt=""
                />
              </p>
              <p class="promise-info">
                首次购买课程，可
                <strong>享受免费试学</strong>
                ，被扣除的课时不超过2课时，可申请全额退款。
              </p>
            </li>
            <li class="promise-item">
              <p class="promise-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/icon-p1.png"
                  alt=""
                />
              </p>
              <p class="promise-info">
                采用
                <strong>100%全职优质教师</strong>
                ，且拥有教育或编程相关的学历/行业背景，熟悉STEAM教育。
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="experience">
        <p class="title">如何免费体验课程</p>
        <div class="experience-inner">
          <ul class="experience-list">
            <li class="experience-item">
              <p class="experience-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/num1.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </p>
              <div class="experience-info">
                <p class="experience-title">在线注册</p>
                <p class="experience-desc">免费领取价值299元编程试听课</p>
              </div>
            </li>
            <li class="experience-item">
              <p class="experience-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/num2.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </p>
              <div class="experience-info">
                <p class="experience-title">预约时间</p>
                <p class="experience-desc">
                  课程顾问将电话与您确定试听课的时间
                </p>
              </div>
            </li>
            <li class="experience-item">
              <p class="experience-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/num3.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </p>
              <div class="experience-info">
                <p class="experience-title">开始上课</p>
                <p class="experience-desc">下载应用，进入课堂上课吧</p>
              </div>
            </li>
            <li class="experience-item">
              <p class="experience-pic">
                <img
                  src="https://res.miaocode.com/web/mk/index/num4.png"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </p>
              <div class="experience-info">
                <p class="experience-title">课后复习</p>
                <p class="experience-desc">
                  进入妙小程学习助手，查看老师点评及作业
                </p>
              </div>
            </li>
          </ul>
          <button class="experience-btn">立即报名</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      timer: "",
      index: 0,
      currentIndex: 0,
      teacherIndex: 0,
    };
  },
  mounted() {
    this.timer = setInterval(this.reason2_carousel, 1500);
    this.timer2 = setInterval(this.teacher_carousel, 2000);
  },
  methods: {
    reason2_carousel() {
      this.index += 1;
      this.index == 4 ? (this.index = 0) : this.index;
      console.log(this.index);
    },
    teacher_carousel() {
      this.teacherIndex += 1;
      this.teacherIndex == 5 ? (this.teacherIndex = 0) : this.teacherIndex;
    },
    change(currentIndex) {
      this.index = currentIndex;
    },
    mouseover(currentIndex) {
      this.index = currentIndex;
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.index-img {
  height: 650px;
  background: #fff url("https://res.miaocode.com/web/mk/index/bg1.png") center
    center no-repeat;
  position: relative;
  top: 80px;
}

.index-reason {
  height: 912px;
  position: relative;
  margin-top: 160px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  line-height: 1;
  color: #666;
}

.title::before,
.title::after {
  content: "";
  width: 70px;
  height: 18px;
  margin: 0 20px;
}
.title::before {
  background: url("https://res.miaocode.com/web/mk/index/icon-title-left.png")
    no-repeat center center/contain;
}

.title::after {
  background: url("https://res.miaocode.com/web/mk/index/icon-title-right.png")
    no-repeat center center/contain;
}

.reason-inner {
  position: relative;
  width: 1276px;
  height: 635px;
  margin: 80px auto 0;
}
.inner-list {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
}
.inner-list .inner-item {
  width: 334px;
  height: 378px;
  position: absolute;
}
.inner-item:nth-of-type(1) {
  top: 197px;
  left: 21px;
}
.inner-item:nth-of-type(2) {
  top: 246px;
  left: 352px;
  width: 322px;
  height: 371px;
}
.inner-item:nth-of-type(3) {
  right: 391px;
  width: 321px;
  height: 369px;
}
.inner-item:nth-of-type(4) {
  right: 0;
  bottom: 16px;
  width: 392px;
  height: 455px;
}
.inner-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.inner-img img {
  height: 100%;
  width: 100%;
}

.reason-info {
  position: absolute;
  top: 2px;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 30px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.5s;
  transform: rotateY(180deg);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.reason-idx {
  font-size: 28px;
  text-align: center;
  color: #26C6F1;
}
.reason-title {
  font-size: 20px;
  margin-top: 15px;
  text-align: center;
  color: #333;
}
.reason-desc {
  margin: 20px 10% 0;
  padding-top: 20px;
  border-top: 1px solid #EBEBEB;
  font-size: 18px;
  color: #666;
}
.reason2-cron {
  height: 90px;
  width: 90px;
}
.inner-item:hover .reason-info {
  transform: rotateY(0deg);
}
.bg-img {
  position: absolute;
  top: -13px;
  left: -6px;
  right: -2px;
  bottom: -18px;
  pointer-events: none;
}
.bg-img img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}

.index-reason2 {
  position: relative;
  /* height: 856px; */
  background-color: red;
  padding-top: 80px;
  background: url("https://res.miaocode.com/web/mk/index/bg21.png") center
    center no-repeat;
  margin-bottom: 1000px;
}

.reason2-over {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100;
}

.reason2-inner {
  width: 840px;
  height: 557px;
  background-color: #fff;
  margin: 90px auto 0;
  padding: 60px 80px 64px 127px;
  display: flex;
  justify-content: space-around;
}

.reason2-item {
  display: none;
  height: 330px;
}
.active {
  display: block !important;
  /* color: #36cbf3 !important; */
}

.active_btn p {
  color: #36cbf3 !important;
}

.active_btn .reason2-btn-cron img:last-of-type {
  display: block;
}

.active_btn .reason2-btn-cron img:first-of-type {
  display: none;
}

.active_cg {
  color: #36cbf3 !important;
  border-left: 3px solid #36cbf3 !important;
}
.reason2-btn-cron img {
  width: 58px;
  height: 58px;
  display: block;
}

.reason2-title {
  margin: 25px 0;
  font-size: 30px;
  color: #333;

  align-items: center;
}
.reason2-title::before {
  content: "";
  width: 5px;
  height: 28px;
  line-height: 30px;
  background-color: #36cbf3;
  margin-right: 20px;
  display: inline-block;
}

.reason2-desc {
  width: 460px;
  font-size: 22px;
  color: #666;
}

.reason2-btns {
  display: flex;
}
.reason2-btn-item {
  margin-right: 20px;
}
.reason2-btns-cron {
  width: 58px;
  height: 58px;
}
.reason2-btn-cron img:last-of-type {
  display: none;
}
.reason2-btn-title {
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  color: #666;
}
.reason2-right p {
  line-height: 88px;
  padding: 0 20px;
  font-size: 24px;
  color: #e5e5e5;
  border-left: 3px solid #e8e8e8;
}

.international {
  height: 1000px;
  background: url("https://res.miaocode.com/web/mk/index/bg4.png") center center
    no-repeat;
  padding-top: 160px;
}

.international-inner {
  width: 1100px;
  height: 632px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #fff;
  border-radius: 10px;
}

.cysy {
  height: 790px;
  background-color: #fff;
  padding-top: 110px;
}

.cysy-pic1 {
  height: 228px;
  width: 1214px;
  overflow: hidden;
  margin: 0 auto;
}

.cys-pic1 .active {
  animation: expandPic ease-in 1.5s forwards;
}

.cysy-pic2 {
  width: 1214px;
  height: 380px;
  margin: 0 auto;
}

.teacher {
  height: 1047px;
  padding-top: 110px;
  background: url("https://res.miaocode.com/web/mk/index/bg7.png") center bottom
    no-repeat;
}

.teacher-img {
  width: 1200px;
  margin: 60px auto 0;
  position: relative;
}

.teacher-list {
  display: flex;
  justify-content: space-around;
  width: 1200px;
  position: absolute;
  bottom: -45px;
  margin: a;
}
.teacher-list2 {
  width: 100%;
}

.teacher-item {
  width: 222px;
  height: 216px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.teacher-cover {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 10px solid rgba(255, 255, 255, 0.25);
  overflow: hidden;
  box-sizing: content-box;
}

.teacher-name {
  font-size: 20px;
  margin: 10px 0;
  color: #333;
}
.teacher-level {
  font-size: 16px;
  margin-top: 5px;
  color: #999;
}

.teacher-item2 {
  display: none;
}

.active_teacher {
  display: flex;
}
.active_info {
  background-color: #2bd1fd;
  width: 280px;
  height: 274px;
  position: relative;
  top: -58px;
}
.teacher-pic {
  width: 420px;
  height: 668px;
  padding-bottom: 200px;
  margin-left: 123px;
}
.teacher-info {
  margin-top: 30px;
  margin-left: 160px;
}
.teacher2-name {
  font-size: 45px;
  color: #2bc7f1;
}
.teacher2-level {
  font-size: 33px;
  color: #666666;
  margin: px 0;
}
.teacher-ach {
  font-size: 27px;
  color: #333;
  line-height: 50px;
}

.teacher-ach::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #2bc7f1;
  border-radius: 50%;
  margin-right: 20px;
  position: relative;
  top: -2px;
}

.model {
  height: 946px;
  padding-top: 110px;
  background-color: #fff;
}

.model-list {
  width: 600px;
  margin-right: -16px;
}

.model-inner {
  width: 1200px;
  margin: 80px auto 0;
  display: flex;
  justify-content: space-between;
}
.model-pic {
  width: 598px;
  height: 631px;
  margin-left: -34px;
}

.model-item {
  height: 130px;
  padding: 34px 74px 34px 0px;
  background-color: #fff;
  display: flex;
  border-radius: 20px;
  margin-top: 25px;
  box-shadow: 0px 8px 7px 1px rgba(57, 57, 57, 0.05);
}
.model-idx {
  flex: none;
  width: 86px;
  height: 66px;
  margin: 0 20px;
}
.model-idx img:first-of-type {
  display: none;
}
.model-desc {
  margin-left: 34px;
  font-size: 20px;
  color: #666;
}

.active_model {
  background-color: #fdbd44;
  color: #fff;
}
.active_model p {
  color: #fff;
}
.active_model img:last-of-type {
  display: none;
}
.active_model img:first-of-type {
  display: block;
}

.promise {
  height: 660px;
  padding-top: 110px;
  background-color: #f6f6f6;
}

.promise-inner {
  width: 1200px;
  margin: 102px auto 0;
  position: relative;
}
.promise-inner::before {
  content: "";
  display: inline-block;
  background: url("https://res.miaocode.com/web/mk/index/bg11.png") center
    center repeat-x;
  width: 90%;
  height: 12px;
  position: absolute;
  left: -2px;
  top: 35%;
}
.promise-list {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.promise-pic {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
.promise-info {
  width: 248px;
  margin-top: 20px;
  font-size: 18px;
  text-align: left;
  color: #666;
}
.promise-info strong {
  color: #fdbd44;
}
.experience {
  height: 812px;
  padding-top: 110px;
  background: url("https://res.miaocode.com/web/mk/index/bg9.png") right bottom
    no-repeat;
}
.experience-inner {
  width: 1200px;
  margin: 110px auto 0;
}
.experience-list {
  display: flex;
  flex-wrap: wrap;
}
.experience-item {
  display: flex;
  min-width: 445px;
  height: 145px;
}
.experience-pic {
  width: 58px;
  height: 49px;
  margin-right: 20px;
}

.experience-title {
  font-size: 24px;
  color: #333;
}
.experience-desc {
  margin-top: 4px;
  font-size: 18px;
  color: #666;
}
.experience-item:nth-of-type(even) {
  padding-left: 108px;
  border-left: 1px solid #eee;
}
.experience-item:nth-of-type(3),
.experience-item:nth-of-type(4) {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  border-top: 1px solid #eee;
}
.experience-btn {
  background-color: #fdbd44;
  width: 400px;
  height: 80px;
  color: #fff;
  font-size: 30px;
  border-radius: 40px;
  border: none;
  margin-top: 100px;
  margin-left: 275px;
  outline: none;
  cursor: pointer;
}
</style>
