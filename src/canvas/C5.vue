<template>
    <transition name="canvas">
      <div class="wrap"><span class="page">about engrg</span>
        <main>
          <div class="engrgBox" v-for="(slide,index,key) in slides" :key="key" v-if="current===index">
            <div class="left">
              <div class="pic" :is="'c5_'+(index+1)">
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
  import c5_1 from './C5-1';
  import c5_2 from './C5-2';
  
  
  export default {
    data(){
      return {
        current:0,
        slides:[
          { name:'當層排氣', srcName:'6-5-1.png', text:'<div class="engrg-des"><h3>當層排氣</h3><p class="main-p">他案一般將浴廁抽風排氣管,銜接至管道間排放，會產生臭氣逆流污染。</p><p class="main-p">本案浴廁抽風排氣管，採直接當層室外排放方式。</p><p class="main-p">排風囗另設置防逆流下罩式排氣罩，阻絕異物侵入，防止雨水逆風倒灌。</p></div>'},
          { name:'活水系統', srcName:'6-5-2.png', text:'<div class="engrg-des"><h3>長庚生技諧振水處理器</h3><p class="main-p">吸附重金屬並過濾有機雜質，釋放人體所需微量元素水的溶氧值可提高約 40%，幫 助人類細胞抵抗氧化改便水的振盪頻率，產生界於世界長壽村水質的電磁範圍。 </p></div>'}
        ],
        el:'c5_1'
      }

    },
    components: {
      'c5_1': c5_1,
      'c5_2': c5_2
      
    },
    updated() {
    },
    mounted() {
      console.log('5');
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
