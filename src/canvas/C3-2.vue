<template>
  <div>
      <img src="/static/img/6-3-2.png">
      
  </div>
</template>

<script>
  export default {
    data(){
      return {
        
      }
    },
    updated() {
      console.log('3','updated');
        
    },
    mounted() {
      var $this = this;
      this.$nextTick(function() {
         
      })
    },
    beforeDestroy() {
    },
    computed: {
      canvasId: function(){
        return 'canvas'+ this.name
      }
    },
    methods: {
      

    }
  }
</script>
