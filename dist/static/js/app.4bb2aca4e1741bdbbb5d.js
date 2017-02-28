webpackJsonp([0,2],[,,function(t,e,a){"use strict";var s=a(1),n=a(16),i=a(11),o=a.n(i);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Main",component:o.a}]})},,function(t,e,a){a(10);var s=a(0)(a(5),a(15),null,null);t.exports=s.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(8),n=(a.n(s),a(12)),i=a.n(n);e.default={props:{autoPlay:{type:Boolean,default:!0},width:{type:String,default:"300"},bgColor:{type:String,default:"#ffffff"},loop:{type:Boolean,default:!1},repeat:{type:Boolean,default:!0},initialVolume:{type:String,default:"60"}},name:"main",computed:{currentAudio:function(){return this.songs[this.audioIndex]}},methods:{timeChange:function(){this.current=this.$refs.player.currentTime},getDuration:function(){this.duration=this.$refs.player.duration},toggleStatus:function(){var t=this.$refs.player;this.isPause?t.play():t.pause(),this.isPause=!this.isPause},next:function(){this.audioIndex==this.songs.length-1?this.repeat&&(this.audioIndex=0):this.audioIndex++},prev:function(){0==this.audioIndex?this.repeat&&(this.audioIndex=this.songs.length-1):this.audioIndex--},progressChange:function(t){this.$refs.player.currentTime=t.target.value}},mounted:function(){this.$refs.player.volume=this.volume/10},watch:{volume:function(t,e){this.$refs.player.volume=t/100}},components:{songList:i.a},data:function(){return{RANGE_WIDTH:180,current:0,audioIndex:0,duration:0,isPause:!this.autoPlay,volume:parseInt(this.initialVolume)/10,songs:[{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP10_快要崩溃的一哥_感觉自己萌萌哒_《你怎么舍得我难过》_161120.mp3",songname:"《你怎么舍得我难过》_161120"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP10_花粉过敏的花房姑娘_《花房姑娘》_161120.mp3",songname:"《花房姑娘》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_嗑着瓜子的猫_《存在》_161127.mp3",songname:"《存在》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_就是不能告诉你_金海心_《袖手旁观》_161127.mp3",songname:"《袖手旁观》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_最后一只恐龙_《听说爱情回来过》_161127.mp3",songname:"《听说爱情回来过》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_杨丞琳_李克勤_《温柔》_161127.mp3",songname:"《温柔》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_林宥嘉_郁可唯_《浪费》_161127.mp3",songname:"《浪费》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP11_许志安_周蕙_《相思风雨中》_161127.mp3",songname:"《相思风雨中》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP1_傻白甜的红桃皇后_进击的女帝《滚滚红尘》_160918.mp3",songname:"《滚滚红尘》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP1_尖耳朵的阿凡达妹妹_铁皮人《慢慢》_160918.mp3",songname:"《慢慢》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP2 圣诞老人不在家的驯鹿《情人》  160925.mp3",songname:"《情人》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP2 圣诞老人不在家的驯鹿_铁皮人《味道》  160925.mp3",songname:"《味道》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP8_尖耳朵的阿凡达妹妹_金曲回顾_161106.mp3",songname:"尖耳朵的阿凡达妹妹"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP9_哈哈一笑很倾城_《独家记忆》_161113.mp3",songname:"《独家记忆》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP9_最后一只恐龙_《新不了情》_161113.mp3",songname:"《新不了情》"},{url:"http://stream.shopshop.space/audio/蒙面唱将猜猜猜_EP9_蓝瘦的海盗很香菇_最后一只恐龙_《听海》_161113.mp3",songname:"《听海》"}]}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"songList"}},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){var s=a(0)(a(6),a(13),null,null);t.exports=s.exports},function(t,e,a){a(9);var s=a(0)(a(7),a(14),"data-v-3352d415",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{"background-color":t.bgColor,transform:"scale("+parseInt(t.width)/190+")"},attrs:{id:"main"}},[a("div",{staticClass:"player-panel"},[a("div",{staticClass:"player-panel-details"},[a("div",{staticClass:"player-panel-title text-ellipsis",attrs:{title:t.currentAudio.songname}},[t._v("\n        "+t._s(t.currentAudio.songname)+"\n      ")]),t._v(" "),a("div",{staticClass:"player-panel-time"},[a("span",{staticClass:"player-time-current"},[t._v(t._s(t.current))]),t._v(" "),a("span",{staticClass:"player-time-total"},[t._v("of "+t._s(t.duration))])]),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("div",{staticClass:"player-controls"},[a("span",{staticClass:"player-prev",on:{click:function(e){t.prev()}}},[a("i",{staticClass:"fa fa-step-backward",attrs:{"aria-hidden":"true"}})]),t._v(" \n\n          "),t._v(" "),a("span",{staticClass:"player-pause",class:{"player-play":t.isPause},on:{click:function(e){t.toggleStatus()}}},[a("i",{staticClass:"fa fa-play",attrs:{"aria-hidden":"true"}})]),t._v(" \n\n          "),a("span",{staticClass:"player-next",on:{click:function(e){t.next()}}},[a("i",{staticClass:"fa fa-step-forward",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("div",{staticClass:"slider player-progress-bar"},[a("div",[a("i",{staticClass:"fa fa-spinner",attrs:{"aria-hidden":"true"}}),t._v(" "),a("input",{attrs:{type:"range",min:0,max:t.duration,step:1},domProps:{value:t.current},on:{mouseup:function(e){t.progressChange(e)}}})])]),t._v(" "),a("div",{staticClass:"slider player-volume"},[a("div",[a("i",{staticClass:"fa fa-volume-up",attrs:{"aria-hidden":"true"}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],attrs:{type:"range",min:0,max:"100",step:1},domProps:{value:t.volume,value:t.volume},on:{__r:function(e){t.volume=e.target.value}}})])])])])]),t._v(" "),a("songList"),t._v(" "),a("audio",{ref:"player",attrs:{src:t.currentAudio.url,autoplay:t.autoPlay,loop:t.loop,id:"player"},on:{timeupdate:function(e){t.timeChange()},loadeddata:function(e){t.getDuration()},ended:function(e){t.next()},error:function(e){t.next()}}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"songList"}},[a("ul",{staticClass:"smaller"},[a("li",[t._v("蒙面唱将猜猜猜EP10快要崩溃的一哥感觉自己萌萌哒《你怎么舍得我难过》_161120.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP10花粉过敏的花房姑娘_《花房姑娘》_161120.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP11嗑着瓜子的猫_《存在》_161127.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP11就是不能告诉你金海心《袖手旁观》_161127.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP11最后一只恐龙_《听说爱情回来过》_161127.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP11杨丞琳李克勤《温柔》_161127.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP11林宥嘉郁可唯《浪费》_161127.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP11许志安周蕙《相思风雨中》_161127.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP1傻白甜的红桃皇后_进击的女帝《滚滚红尘》_160918.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP1尖耳朵的阿凡达妹妹_铁皮人《慢慢》_160918.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜_EP2 圣诞老人不在家的驯鹿《情人》  160925.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP2 圣诞老人不在家的驯鹿铁皮人《味道》  160925.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP8尖耳朵的阿凡达妹妹_金曲回顾_161106.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP9哈哈一笑很倾城_《独家记忆》_161113.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP9最后一只恐龙_《新不了情》_161113.mp3")]),t._v(" "),a("li",[t._v("蒙面唱将猜猜猜EP9蓝瘦的海盗很香菇最后一只恐龙《听海》_161113.mp3")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(3),i=(a.n(n),a(4)),o=a.n(i),r=a(2);s.a.config.productionTip=!1,s.a.component("mint-range",n.MintRange),new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a}})}],[19]);
//# sourceMappingURL=app.4bb2aca4e1741bdbbb5d.js.map