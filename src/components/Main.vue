<template>
  <!-- transform scale, 300/190 -->
  <div id="main" :style="{'background-color': bgColor,'transform':'scale(' + (parseInt(width)/190) +')'}">
    
    <!-- player panel -->
    <div class="player-panel">
      <div class="player-panel-details">
        <!-- title is used for the element -->
        <!-- very first element -->
        <div class="player-panel-title text-ellipsis" :title="currentAudio.songname">
          {{currentAudio.songname}}
        </div>
        
        <!-- current time and total time -->
        <div class="player-panel-time">
          <span class="player-time-current">{{ current }}</span>
          <span class="player-time-total">of {{ duration }}</span>
        </div>
        
        <!-- clean -->
        <div style="clear: both"></div>
        
        <div class="player-controls">
          
            <span class="player-prev" @click="prev()">Prev</span> |
          
            <!-- @click -->
            <!-- func -->
            <!-- :class ->
            <!-- 'xxxx' isPause -->
            <span class="player-pause" @click="toggleStatus()" :class="{'player-play':isPause}"> > </span> |
          
            <span class="player-next" @click="next()">Next</span>
          
        </div>
        
      </div>  
    </div>
    
    <!-- player control -->
    <div class="player-controls">
    
      <div style="clear: both"></div>
      
      <div class="player-range">
        
        
      </div>
      
    </div>
    
    <!-- audio -->
    <!-- ended, means song ends -->
    <audio 
      :src="currentAudio.url" 
      :autoplay="autoPlay"
      :loop="loop"
      @timeupdate="timeChange()"
      
      @loadeddata="getDuration()"
      @ended="next()"
      @error="next()"
      
      id="player" 
      ref="player"
      
    >
    </audio>
  </div>
</template>


<!-- es 6 script -->
<script type="es6">

import '../assets/css/style.css';

export default {

  // props, css props
  props: {
    
    autoPlay: {
      type: Boolean,
      default: true
    },
  
    // width of player
    // type string
    // default 300
    width: {
      type: String,
      default: '300'
    },
    // bg color
    // type string
    // default white
    bgColor: {
      type: String,
      default: '#ffffff'
    },
    // loop
    // type boolean
    // default
    // false
    loop: {
      type: Boolean,
      default: false
    },
    // repeat
    // type
    // boolean
    // default
    // true
    repeat: {
      type: Boolean,
      default: true
    },
  },
  // name of this
  name: 'main',
  computed: {
    currentAudio: function () {
      // when data changes, data, props, computed redo it.
      return this.songs[this.audioIndex];
    }
  },
  // methods
  methods: {
    // basically, it keeps updating this.current, it knows where the music's position
    // time change
    // : func
    timeChange: function () {
      // this current, data
      // this
      // $refs
      // player
      // current time
      this.current = this.$refs.player.currentTime;
    },
    // all data is loaded.
    getDuration: function () {
      this.duration = this.$refs.player.duration;
    },
    toggleStatus: function () {
      // var player
      // this
      // $refs
      // players
      // this isPause
      // player.play otherwise player pause
      var player = this.$refs.player;
      this.isPause ? player.play() : player.pause();
      // invert is pause
      this.isPause = !this.isPause;
    },
    // next func
    next: function () {
      // if this
      // audio index
      // this songs
      // length - 1
      if (this.audioIndex == this.songs.length - 1) {
        if (this.repeat) {
          // Back to start of songs
          this.audioIndex = 0;
        }
      } else {
        //
        this.audioIndex++;
      }
    },
    prev: function () {
      // if this
      // audio index
      // this songs
      // length - 1
      if (this.audioIndex == 0) {
        if (this.repeat) {
          // Back to end of songs
          this.audioIndex = this.songs.length - 1;
        }
      } else {
        //
        this.audioIndex--;
      }
    }
  },
  data () {
    return {
      // current music index
      current: 0,
      audioIndex: 0,
      duration: 0,
      isPause: !this.autoPlay, // props
      
    
      songs: [
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP10_快要崩溃的一哥_感觉自己萌萌哒_《你怎么舍得我难过》_161120.mp3',
          'songname': '《你怎么舍得我难过》_161120'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP10_花粉过敏的花房姑娘_《花房姑娘》_161120.mp3',
          'songname': '《花房姑娘》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_嗑着瓜子的猫_《存在》_161127.mp3',
          'songname': '《存在》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_就是不能告诉你_金海心_《袖手旁观》_161127.mp3',
          'songname': '《袖手旁观》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_最后一只恐龙_《听说爱情回来过》_161127.mp3',
          'songname': '《听说爱情回来过》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_杨丞琳_李克勤_《温柔》_161127.mp3',
          'songname': '《温柔》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_林宥嘉_郁可唯_《浪费》_161127.mp3',
          'songname': '《浪费》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_许志安_周蕙_《相思风雨中》_161127.mp3',
          'songname': '《相思风雨中》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP1_傻白甜的红桃皇后_进击的女帝《滚滚红尘》_160918.mp3',
          'songname': '《滚滚红尘》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP1_尖耳朵的阿凡达妹妹_铁皮人《慢慢》_160918.mp3',
          'songname': '《慢慢》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP2 圣诞老人不在家的驯鹿《情人》  160925.mp3',
          'songname': '《情人》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP2 圣诞老人不在家的驯鹿_铁皮人《味道》  160925.mp3',
          'songname': '《味道》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP8_尖耳朵的阿凡达妹妹_金曲回顾_161106.mp3',
          'songname': '尖耳朵的阿凡达妹妹'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP9_哈哈一笑很倾城_《独家记忆》_161113.mp3',
          'songname': '《独家记忆》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP9_最后一只恐龙_《新不了情》_161113.mp3',
          'songname': '《新不了情》'
        },
        {
          'url': 'http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP9_蓝瘦的海盗很香菇_最后一只恐龙_《听海》_161113.mp3',
          'songname': '《听海》'
        }
      ]
    }
  }
}

</script>
