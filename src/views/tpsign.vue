<template>
  <div class="sign">
      <div class="sign-header">
          <router-link tag="span" to="/sign" class="icon">
            <span class="iconfont icon-fanhui"></span>
          </router-link>
          <span class="bangzhu">帮助</span>
      </div>
      <div class="sign-content">
          <div class="des">
            <h2>手机号密码登录</h2>
          </div>
          <div class="sign-box">
              <div class="sele">
                  <select class="sele-controll" v-model="telErea">
                      <option value="">+86</option>
                  </select>
              </div>
              <div class="inp">
                  <input type="text" 
                  @keyup="loginAction"
                  v-model="phone"
                  class="inp-controll" placeholder="请输入手机号码">
              </div>
          </div>
           <div class="sign-box">
              <!-- <div class="sele">
                  <select class="sele-controll">
                      <option value="">+86</option>
                  </select>
              </div> -->
              <div class="inp">
                  <input type="password"
                  @keyup="loginAction"
                  v-model="password" class="inp-controll" placeholder="请输入密码">
              </div>
          </div>
          <div class="not-sign">
            <p>登录即表明同意
                  <a href="">抖音协议</a>和
                  <a href="">隐私政策</a>
            </p>
          </div>
          <div class="code-btn">
              <button 
              @click="loginAction"
              :disabled = "disabled"
              :class="[btnBg?'active':'']">登录</button>
          </div>
          <div class="other">
              <span>忘记了？</span>
              <a href="">找回密码</a>
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
        password:'',
        phone:'',
        disabled:false,
        btnBg:false
    }
 },
    methods: {
        loginAction(){
            const regtel = /^1[345789]{1}\d{9}$/;
            if (this.phone === "") {
               this.$toast('手机号不能为空')
            }else if (!regtel.test(this.phone)) {
                // console.log('请输入正确的手机号');
                this.$toast({
                    message:'请填写正确的手机号码',
                    type:'error',
                    duration:1500
                })
            }else if (this.password === "") {
                this.$toast({
                    message:'密码不能为空',
                    type:'error',
                    duration:1500
                })
                return;
            }else{
                this.btnBg = true;
                this.disabled = false;
                //请求登录接口
            }
        }
    },
  components: {

  }
}
</script>

<style scoped >
    .icon-fanhui{
        font-size: 40px;
        font-weight: 600;
    }
    .bangzhu{
        font-size: 26px;
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
    .des{
        margin-bottom: 30px;
    }
    .des h2{
        font-size: 24px;
        font-weight: bold;
        color: black;
    }
    .des p{
        line-height: 50px;
        color: #666;
    }
    .not-sign p a{
        color: #628DB8;
        padding: 0 5px;
    }
    .sign-box{
        display: flex;
        height: 50px;
        align-items: center;
        background-color:#F9F9F9;
        margin-top: 12px;
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
    .inp-controll input{
        border: none;
        border-color:#f9f9f9 ;
    }
    input{
        caret-color: orangered;
        outline: none;
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
        color: #f9f9f9;
    }
    .code-btn .active{
        color: #fff;
        background-color: #FE2C55;
    }
    .other a{
        color: #628DB8;
    }

</style>