<template>
  <div class="edit">
    <myHeader title="编辑资料" rightTx="123" @changeBack="toBack"></myHeader>

    <div class="edit_wrap">
      <div class="ava-box">
        <div class="avatar">
          <img src="@/static/img/子曰.jpg" alt="图片它失联了U_U">
          <span class="iconfont icon-iconset0239"></span>
          <input type="file">
        </div>
        <p>点击更换头像</p>
      </div>

      <div class="edit-box">
        <div class="edit-item">
          <span class="label">名字</span>
          <span>小智<span class="iconfont icon-youjiantou"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">抖音号</span>
          <span>666888<span class="iconfont icon-youjiantou"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">简介</span>
          <span>宅男一枚……<span class="iconfont icon-youjiantou"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">学校</span>
          <span>点击设置<span class="iconfont icon-youjiantou"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">性别</span>
          <span>男<span class="iconfont icon-youjiantou"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">生日</span>
          <span>1111-1-1<span class="iconfont icon-youjiantou"></span></span>
        </div>
        <div class="edit-item">
          <span class="label">地区</span>
          <span>中国 葫芦岛<span class="iconfont icon-youjiantou"></span></span>
        </div>
        <div class="edit-item">
          <span class="label"></span>
          <span>名字<span class="iconfont icon-youjiantou"></span></span>
        </div>
      </div> 
    </div>

  </div>

  
</template>

<script>
import myHeader from '@/components/header/myHeader'
export default {
  name:"edit",
  data() {
    return {

    }
 },
 methods: {
   toBack(){
     this.$router.push('/me');
   }
 },
  components: {
    myHeader
  }
}
</script>

<style scoped >
  .edit{
    background-color: #101821;
  }
  .edit-wrap{
    padding: 0 10px;
    box-sizing: border-box;
  }
  .ava-box{
    color: #ccc;
    text-align: center;
    padding: 20px;
  }
  .avatar{
    position: relative;
  }
  .avatar img{
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
  .avatar .iconfont{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 26px;
    color: #ffffff;
  }
  .avatar input{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
  }
  .edit-box{
    border-top: 1px solid #292831;
    color: #ccc;
  }
  .edit-item{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .edit-item .label{
    color: #ffffff;
    margin-left: 12px;
  }
  .edit-item .icon-youjiantou{
    margin:0 10px;
  }
</style>