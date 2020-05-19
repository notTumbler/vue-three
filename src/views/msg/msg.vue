<template>
  <div class="msg">
    <my-header title="消息" rightTx='发起聊天' />
    <div class="msg-wrap">
      <!-- 头部 -->
      <div class="msg-nav">
        <div class="msg-nav-itme">
          <div class="icon-box"></div>
          <p>粉丝</p>
        </div>
        <div class="msg-nav-itme">
          <div class="icon-box"></div>
          <p>赞</p>
        </div>
        <div class="msg-nav-itme">
          <div class="icon-box"></div>
          <p>@我的</p>
        </div>
        <div class="msg-nav-itme">
          <div class="icon-box"></div>
          <p>评论</p>
        </div>
      </div>
      <!-- 中间 -->
      <div class="msg-ab">
        <img src="@/static/img/子曰.jpg" alt="">
      </div>
      <div class="down">
        <div class="">抖音好友圈</div>
        <div><button class="btn">下载</button></div>
      </div>
      <!-- 底部 -->
      <div class="msg-list-box">
        <div class="msg-list">
          <img src="@/static/img/xcy.png" alt="">
          <div class="user-des">
            <div class="top">
              <span>抖音小助手</span>
              <span>12:23</span>
            </div>
            <div class="top top-msg">
              <span>抖音安全课堂</span>
              <span class="no-see"></span>
            </div>
          </div>
        </div>
        <div class="msg-list">
          <img src="@/static/img/004.jpg" alt="">
          <div class="user-des">
            <div class="top">
              <span>网行侠</span>
              <span>前天</span>
            </div>
            <div class="top top-msg">
              <span>彼此彼此</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  </div>
</template>

<script>

import myHeader from '@/components/header/myHeader'

export default {
  name:"msg",
  data() {
    return {

    }
 },
  components: {
    myHeader
  }
}
</script>

<style scoped >
  .msg-wrap{
    padding: 0 20px;
    color: #ffffff;
    background-color: #101821;
    height: -webkit-fill-available;
  }
  .msg-nav{
    padding: 20px 5px;
    display: flex;
    justify-content: space-between;
  }
  .msg-nav-itme{
    text-align: center;
    width: 60px;
  }
  .icon-box{
    width: 60px;
    height: 60px;
    border-radius: 5px;
    margin-bottom: 5px;
    background-color: #FF4D74;
  }
  .msg-ab{
    padding: 20px 0;
    border-top: 1px solid #242630;
    border-bottom: 1px solid #242630;
  }
  .msg-ab img{
    width: 100%;
    height: 120px;
  }
  .down{
    color: #ccc;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #242630 solid;
    padding: 20px 0;
  }
  .down .btn{
    padding: 8px 25px;
    border: none;
    background-color: #fe2c55;
    color: #ffffff;
    border-radius: 4px;
  }
  .msg-list-box{
    padding-top:30px;
  }
  .msg-list{
    display: flex;
    padding: 10px 0;
  }
  .msg-list img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .user-des{
    flex: 1;
    height: 60px;
  }
  .user-des .top{
    font-size: 14px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    line-height: 25px;
  }
  .top-msg{
    color: #666;
    align-items: center;
  }
  .no-see{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #face15;
  }

</style>