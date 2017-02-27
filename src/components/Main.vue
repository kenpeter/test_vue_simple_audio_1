<template>
  <div id="main" :style="{'background-color': bgColor,'transform':'scale(' + (parseInt(width)/190) +')'}">
    
  </div>
  </div>
</template>


<!-- es 6 script -->
<script type="es6">
export default {
  // props, css props
  props: {
  
    width: {
      type: String,
      default: '300'
    },
    // bg color
    // type string
    // default white
    bgColor: {
      type: String,
      default: '#000000'
    },
  },
  name: 'main',
  data () {
    return {
      songs: [
        {
          'url': 'http://stream.shopshop.space/audio/不会弹吉他的吉他侠_《友情岁月》_161120.mp3',
          'songname': '《友情岁月》_161120'
        },
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
