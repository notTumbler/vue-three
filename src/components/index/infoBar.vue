<template>
  <div class="info-bar">
    <div class="infoBar-item">
      <span>@想想迪波会怎么做</span>
    </div>
    <div class="infoBar-item">
      <span>vuecli4.x.x</span>
    </div>
    <div class="infoBar-item music-item">
      <span class="iconfont icon-yinfu"></span>

      <div class="music-name">
        <span data-text="想想别人会怎么做">想想别人会怎么做</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped >

.info-bar {
  color: #ffffff;
  font-size: 14px;
  /* padding-left: 5px; */
}
.info-bar .infoBar-item {
  padding: 6px 0;
}
.icon-xinhao {
  margin-right: 5px;
}
.music-item {
  display: flex;
}
.music-item .music-name {
  width: 150px;
  /* border: 1px solid red; */
  white-space: nowrap;
  overflow: hidden;
}
.music-item .music-name span {
  display: inline-block;
  animation: scroll 3s linear infinite;
}
.music-item .music-name span::after {
  content: attr(data-text);
  margin-left: 20px;
}
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 10px));
  }
}

.iconfont{
    margin-right: 6px;
}
</style>