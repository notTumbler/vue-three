<template>
  <div class="home">
    <!-- home -->
    <TabBar></TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "../components/home/TabBar";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    TabBar
  }
};
</script>

<style scoped >
</style>