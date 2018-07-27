<template>
  
  <div class="canvas_wrapper">
    <div :is="el"/>
    <ul>
      <li v-for="(slide,index) in slides" :class="{'active': current === index}" @click="currentHandler(index)">{{ slide }}</li>
    </ul>
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
