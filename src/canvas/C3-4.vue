<template>
  <div class="video_wrapper">

    <video width="380" height="310" autoplay="autoplay">
        <source src="/static/video/3-5.flv" type="video/mp4" />
    </video>
 
    <video width="380" height="310" autoplay="autoplay">
        <source src="/static/video/3-4.flv" type="video/mp4" />
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
      this.$nextTick(function() {
        
      })

    },
    beforeDestroy() {
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style lang="scss">
  .video_wrapper{
    max-width:800px;
    text-align: center;
    padding-top: 40px;
    video{
      margin: 8px auto 0;
      clear: both;
      float: none;
      display: block;
    }
  }
  
</style>
