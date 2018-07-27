<template>
  <div>
      <img src="/static/images/011.png">
      
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
    destroyed() {
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
