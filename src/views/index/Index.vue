<template>
  <div class="indexwarp">
    <!-- index -->
    <!-- <span class="iconfont icon-chazhao"></span> -->
    <TopBar />
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from "../../components/index/Topbar";

export default {
  name: "",
  data() {
    return {

    };
  },
  components: {
    TopBar
  }
};
</script>

<style scoped >
  .indexwarp{
    height: 100%;
    background: #000;
  }
</style>