<template>
  <div class="topbar">
    <div class="left">
      <span class="iconfont icon-dingchang"></span>
    </div>

    <div class="middle">
      <div class="item" @click="changeIndex(0)">
        <span :class="topIndex==0?'active':''">同城</span>
      </div>
      <div class="item" @click="changeIndex(1)">
        <span :class="topIndex==1?'active':''">关注</span>
      </div>
      <div class="item" @click="changeIndex(2)">
        <span :class="topIndex==2?'active':''">推荐</span>
      </div>
    </div>

    <div class="right">
      <span class="iconfont icon-chazhao"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
        topIndex:1
    };
  },
  methods:{
    changeIndex(index){
        this.topIndex = index
    }
  },
  components: {}
}
</script>

<style scoped >
.iconfont {
  font-size: 24px;
}

.topbar {
  position: fixed;
  /* background: #000000; */
  width: 100%;
  height: 60px;
  font-size: 16px;
  color: #cccccc;
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  z-index: 999;
}
/* 中部 */
.middle {
  display: flex;
  justify-items: center;
  /* align-items: center; */
  width: 60%;
}
.middle .item {
  flex: 1;
  text-align: center;
}
/* .middle .item .span{
    padding-bottom:5px 0 ;
} */
.middle .item .active{
    padding-bottom: 2px;
    color: #ffffff;
    border-bottom: 3px solid skyblue;
}

/* ***** *********************/
.left,
.right {
  width: 20%;
}
/* 右边 */
.right {
  text-align: right;
}
</style>