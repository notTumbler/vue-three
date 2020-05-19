<template>
  <div class="publish">
    <div class="pub-top">
      <div class="back">
        <span class="iconfont icon-guanbi" @click="back"></span>
      </div>
      <div>
        <span class="iconfont icon-yinfu">
          <span></span>选择音乐
        </span>
      </div>
    </div>

    <div class="upload-box">
      <video ref="vide" autoplay style="width:100%;height:500px;object-fit:fill" src=""></video>
      <div class="upload-bar">
        <div class="bar-item">
          <div class="icon"></div>
          <p>道具</p>
        </div>
        <div class="bar-item" @click="getCamera()">
          <div class="pub-border">
            <div class="pub"></div>
          </div>
        </div>
        <div class="bar-item">
          <div class="icon"></div>
          <p>上传</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "publish",
  data() {
    return {};
  },
  methods: {
    back(){
      this.$router.push('/index');
    },
    getCamera() {
      navigator.mediaDevices
        .getUserMedia({
          // audio:true,
          video:true
        })
        .then(success => {
          this.$refs["vide"].srcObject = success;
          this.$refs["vide"].play();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

};
</script>

<style scoped >
.publish {
  background-color: #cccccc;
  color: #ffffff;
}
.pub-top {
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  position: relative;
}
.back {
  position: absolute;
  left: 10px;
}
.back span {
  font-size: 28px;
}
.upload-box {
  background-color: #cccccc;
  height:-webkit-fill-available;
  height: 624px;
}
.upload-box .upload-bar {
  position: fixed;
  bottom: 0;
  display: flex;
  height: 100px;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
}
.upload-box .upload-bar .icon {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid red;
  margin-bottom: 5px;
}
.pub-border {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid #cb6074;
  box-shadow: -5px 0 5px #cb6074, 5px 0 5px #cb6074, 0 -5px 5px #cb6074,
    0 5px 5px #cb6074;
}
.pub {
  height: 45px;
  width: 45px;
  background-color: #fe2c55;
  border-radius: 50%;
}
</style>