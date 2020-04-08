<template>
 <div class="container">
     <div class="box" ref="mapbox">
        {{chen}}
     </div>
 </div>
</template>

<script>
import echarts from 'echarts'

const option = {
    xAxis:{
        type:'category',
        data:['Mon','Tue','Wed','Thu','Fri','Sat','Sun',]
    },
    yAxis:{
        type:'value'
    },
    series:[{
        data:[820,932,901,934,1290,1330,1320],
        type:'line'
    }]
}

export default {
name:"chen",
mounted() {
   let mychart = echarts.init(this.$refs.mapbox)
   mychart.setOption(option)
},
 data() {
  return {
      chen:'dibo'
  }
 },
 components: {

 }
}
</script>

<style scoped >
    .box{
        height: 400px;
        width: 600px;
        background-color: aqua;
        border: 1px red;
    }
</style>