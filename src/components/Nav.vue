<template>
  <ul class="nav">
    <li v-for="(nav,index) in navs" :class="{'active': $store.state.show === getIndex(index) }">
      <h6 @click="changeContent(getIndex(index))"> {{nav.title}}</h6> 
      <p v-for="(detail,i) in nav.details" :class="{'active': $store.state[`c${getIndex(index)}_tab`] === getIndex(i) }"  @click="changeTab( getIndex(index), getIndex(i))">{{ detail }}</p>
    </li>
  
    {{ this.$store.state.c2_tab }}
    {{ this.$store.state.c4_tab }}
    
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        navs:[
          {'title': '品牌概念','details':[]},
          {'title': '建築團隊','details':['城中理念','城中實蹟','團隊成員']},
          {'title': '建築規劃','details':[]},
          {'title': '建築工程','details':['結構工程','防水對策','管道設計','靜音美學','活氧通風']},
          {'title': '周邊環境','details':[]},
          {'title': '平面傢配','details':[]},
        ]

      }
    },
    //actions 响应在view上的用户输入导致的状态变化
    methods: {
      changeContent (num) {
        this.$store.commit('nav', num);
      },
      changeTab (tab, num) {
        console.log(tab, num);
        this.$store.commit('tab', {tab, num});
      },
      getIndex (index) {
        return (index+1).toString()
      }

    },
    computed: {
      
    }
  }
</script>
<style lang="scss">
  .nav {
    color: #000;
    position: fixed;
    transform: translate(0, -50%);
    top: 50%;
    right: 0;
    width:110px;
    li {
      font-size: 17px;
      line-height: 3;
      width:100%;
      position: relative;
      cursor: pointer;
      &.active{
        p {
          height: 25px;
          opacity:1;
        }
      }
      &.active:after {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #000;
        left: -12px;
        top: 23px;
      }
      p {
         font-size: 14px;
         line-height: 25px;
         padding-left: 8px;
         border-left: 3px solid transparent;
         height: 0;
         opacity:0;
         overflow: hidden;
         transition: all .4s;
         &:first-child {
           margin-top: -5px;
         }
         &.active {
          border-left: 3px solid #000;
        }
      }
      
    }
  }
  
</style>
