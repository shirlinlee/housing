<template>
  
  <div class="canvas_wrapper">
    <div :is="el"/>
    <ul>
      <li v-for="(slide,index) in slides" :class="{'active': current === index}" @click="currentHandler(index)">{{ slide }}</li>
    </ul>
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
        
      }
      
    }
  }
</script>
<style lang="scss" scoped>
  ul {
    display:inline-block;
    margin: 0 auto;
    li {
      border: 1px solid #000;
      padding: 10px 20px;
      display: inline-block;
      margin: 0 8px;
      &.active {
        color: #fff;
        background-color: #000;
      }
    }
  }
  
</style>
