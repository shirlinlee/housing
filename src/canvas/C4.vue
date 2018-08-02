<template>
  
  <div class="canvas_wrapper">
    <transition name="canvas">
      <div :is="el" :key="el"/>
    </transition>
    <ul>
      <li v-for="(slide,index) in slides" :class="{'active': current === index}" @click="currentHandler(index)">{{ slide }}</li>
    </ul>
    <a class="arrow" @click="arrowHandler(1)">></a> 
  </div>  
</template>

<script>
  import c4_1 from './C4-1';
  import c4_2 from './C4-2';
  
  
  export default {
    data(){
      return {
        current:0,
        slides:['low','Ykk'],
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
      console.log('4');
      this.$nextTick(function() {
      })

    },
    destroyed() {
    },
    methods: {
      currentHandler:function(index){
        if( this.current !== index) {
          this.current = index;
          this.el = "c4_"+(index+1);
        }
        
      },
      arrowHandler: function(add){
        var currentPage = Number(this.el.substr(-1, 1));
        if( this.slides.length > currentPage ) {
            this.el = 'c4_'+ ( currentPage + add );
            this.current = this.current+add;
        } else{
            this.el = 'c4_1';
            this.current = 0;
        }  
      }
      
    }
  }
</script>
