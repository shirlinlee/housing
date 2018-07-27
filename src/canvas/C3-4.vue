<template>
  <div>
    <video width="400" height="400" autoplay="autoplay">
        <source src="/static/video/3-4.flv" type="video/mp4" />
    </video>
    <video width="400" height="400" autoplay="autoplay">
        <source src="/static/video/3-5.flv" type="video/mp4" />
    </video>
      
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name:'3-4',

      }

    },
    updated() {
     
    },
    mounted() {
      // console.log('5');
     
      this.$nextTick(function() {
        
      })

    },
    destroyed() {
       
    },
    computed: {
  
    },
    methods: {
     

    }
  }
</script>
