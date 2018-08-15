<template>
  <div>
    <transition-group name="fade">
      <div class="wrap wrap-archi1" :key="'tab1'" v-if="$store.state.c3_tab === showItem(0)">
        <span class="page">about archi</span>
        <main>
          <div class="pic por"><img src="/static/img/3-1-1.png"/>
            <div class="pic-s abs"><img src="/static/img/3-1-2.png"/>
            </div>
          </div>
          <div class="txt por">
            <h2 class="tt-page">建築，就是不斷自我對話的過程</h2><span class="abs">about<br/>archi</span>
            <p class="main-p">在新與舊之間，簡與繁之間辯證。仁愛與杭州南路悠久歲月醞釀人文薈萃，兩廳院開展台北的國際新視野。城中建設擔任建築與文創的執行總監，邀約杜希聖、倪伯群、李文勝、王裕程四位建築師共同打造。閱狷聲的五線譜隱喻音樂性，在簡約的建築線條之中，從文化、地域、藝術之中衍生出形體語言。收斂卻不單一，極致卻不聲張。</p>
            <p class="main-p">無論是在哪個空間角落，都看見大自然以不同形式存在：開放的公共空間，機能完整的情感交流場所，任環境帶領愉悅心情。日日閒的空中露台，從無框框的天空，釋放出獨處放鬆時刻，與無邊風景對話。 </p>
          </div>
        </main>
        <div class="deco-bg abs"><img src="/static/img/bg-3-1-1.png"/>
        </div>
        <div class="deco-bg2 abs"><img src="/static/img/bg-3-1-2.png"/>
        </div>
      </div>
      <div class="wrap wrap-archi2" :key="'tab2'" v-if="$store.state.c3_tab === showItem(1)">
        <span class="page">about archi</span>
        <main>
          <div class="content por">
            <div class="buildingBox">
              <div class="box">
                <transition-group name="fade">
                  <div v-for="(building,index) in buildings" :key="'b'+building" :class="'building'+building" v-if="buildingShow(index)"></div>
                </transition-group>
              </div>
              
              <div class="arrowBox">
                <div class="arrow">
                    <a href="javascript:;" @click="arrowHandler(1,-1, 'building')" :class="{'transparent': current1===0 }"><span></span></a>
                    <a href="javascript:;" @click="arrowHandler(1,1, 'building')" :class="{'transparent': current1===(buildings.length/2-1) }"><span></span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="txt">
            <h2 class="tt-page">用建築奏生活的樂章</h2>
            <p class="main-p">立體幾何線條語彙的串連，讓閱狷聲的外觀奏出行雲流水般的樂章，曲線的緩衝，盡可能在每個環節保持光、風、音樂與空氣的流動</p>
            <p class="main-p"> <strong>- 立面石材</strong></p>
            <p class="main-p">採用背擴孔工法並採用德國 Fischer 固定件，確保石材穩固。無矽利康空縫處理不會造成石材污染</p>
            <p class="main-p"> <strong>- 結構體防水</strong></p>
            <p class="main-p">全棟大樓立面石材後方均有防水塗層  </p>
          </div>
          <div class="bg abs"><img src="/static/img/bg-3-2.png"/>
          </div>
        </main>
      </div>
      <div class="wrap wrap-archi3" :key="'tab3'" v-if="$store.state.c3_tab === showItem(2)">
        <span class="page" :class="{'white': isWhite }">about archi</span>
        <main>
          <div class="top por">
            <div class="floorplan">
              <h2 class="tt-page">喜歡讀詩<span>更要活得像首詩</span></h2>

              <div class="mapBox por" v-for="(public,index,key) in publics" v-if="current2 === index">
                <img :src="'/static/img/'+public.srcName"/>
                <a v-for="(href,i) in public.href" class="abs" :class="href.class" @click="openLb('', true, href.lb)" @mouseenter="mouseEnter(href.order-1)" @mouseleave="mouseLeave" href="javascript:;"></a>
                <div class="mapSub">
                  <ul>
                    <li v-for="(ls,i) in public.list" :class="{'focus':focus === i }" @mouseenter="mouseEnter(i)" @mouseleave="mouseLeave" @click="openLb('', true, ls.lb)"><span class="num">{{i+1}}</span><span class="sub">{{ls.name}}</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="floor-tab">
              <ul>
                <li v-for="(public,index,key) in publics"><a href="javascript:;" :class="{'active':currentData(2,index)}" @click="currentHandler(2, index)">{{public.name}}</a></li>
              </ul>
            </div>
            <div class="arrowBox">
              <div class="arrow">
                  <a href="javascript:;" @click="arrowHandler(2,-1, 'public')" :class="{'transparent': current2 === 0 }"><span></span></a>
                  <a href="javascript:;" @click="arrowHandler(2,1, 'public')" :class="{'transparent': current2 === (publics.length-1) }"><span></span></a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </transition-group>
    <LBP :picName="lbPic" v-if="lbShow" @openLb="openLb" :el="el" />

  </div>
</template>

