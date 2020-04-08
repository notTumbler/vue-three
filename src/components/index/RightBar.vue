<template>
  <div class="right-bar">
    <div class="avatar">
      <div class="avatar-border">
        <img src="../../static/img/bg.png" alt="">
        <span class="iconfont icon-plus-line"></span>
      </div>
    </div>

    <div class="icon">
      <span class="iconfont icon-tuya_huabanfuben"></span>
      <p>18.0w</p>
    </div>
    <div class="icon">
      <span class="iconfont icon-pinglun2"></span>
      <p>18.0w</p>
    </div>
    <div class="icon">
      <span class="iconfont icon-fenxiang"></span>
      <p>18.0w</p>
    </div>

    <div class="avatar">
      <div class="music">
        <img src="../../static/img/bg.png" alt="">
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name:"",
  data() {
    return {

    }
 },
  components: {

  }
}
</script>

<style scoped >
  .right-bar{
    width: 85px;
    /* border: 1px solid red; */
  }
  .right-bar .avatar{
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
  .avatar-border{
    height: 40px;
    width: 40px;
    border: 1px white solid;
    border-radius: 50%;
    position: relative;
    text-align: center;
  }
  .avatar-border img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  /* .avatar-border span{
    border-radius: 50%;
    background: blue;
  } */
  .avatar-border .icon-plus-line{
    font-size: 20px;
    color: #FE2C5A;
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
  }
  .right-bar .icon{
    height: 60px;
    text-align: center;
    padding-top: 12px;
  }
  .icon .iconfont{
    color: #ffffff;
    font-size: 36px;
  }
  .icon p{
    margin: 0px;
    color: #ffffff;
    font-size: 12px;
    padding-top: 4px;
  }
  .music{
    height: 54px;
    width: 54px;
    background: #2E2E2E;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
    animation: round 5s 0s linear infinite;
  }
  .music img{
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }
  /* 旋转动画 */
  @keyframes round{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>