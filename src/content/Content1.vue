<template>
  <div class="content">
        品牌概念 {{tab}}
        <a href="#" @click="changeTab(1)">切換</a>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        tab:0
      }

    },
    updated() {
    },
    mounted() {
      
    },
    destroyed() {
    },
    methods: {
      changeTab: function(el){
        this.tab = el;

      }
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    padding: 180px 50px;
  }
  a {
    padding: 5px;
    border: 1px solid pink;
  }
  
</style>
