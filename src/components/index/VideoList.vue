<template>
  <div class="Video-list">
    <swiper :options='swiperOption'>
      <swiper-slide v-for="(item, index) in dataList" :key="index">
        <div>
          <Videos ref="videos" :videoList='item' :index='index'></Videos>
        </div>
        <div class="infobar_warp">
          <InfoBar></InfoBar>
        </div>
        <div class="rightbar_warp">
          <right-bar>

          </right-bar>
        </div>
      </swiper-slide>
      
    </swiper>
    <!-- 评论 -->
    <div class="comment-wrap">
      <div class="comment-list">
        <div class="comment-top">
          <div class="number">15.0W条评论</div>
          <div class="close"><span>X</span></div>
        </div>

        <div class="comment-body">
          <div class="comment-box">
            <div class="comment-item">
              <div class="touxiang"><img src="../../static/img/bg.png" alt=""></div>
              <div class="item-info">
                <div class="reply">
                  <p class="name"> 镜：</p>
                  <p class="reply-des">123456 <span class="time">04-07</span></p>
                </div>

                <div class="dianzan">
                  <span class="iconfont icon-aixin-lan"><p>200</p></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
import {swiper , swiperSlide} from 'vue-awesome-swiper'
import Videos from '../../components/index/Videos'
import InfoBar from './infoBar'
import RightBar from './RightBar'

export default {
  name:"VideoList",
  data() {
    return {
      page:1,

      swiperOption:{
        direction:'vertical',
        grabCursor:true,
        setWrapperSize:true,
        autoHeight:true,
        slidesPerView:1,
        mousewheel:true,
        mousewheelControl:true,
        height:window.innerHeight,
        resistanceRatio:0,
        observeParents:true,
        on:{
          tap: () => {
            //   play(this.page-1)
            this.play(this.page-1)
          },
          slideNextTransitionStart:() => {
            // alert('开始切换！')
            this.page += 1
            this.xiaVideo(this.page-1)
            // console.log(this.page)
          },
          slidePrevTransitionEnd:() => {
            if(this.page>1){
              this.page -= 1;
            this.shangVideo(this.page-1)
              // console.log(this.page);
            }
          }
        }
      },
      dataList:[
        {
          id:'1',
          url:'http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4'
        },
        {
          id:'2',
          url:'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4'
        },
        {
          id:'3',
          url:'http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4'
        },
        {
          id:'4',
          url:'http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4'
        }
      ]
  }
  },
  components: {
    swiper,
    swiperSlide,
    Videos,
    InfoBar,
    RightBar
  },
  methods:{
    play(index){
      this.$refs.videos[index].playorStop()
    },
    // 上滑
    shangVideo(index){
      this.$refs.videos[index+1].stop()
      this.$refs.videos[index].play()
    },
    // 下拉
    xiaVideo(index){
      this.$refs.videos[index-1].stop()
      this.$refs.videos[index].play()
    }
  }
}
</script>

<style scoped >
  .Video-list{
    height: 100%;
  }
  .Video-list .swiper-container{
    height: 100%;
    position: relative;
  }
  .infobar_warp{
    position: absolute;
    bottom: 55px;
    left: 10px;
  }
  

  .rightbar_warp{
    position: absolute;
    right: 0px;
    bottom: 55px;
  }

  /* 评论 */
  .comment-wrap{

    display: none;

    position: fixed;
    bottom: 0;
    left: 0;
    height: 450px;
    width: 100%;
    background: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 999;
    padding: 10px 10px;
    box-sizing: border-box;
  }
  .comment-top{
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
  }

  .number{
    flex: 1;
    text-align: center;

  }
  .close{
    padding-right: 5px;
    font-size: 16px;
    color: #666;
  }
  .comment-body{
    max-width: 450px;
    overflow: auto;
    margin-top: 20px;
  }
  .comment-item{
    display: flex;
    flex: 1;
  }
  .touxiang img{
    width: 33px;
    height: 33px;
    border-radius: 50%;
  }
  .item-info{
    margin-left: 10px;
    display: flex;
    flex: 1 1 auto;
  }
  .reply{
    width: 90%;
  }
  .reply-des{
     line-height: 20px; 
  }

  .reply .name{
    color: #666;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .reply .time{
    color: #666;
  }
  .dianzan .iconfont{
    font-size: 18px;
    color: #cccccc;
  }
  
</style>