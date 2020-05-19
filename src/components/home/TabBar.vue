<template>
  <div class="tab-bar">
    <div class="item" @click="change(0)">
      <router-link to="/index" tag="span" :class="tabIndex==0?'active':''">首页</router-link>
    </div>
    <div class="item" @click="change(1)">
      <router-link to='/follow' tag="span" :class="tabIndex==1?'active':''">熟人</router-link>
    </div>
    <div class="item" @click="change(2)">
      <router-link to="/publish" tag="span" :class="tabIndex==2?'active':''">
        <span class="iconfont icon-plus-line"></span>
      </router-link>
    </div>
    <div class="item" @click="change(3)">
      <router-link to='/msg' tag="span" :class="tabIndex==3?'active':''">消息</router-link>
    </div>
    <div class="item" @click="change(4)">
      <router-link to="/sign" tag="span" :class="tabIndex==4?'active':''">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    change(index) {
      this.tabIndex = index;
      // console.log(this.tabIndex);
    }
  },
  components: {}
};
</script>

<style scoped >
.tab-bar {
  height: 50px;
  width: 100%;
  line-height: 50px;
  background: black;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #cccccc;
  font-size: 14px;
  display: flex;
  justify-items: center;
  z-index: 999;
}
.tab-bar .item {
  flex: 1;
  text-align: center;
}
.active {
  color: #ffffff;
}


</style>