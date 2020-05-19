<template>
  <div class="myHeader">
      <div class="user-header">
          <div class="back" @click="goBack">
              <span class="iconfont icon-fanhui"></span>
          </div>
          <div class="center"><span>{{title}}</span></div>
          <div class="right"><span>{{rightTx}}</span></div>
      </div>
      
  </div>
</template>

<script>
export default {
  name:"myHeader",
  props:{
      title:{
          type:String,
          default:''
      },
      rightTx:{
          type:String,
          default:''
      }
  },
  data() {
    return {
    }
 },
 methods: {
     goBack(){
         this.$emit('changeBack');
     }
 },
  components: {

  }
}
</script>

<style scoped >
    .user-header{
        height: 48px;
        width: 100%;
        line-height: 48px;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #292831;
        background-color: #101821;
        color: #eeeeee;
        position: relative;
    }
    .back{
        position: absolute;
        left: 10px;
    }
    .right{
        position: absolute;
        right: 10px;
    }

</style>