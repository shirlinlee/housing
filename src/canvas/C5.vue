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
  import c5_1 from './C5-1';
  import c5_2 from './C5-2';
  
  
  export default {
    data(){
      return {
        current:0,
        slides:['當層排氣','活水系統'],
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
          this.el = "c5_"+(index+1);
        }
        
      },
      arrowHandler: function(add){
        var currentPage = Number(this.el.substr(-1, 1));
        if( this.slides.length > currentPage ) {
            this.el = 'c5_'+ ( currentPage + add );
            this.current = this.current+add;
        } else{
            this.el = 'c5_1';
            this.current = 0;
        }  
      }
      
    }
  }
</script>
