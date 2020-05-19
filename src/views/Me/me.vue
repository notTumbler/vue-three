<template>
  <div class="me">
    <div class="me-top" :style="bgPic">
      <div class="menu-box">
        <div class="menu-icon"></div>
      </div>
    </div>

    <!-- 中间 -->
    <div class="me-wrap">
      <div class="me-content">
        <div class="info">
          <img src="../../static/img/xcy.png" alt />
          <button>编辑资料</button>
          <button>+朋友</button>
        </div>
        <div class="des">
          <h2>爱学习的孩子</h2>
          <span>抖音号：1234567891</span>
          <div class="box">
            ~~~~~~U_U~~~~~~九万里风鹏正举，风休住，蓬舟直取三山去！
          </div>
        </div>
        <div class="user-tag">
          <span>21歲</span>
          <span>中國</span>
          <span>+添加学校等标签</span>
        </div>
        <div class="user-tag2">
          <span>
            <a href>2</a>获赞
          </span>
          <span>
            <a href>250</a>关注
          </span>
          <span>
            <a href>0.1w</a>+粉丝
          </span>
        </div>
        <div class="me-ab">good good study, day day up</div>
      </div>

      <div class="me-tab">
        <div class="me-navbar">
          <div class="item" @click="changeTab(0)"
            :class="indexTab===0?'active':''"
          >作品3</div>
          <div class="item" @click="changeTab(1)"
            :class="indexTab===1?'active':''"
          >动态1</div>
          <div class="item" @click="changeTab(2)"
            :class="indexTab===2?'active':''"
          >喜欢2</div>
        </div>

        <div class="tab-wrap">
          <div class="tab-con" v-show="indexTab===0">
            <div class="tab-img">
              1
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div class="tab-con" v-show="indexTab===1">
            2
          </div>
          <div class="tab-con" v-show="indexTab===2">
            3
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "me",
  data() {
    return {
      bgPic: {
        backgroundImage: "url(" + require("@/static/img/子曰.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
      },
      indexTab:0
    };
  },
  methods: {
    changeTab(index){
      this.indexTab = index;
    }
  },
  components: {}
};
</script>

<style scoped >
.me {
  position: relative;
}
.me-top {
  height: 160px;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
/* 三横线图标 */
.menu-box {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-icon {
  background: #ffffff;
  border-top: #ffffff 2px solid;
  border-bottom: #ffffff 2px solid;
  background-clip: content-box;
  width: 20px;
  height: 2px;
  padding: 5px 0;
}
/* 中间部分 */
.me-wrap {
  position: absolute;
  top: 170px;
  width: 100%;
  background-color: #101821;
  color: #ffffff;
}
.me-content {
  padding: 0 15px;
}
.info {
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info img {
  background-size: 100% 100%;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-right: 20px;
}
.info button {
  height: 40px;
  padding: 0 14px;
  background-color: #393842;
  border: none;
  color: #ffffff;
  margin-left: 24px;
}
.des{
  padding: 10px 0;
}
.des h2{
  margin: 2px 0;
  font-size: 24px;
  font-weight: bold;
}
.des span{
  padding: 10px 0 15px 0;
  display: block;
}
.box{
  display: flex;
  flex-wrap: wrap;
  line-height: 24px;
  margin: 10px 0;
}
.user-tag span{
  font-size: 14px;
  color: #ccc;
  margin-right: 5px;
  background: rgba(0, 0, 0,.5);
  padding: 5px 8px;
}
.user-tag2{
  padding: 20px 0;
}
.user-tag2 span{
  font-size: 15px;
  margin-right: 15px;
  color: #ccc;
}
.user-tag2 a{
  /* font-size: 18px; */
  margin-right: 5px;
  color: #fff;
}
.me-ab{
  background:red;
  text-align: center;
  padding: 10px 0;
  border-radius: 6px;
}
.me-tab{
  height: 300px;
}
.me-navbar{
  display:flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
}
.me-navbar .item{
  padding: 10px 25px;
}
.me-navbar .active{
  border-bottom: 2px solid #ffdf0e;
  color: #fff;
}
.tab-img img{
  width: 33.33%;
}
</style>