<script>
  import LBP from './../components/LightBox_public'

  export default {
    data() {
      return {
        current0: 0,
        current1: 0,
        current2: 0,
        indicateLeft: 0,
        blackThreshold: 0,
        isWhite: false,
        focus: null,
        lbPic:'',
        lbShow: false,
        el: null,
        buildings:[
            '1','2','3','4','5','6','7','8','9','10'
        ],
        publics:[
          { name: '1F',srcName:'3-3-map.png',
            href:[
              {class:'map-1f-1',order:1, lb:1},
              {class:'map-1f-4',order:4, lb:2},
              {class:'map-1f-5',order:5, lb:3},
              {class:'map-1f-6',order:6, lb:4}
            ],
            list:[
              { name: '雅敘序曲 Prelude',lb:1 },
              { name: '暮光迎賓 Intro',lb:null },
              { name: '樹下閱讀 Notation',lb:null },
              { name: '朗朗門廳 Lobby',lb:2 },
              { name: '涵樂 SOFA',lb:3 },
              { name: '蒙田藝文 Salon',lb:4 },
              { name: '藝術廊摘 Art',lb:null }
            ]
          },
          { name: 'B2F',srcName:'3-3-map-2.png',
            href:[
              {class:'map-b2f-4',order:4, lb:6},
              {class:'map-b2f-5',order:5, lb:6}
            ],
            list:[
              { name: '回留第二門廳  Intermission',lb:null },
              { name: '兩情相悅區 Chart',lb:null },
              { name: '氛圍休憩區 Relax',lb:null },
              { name: '韻動健身房 Rock&Roll',lb:6 },
              { name: '青鳥瑜珈室 Body&Soul',lb:6 }
            ]
          },
          { name: 'R1F',srcName:'3-3-map-3.png',
            href:[
              {class:'map-r1f-3',order:3, lb:5},
              {class:'map-r1f-4',order:4, lb:8},
              {class:'map-r1f-7',order:7, lb:9}
            ],
            list:[
              { name: '日閒月影臥榻 Ballad',lb:null },
              { name: 'B.B.Q朗香 Score',lb:null },
              { name: '晴仰空中廚房 Gourmet',lb:5 },
              { name: '花間空中宴會區 Banquet',lb:8 },
              { name: '歡言座椅 Murmur',lb:null },
              { name: '行雲發呆亭 Zen',lb:null },
              { name: '藝術廊摘 Art',lb:null } 
            ]
          }
        ]
      }
    },
    computed: {
      indicateHandler() {
        // console.log(this.current2*60);
        return this.current2*60;
      }
    },
    components: {
        LBP
    },
    updated() {
      // if(this.$store.state.c3_tab === "3") this.blackHandler();
    },
    methods: {
      buildingShow(index) {
          var show = Math.floor(index/2);
          return this.current1 === Math.floor(index/2);
      },
      currentData: function(index,i){
        return this['current'+index] === i;
      },
      currentHandler: function(main, sub) {
        if ( this['current'+main] !== sub) {
          this['current'+main] = sub;
        }
      },
      arrowHandler: function(sub, add, section){
        if( section === "building") {
            var newVal = this['current'+sub]+add;
            if( newVal<0 ) newVal= this.buildings.length - 1;
            if( newVal >= this.buildings.length ) newVal = 0;
            this['current'+sub] = newVal;
            return 
        }
        if( section === "public") {
            var newVal = this['current'+sub]+add;
            if( newVal<0 ) newVal= this.publics.length - 1;
            if( newVal >= this.publics.length ) newVal = 0;
            this['current'+sub] = newVal;
            return 
        }
        var newVal = this['current'+sub]+add;
        if( newVal<0 ) newVal= this.picBoxs.length - 1;
        if( newVal >= this.picBoxs.length ) newVal = 0;
        this['current'+sub] = newVal;
      },
      showItem(index) {
        return (index + 1).toString()
      },
      blackHandler() {
        // console.log($(this.$refs.archi3Inner));
        var val = $(this.$refs.archi3Inner).offset().top - 80;
        this.blackThreshold = val;
        // console.log(this.blackThreshold);
      },
      mouseEnter(index) {
        this.focus = index;
        // console.log(index);
      },
      mouseLeave() {
        this.focus = null;
        // console.log('out');
      },
      openLb(name, isShow, el) {
        if(el === null)  return;
        console.log(name, isShow, el);
        this.lbPic = name;
        this.lbShow = isShow;
        this.el = el;
      }
    },
    mounted() {
      this.$nextTick( ()=> {
        this.styleTag=document.createElement("link")
        this.styleTag.setAttribute("rel", "stylesheet")
        this.styleTag.setAttribute("type", "text/css")
        this.styleTag.setAttribute("href", '/static/css/archi.css')
        document.getElementsByTagName("head")[0].appendChild(this.styleTag)

        // var isScroll = false;
        // var $this = this;
        // $(window).on('scroll',(e)=> {
        //   if($this.$store.state.c3_tab === "3") {
        //       var scroll = Number($(window).scrollTop());
        //       if( scroll >= $this.blackThreshold ) {
        //         $this.$store.commit('themeHandler', true);
        //         $this.isWhite = true;
        //       } else {
        //         $this.$store.commit('themeHandler', false);
        //         $this.isWhite = false;
                
        //       }
        //   } else {
        //     $this.$store.commit('themeHandler', false);
        //     $this.isWhite = false;
             
        //   }
        // });
        
        // $(window).on('resize',()=>{
        //   if(this.$store.state.c3_tab==="3") this.blackHandler();
        // })
      })
    },
    beforeDestroy() {
      document.getElementsByTagName('head')[0].removeChild(this.styleTag);
      // $(window).off('scroll resize');
    }
  }
</script>
<style>
  .wrap-archi3 .top{
    position: relative;
  }
  .inner {
    background: #000;
  }
  .box>span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
</style>