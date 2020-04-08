<template>
  <div class="videos">
      <video-player class="video-player vjs-default-skin vjs-big-play-centered"
      ref="videoPlayer"
      :playsinline='true'
      :options='playerOptions' 
      >
      </video-player>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
export default {
  name: "Videos",
  props:['videoList','index'],
  data() {
    return {
      playerOptions: {
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        fluid: true,
        sources: [
          {
            src:this.videoList.url,
            // src:'https://www.bilibili.com/video/BV19t411J7Mk/',
            // src:'http://sante.weixinbe.com/public/supplier/1527739003138040.mp4',

            type: "video/mp4",
            type: "video/ogg",
            type: "video/webm",
            // type: "m3u8"
          }
        ],
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂时无法播放，请稍后再试",
        controlBar: false
      },
      playing:true
    };
  },

  created() {
    this.autoplay()
  },
  methods: {
    playorStop(){
      if(this.playing){
        this.$refs.videoPlayer.player.pause()
        this.playing = false
      }else{
        this.$refs.videoPlayer.player.play()
        this.playing = true
      }
    },
    autoplay(){
     if(this.index == 0) {
       this.playerOptions.autoplay = true;
     }
    },
    play(){
      this.$refs.videoPlayer.player.load()
      this.$refs.videoPlayer.player.play()
      this.playing = true
    },
    stop(){
      this.$refs.videoPlayer.player.pause()
      this.playing = false
    }
      
  },
      
    
  
  components: {
    videoPlayer
  }
};
</script>

<style>
    .videos{
        position: relative;
    }
    .videos .vjs-default-skin > .video-js .vjs-big-play-button{
        position: absolute;
        top: 52%;
        left: 65%;
        background: rgba(0, 0, 0, .4);
        border-radius: 50%;
        width: 45px;
        height: 45px;
        line-height: 42px;
        transform: translate(-50%,-50%);
    }
</style>