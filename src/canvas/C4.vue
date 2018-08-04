<template>
    <transition name="canvas">
      <div class="wrap"><span class="page">about engrg</span>
        <main>
          <div class="engrgBox" v-for="(slide,index,key) in slides" :key="key" v-if="current===index">
            <div class="left">
              <div class="pic" :is="'c4_'+(index+1)">
              </div>
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
  import c4_1 from './C4-1';
  import c4_2 from './C4-2';
  
  export default {
    data(){
      return {
        current:0,
        slides:[
          { name:'Low-E 玻璃', srcName:'6-4-1.png', text:'<div class="engrg-des"><h3>Low-E 玻璃</h3><p class="main-p">低輻射膠合玻璃使可見光穿透率60%以上，同時卻又能將多餘熱能及紫外線留在窗外，使室內外溫可差達3℃，不但節省空調用電更降低紫外線對人體和家具傷害。且具良好隔音及抗風壓性，維持室內寧靜。</p></div>'},
          { name:'YKK 隔音氣密窗', srcName:'6-4-2.png', text:'<div class="engrg-des"><h3>YKK 隔音氣密窗</h3><p class="main-p">日本銷售第一品牌</p><p class="main-p">具防颱、防水、特殊隔音效果。符合中央 CNS 最高標準、S09001國際認證，防水性 75kg/m2 以上，漏氣量 2m/hr.m3 以下，耐風壓逹 360k9/m2，隔音性 35db 以上</p></div>'}
        ],
        el:'c4_1'
      }
    },
    components: {
      'c4_1': c4_1,
      'c4_2': c4_2
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
