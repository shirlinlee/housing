<template>
    <!-- <transition name="fade"> -->
        <div class="black" v-show="isShow" @click="$emit('openLb','', false)">  
            <img :src="'/static/images/'+picName" :class="{ 'show': isShow }">
        </div> 
    <!-- </transition> -->
    
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props:['picName','isShow'],
    //actions 响应在view上的用户输入导致的状态变化
    methods: {
    },
    computed: {
    }
  }
</script>
<style lang="scss">
    .black{
        // opacity: 0;
        // transform: scale(0);
        width: 100%;
        height: 100vh;
        position: fixed;
        background: rgba(0,0,0,.6);
        // transition: opacity 1s;
        top: 0;
        left: 0;
        img {
            position: absolute;
            top: 50%;
            left: 50%;
            opacity:0;
            transform: translate(-50%, 0);
            width: 80%;
            transition: all .3s .5s;
        }
    }

    .black img.show {
        // animate: 
        opacity: 1;
        transform: translate(-50%, -50%);
    }
</style>
