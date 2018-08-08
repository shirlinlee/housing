<template>
    <transition name="canvas">
      <div class="wrap"><span class="page">about engrg</span>
        <main>
          <div class="engrgBox" v-for="(slide,index,key) in slides" :key="key" v-if="current===index">
            <div class="left">
              <div class="pic" :is="'c1_'+(index+1)" v-if="!$store.state.isWebsite"/>
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
  import c1_1 from './C1-1';
  import c1_2 from './C1-2';
  
  export default {
    data(){
      return {
        current:0,
        slides:[
          { name:'牆開口腳隅補強', srcName:'6-1-1.png', text:'<div class="txt por"><h2 class="tt-page">無微不至的細節<br>就是對居住最好的承諾</h2><span class="abs">about<br>engrg</span></div><div class="engrg-des"><h3>牆開囗角隅補強</h3><p class="main-p">外牆上開口(門、窗)角隅設置補強筋，減少剪力裂痕。</p></div>'},
          { name:'雙層配筋', srcName:'6-1-2.png', text:'<div class="engrg-des"><h3>雙層配筋</h3><p class="main-p dot">外牆15公分</p><p class="main-p dot">符合國家標準CNS560要求，具有無輻射性污染證明</p></div>'}
        ],
        el:'c1_1'
      }

    },
    components: {
      'c1_1': c1_1,
      'c1_2': c1_2
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
