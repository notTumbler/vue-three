<template>
  <div class="sign">
      <div class="sign-header">
          <router-link tag="sapn" to='/index' class="icon">x</router-link>
          <span class="bangzhu">帮助</span>
      </div>
      <div class="sign-content">
          <div class="des">
            <h2>手机号密码登录</h2>
            <p>登录即表明同意
                  <a href="">抖音协议</a>和
                  <a href="">隐私政策</a>
            </p>
          </div>
          <div class="sign-box">
              <div class="sele">
                  <select class="sele-controll" >
                      <option value="">+86</option>
                  </select>
              </div>
              <div class="inp">
                  <input 
                  v-model="phone" @input="changeTel"
                  type="text" class="inp-controll" placeholder="请输入手机号码">
              </div>
          </div>
          <div class="not-sign">
              <p>未注册的手机号验证通过后将自动登录</p>
          </div>
          <div class="code-btn">
              <button 
              :disabled="disabled" 
              @click="getCode"
              :class="[btnBg?'active':'']">
              获取短信验证码</button>
          </div>
          <div class="other">
              <router-link tag="a" to="/tpsign">密码登录</router-link>
              <span @click="show">其他方式登录</span>
          </div>
      </div>
      <div class="mask" v-if="showMask">
          <div class="oauth">
              <ul>
                <li class="oauth-item">
                  <span class="iconfont icon-tubiaozhizuomoban"></span>
                  今日头条登录
                </li>
                <li class="oauth-item">
                  <span class="iconfont icon-QQ"></span>
                  QQ登录
                </li>
                <li class="oauth-item">
                  <span class="iconfont icon-weixin"></span>
                  微信登录
                </li>
                <li class="oauth-item">
                  <span class="iconfont icon-weibo"></span>
                  微博登录
                </li>
                <li class="oauth-item" @click="close">取消</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"sign",
  data() {
    return {
        telErea:'',
        showMask:false,
        disabled:'true',
        btnBg:false,
        phone:''
    }
 },
 methods: {
     getCode(){
         this.$router.push('/code');
     },
     show(){
         this.showMask =  true;
     },
     close(){
         this.showMask = false;
     },
     changeTel(e){
         this.phone = e.target.value;
         var regtel = /^1[345789]{1}\d{9}$/;
         if (regtel.test(this.phone)) {
             this.btnBg = true;
             this.disabled = false;
         }else{
             this.btnBg = false;
             this.disabled = true;
         }
         
     }
 },
  components: {

  }
}
</script>

<style scoped >
    .bangzhu{
      font-size: 26px;
    }
    .icon{
      font-weight: 300;
    }
    .sign{
        padding: 30px;
    }
    .sign-header{
        display: flex;
        justify-content: space-between;
    }
    .sign-header .icon{
        font-size:30px;
    }
    .sign-content{
        padding: 40px 10px;
    }
    .des h2{
        font-size: 24px;
        font-weight: bold;
    }
    .des p{
        line-height: 50px;
        color: #666;
    }
    .des p a{
        color: #628DB8;
        padding: 0 5px;
    }
    .sign-box{
        display: flex;
        height: 50px;
        align-items: center;
        background-color:#F9F9F9;
    }
    /* 下拉框 */
    .sele-controll{
        background-color: #f9f9f9;
        height: 36px;
        font-weight: bold;
        margin-left: 5px;
        border: none;
    }
    .inp-controll{
        height: 36px;
        background-color: #F9F9F9;
        border: none;
        width: 90%;
        margin-left: 10px;
    }
    input{
        caret-color: #FE2C55;
    }
    input::-webkit-input-placeholder{
        color: #ccc;
    }
    .not-sign p{
        color: #ccc;
        font-style: 14px;
        margin-top: 10px;
    }
    .code-btn button{
        margin: 20px 0;
        width: 100%;
        padding: 10px 0;
        border: none;
        color: #ffffff;
    }
    .code-btn .active{
        color: #ffffff;
        background-color: #FE2C55;
    }
    .other{
        display: flex;
        justify-content: space-between;
    }
    .other a{
        color: #628DB8;
    }
    /* 其他登录模块 */
    .mask{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.4);
    }
    .oauth{
        height: 48%;
        width: 100%;
        position: absolute;
        bottom: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background-color: #fff;
        text-align: center;
    }
    .oauth ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .oauth-item{
        border-bottom: 2px solid #f5f5f5;
        height: 63px;
        line-height: 63px;
    }
</style>