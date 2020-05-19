<template>
  <div class="sign">
      <div class="sign-header" @click="back">
          <span class="icon">
              <span class="iconfont icon-fanhui"></span>
          </span>
          <span class="bangzhu">帮助</span>
      </div>
      <div class="sign-content">
          <div class="des">
            <h2>请输入验证码</h2>
            <p>验证码已通过短信发送至你的手机！</p>
          </div>
           <div class="sign-box">
              <div class="inp">
                  <input type="text" 
                  @input="changeCode" v-model="codes"
                  class="inp-controll" placeholder="请输入验证码">
              </div>
              <div class="sele">
                  {{time}}
              </div>
          </div>
          <div class="code-btn">
            <button :disabled='disabled' :class="[btnBg?'active':'']" 
              class="load-btn"
              @click="login">
              
                <div class="loads" v-if="loading"></div>  
                登录
            </button>
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
        time:60,
        codes:'',
        disabled:true,
        btnBg:false,
        loading:false
    }
 },
 created() {
     this.getCode();
 },
 methods: {
     getCode(){
         this.timer();
         this.code = '2356';
     },
    //  检测验证码是否一致
    changeCode(e){
        this.codes = e.target.value;
        if (this.codes === this.code) {
            this.disabled = false;
            this.btnBg = true;
        }else{
            console.log('验证码错误');
            this.disabled = true;
            this.btnBg = false;
        }
    },
     timer(){
         if(this.time>0){
             this.time --;
             setTimeout(this.timer,1000)
         }
     },
     login(){
         this.loading = true;
     },
     back(){
         this.$router.push('/sign');
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
        margin-bottom: 15px;
    }
    .des h2{
        font-size: 24px;
        font-weight: bold;
        color: black;
    }
    .des p{
        line-height: 40px;
        color: #999;
        font-size: 14px;
    }

    .sign-box{
        display: flex;
        height: 50px;
        align-items: center;
        background-color:#F9F9F9;
        margin-top: 12px;
        justify-content: space-between;
    }
    .sele{
        margin-right: 20px;
        color: #666;
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

    .code-btn button{
        margin: 20px 0;
        width: 100%;
        padding: 10px 0;
        border: none;
        color: #f9f9f9;
    }
    .code-btn .active{
        color:#ffffff;
        background-color: #FE2C55;
    }
    .load-btn{
        display: flex;
        justify-content: center;
    }
    .loads{
        width: 11px;
        height: 11px;
        border: 3px solid #fff;
        border-bottom: 3px solid #eee;
        border-radius: 50%;
        animation: load 1s infinite linear;
        margin-right: 5px;
    }
    @keyframes load{
        from{
            transform:rotate(0deg);
        }
        to{
            transform:rotate(360deg);
        }
    }

</style>