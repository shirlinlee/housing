<template>
    <transition name="canvas">
      <div class="wrap"><span class="page">about engrg</span>
        <main>
          <div class="engrgBox" v-for="(slide,index,key) in slides" :key="key" v-if="current===index">
            <div class="left">
              <div class="pic" :is="'c2_'+(index+1)" v-if="!$store.state.isWebsite"/>
              <div class="pic" v-else><img :src="'/static/img/'+slide.srcName"/></div>
            </div>
            <div class="right" v-html="slide.text"/>
          </div>
          <div class="sq-tab">
            <ul>
              <li v-for="(slide,index) in slides"><a :class="{'active': current === index}" @click="currentHandler(index)">{{ slide.name }}</a></li>
            </ul>
          </div>
          <div class="arrowBox">
            <div class="arrow">
              <a href="javascript:;" @click="arrowHandler(-1)" :class="{'transparent': current===0 }" ><span></span></a>
              <a href="javascript:;" @click="arrowHandler(1)" :class="{'transparent': current===(slides.length-1) }"><span></span></a>
            </div>
          </div>
        </main>
      </div>
    </transition>
</template>

<script>
  import c2_1 from './C2-1';
  import c2_2 from './C2-2';
  import c2_3 from './C2-3';
  import c2_4 from './C2-4';
  import c2_5 from './C2-5';
  import c2_6 from './C2-6';
  
  export default {
    data(){
      return {
        current:0,
        slides:[
          { name:'窗框防水', srcName:'6-2-1.png', text:'<div class="engrg-des"><h3>窗框防水</h3><p class="main-p">窗台雨水不滲漏室內更乾爽</p><p class="main-p">窗台結構體不採水平施工，改以實作洩水坡度方式處理，並在窗框週邊於嵌縫完成後作一道防水層，於貼磚完成後在窗斜與外牆瓷磚之間填補矽利康，即形成三道防水可有效抗拒雨水滲漏問題，達到最佳防水效果。</p><p class="main-p dot">結構體由內向外斜，防止雨水內滲</p><p class="main-p dot">鋁窗</p><p class="main-p dot">第一道防水型水泥砂漿崁縫</p><p class="main-p dot">第二道防水單液PU填縫</p><p class="main-p dot">第三道樹脂砂漿防水層</p><p class="main-p dot">粉刷打底層</p><p class="main-p dot">貼外牆飾材</p><p class="main-p dot">第四道塞水路</p></div>'},
          { name:'浴室防水', srcName:'6-2-2.png', text:'<div class="engrg-des"><h3>浴室防水</h3><p class="main-p dot">外牆 15 公分</p><p class="main-p dot">符合國家標準 CNS560 要求，具有無輻射性污染證明</p></div>'},
          { name:'浴廁防水', srcName:'6-2-3.png', text:'<div class="engrg-des"><h3>浴廁防水</h3><p class="main-p dot">水泥質墩座</p><p class="main-p dot">打單液 PU 填縫</p><p class="main-p dot">輕質灌漿牆(室內隔間牆)</p><p class="main-p dot">板縫間單液 PU 填縫及板材表面樹脂砂漿防水</p></div>'},
          { name:'屋頂防水', srcName:'6-2-5.png', text:'<div class="engrg-des"><h3>屋頂防水</h3><p class="main-p dot">多層防水處理，避免滲漏發生：屋頂防水層點焊鋼絲網 6 至 8 公分混凝土丶地坪裝修材鋪設。</p><p class="main-p dot">配合屋頂排水處理，如排水淺溝設計(增加排水速度，減少水停留的時間)，日本進囗高腳落水頭排水，以確實達到防水隔熱效果。</p></div>'},
          { name:'露台防水', srcName:'6-2-6.png', text:'<div class="engrg-des"><h3>露台防水</h3><p class="main-p dot">多層防水處理，避免滲漏發生：露台防水層點焊鋼絲網或玻璃纖維、1:3水泥砂漿、地坪裝修材鋪設。</p><p class="main-p dot">配合露台排水處裡,如排水淺溝設計(増加排水速度，減少水停留時間)，落水頭排水,以確實達到防水隔熱效果。</p></div>'}
        ],
        el:'c2_1'
      }

    },
    components: {
      'c2_1': c2_1,
      'c2_2': c2_2,
      'c2_3': c2_3,
      'c2_4': c2_4,
      'c2_5': c2_5,
      'c2_6': c2_6
    },
    updated() {
    },
    mounted() {
      this.$nextTick(function() {
      })

    },
    destroyed() {
    },
    methods: {
      currentHandler:function(index){
        if( this.current !== index) {
          this.current = index;
        }  
      },
      arrowHandler: function(add){
        var newVal = this['current']+add;
        if( newVal<0 ) newVal= this.slides.length-1;
        if( newVal >= this.slides.length ) newVal = 0;
        this['current'] = newVal;
      },
    }
  }
</script>

