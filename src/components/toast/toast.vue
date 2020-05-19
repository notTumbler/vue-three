<template>
  <div class="toast-box">
    <transition name="toast">
      <div class="toast" :class="type" v-show="show">
        <p>{{message}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      message: "123456",
      show: false,
      type: ""
    };
  },
  components: {}
};
</script>

<style scoped >
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  text-align: center;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
  padding: 6px 10px;
}
.success {
  background-color: rgba(0, 0, 0, 0.5);
}
.error {
  background-color: #fe2c55;
}
.toast-enter-to,.toast-leave{
    opacity:1;
}
.toast-enter-active,.toast-leave-active{
    transition:all ease 0.5s;
}
.toast-enter,.toast-enter-to{
    opacity: 0;
}

</style>