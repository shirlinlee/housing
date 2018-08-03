<template>
    <div class="popup" v-show="isShow" @click="$emit('openLb','', false)">
        <a class="close abs" href="javascript:;" @click="$emit('openLb','', false)"><img src="/static/asset/svg/close.svg"/></a>
        <div class="content"><img :src="'/static/img/'+picName" :class="{ 'show': isShow }"/></div>
    </div>
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
    .popup {
        top: 0;
    }
</style>
