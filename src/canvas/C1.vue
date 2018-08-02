<template>
  
  <div class="canvas_wrapper">
    <transition name="canvas">
      <div :is="el"/>
    </transition>
    <ul>
      <li v-for="(slide,index) in slides" :class="{'active': current === index}" @click="currentHandler(index)">{{ slide }}</li>
    </ul>
    <a class="arrow" @click="arrowHandler(1)">></a> 

  </div>  
</template>

<script>
  import c1_1 from './C1-1';
  import c1_2 from './C1-2';

  
  export default {
    data(){
      return {
        current:0,
        slides:['牆開口腳偶補強','雙層配筋'],
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
      console.log('1');
      this.$nextTick(function() {
      })

    },
    destroyed() {
    },
    methods: {
      currentHandler:function(index){
        if( this.current !== index) {
          this.current = index;
          this.el = "c1_"+(index+1);
        }  
      },
      arrowHandler: function(add){
        var currentPage = Number(this.el.substr(-1, 1));
        if( this.slides.length > currentPage ) {
            this.el = 'c1_'+ ( currentPage + add );
            this.current = this.current+add;
        } else{
            this.el = 'c1_1';
            this.current = 0;
        }  
      }
      
    }
  }
</script>
