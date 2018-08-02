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
        slides:['窗框防水','浴室防水','浴廁防水','外牆接縫企口','屋頂防水','露台防水'],
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
      console.log('2');
      this.$nextTick(function() {
      })

    },
    destroyed() {
    },
    methods: {
      currentHandler:function(index){
        if( this.current !== index) {
          this.current = index;
          this.el = "c2_"+(index+1);
        }  
      },
      arrowHandler: function(add){
        var currentPage = Number(this.el.substr(-1, 1));
        if( this.slides.length > currentPage ) {
            this.el = 'c2_'+ ( currentPage + add );
            this.current = this.current+add;
        } else{
            this.el = 'c2_1';
            this.current = 0;
        }  
      }
      
    }
  }
</script>

