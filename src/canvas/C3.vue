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
  import c3_1 from './C3-1';
  import c3_2 from './C3-2';
  import c3_3 from './C3-3';
  import c3_4 from './C3-4';
  
  
  export default {
    data(){
      return {
        current:0,
        slides:['排水分管','給水吊管','排水配管','防疫系統'],
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
          this.el = "c3_"+(index+1);
        }
        
      },
      arrowHandler: function(add){
        var currentPage = Number(this.el.substr(-1, 1));
        if( this.slides.length > currentPage ) {
            this.el = 'c3_'+ ( currentPage + add );
            this.current = this.current+add;
        } else{
            this.el = 'c3_1';
            this.current = 0;
        }  
      }
      
    }
  }
</script>
