<template>
    <transition name="canvas">
      <div class="wrap"><span class="page">about engrg</span>
        <main>
          <div class="engrgBox" v-for="(slide,index,key) in slides" :key="key" v-if="current===index">
            <div class="left">
              <div class="pic" :is="'c3_'+(index+1)" v-if="!$store.state.isWebsite"/>
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
  import c3_1 from './C3-1';
  import c3_2 from './C3-2';
  import c3_3 from './C3-3';
  import c3_4 from './C3-4';
  
  
  export default {
    data(){
      return {
        current:0,
        slides:[
          { name:'排水分管', srcName:'6-3-1.png', text:'<div class="engrg-des"><h3>排水分管</h3><p class="main-p dot">洗衣機排水管與地板排水管獨立接管，避免其它地板落水頭產生排水不良及冒泡現象。</p><p class="main-p dot">污水管與廢水管分管排水，各系統獨立分流。</p><p class="main-p dot">採存水彎設計，有效抑制異味產生；不阻塞、不逆流。</p></div>'},
          { name:'給水吊管', srcName:'6-3-2.png', text:'<div class="engrg-des"><h3>給水吊管</h3><p class="main-p">採用明管吊管施作，當層給水管當層頂板配管，不論查修、更換皆非常便利，有別於傳統配管，樓上給水管查修、更換須至樓下，造成維修不易損失較大之情形。</p></div>'},
          { name:'排水配管', srcName:'6-3-3.png', text:'<div class="engrg-des"><h3>排水配管</h3><p class="main-p">將浴廁污廢水系統配置於自家的雙層樓版之間，當層維修時不需打擾樓下住戶。</p><p class="main-p dot">降低樓上住戶使用浴廁時，廢水經由排水管路所產生的噪音干擾。</p><p class="main-p dot">管道間排水立管為鑄鐵材質，有效降低噪音干擾。</p></div>'},
          { name:'防疫系統', srcName:'6-3-4.png', text:'<div class="engrg-des"><h3>防疫系統</h3><p class="main-p">STUDOR 排水防疫系統</p><p class="main-p">7 大健康防護設計居家防疫新利器</p><p class="main-p dot">氣密性佳:平衡排水管路系統壓力，達到絕佳的氣密效能</p><p class="main-p dot">抑制感染:有效保護存水彎水封，避免細菌及病毒的入侵</p><p class="main-p dot">氣味控管:防止穢氣於排水系統亂竄，確保社區衛生安全</p><p class="main-p dot">排水順暢:提昇排水效率，減少排水不順、水消太慢情形</p><p class="main-p dot">獨立通氣:各戶獨立小型吸氣閥設計，通氣效果不受干擾</p><p class="main-p dot">防止漏水:大型吸氣閥可防止伸頂管道間造成的漏水問題</p><p class="main-p dot">堅韌耐用:領先全台排水設計規範，可耐用長達 50 年以上</p></div>'}
        ],
        el:'c3_1'
      }

    },
    components: {
      'c3_1': c3_1,
      'c3_2': c3_2,
      'c3_3': c3_3,
      'c3_4': c3_4
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
