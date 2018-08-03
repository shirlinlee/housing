<template>
  <div>
    <transition-group name="fade">
      <div class="wrap wrap-life" :key="'life1'" v-if=" $store.state.c5_tab === showItem(0)">
        <span class="page">about life</span>
        <main>
          <div class="mapBox">
            <div class="map por" v-for="(life, index, key) in lifes" :key="key" v-if="currentData(0,index)">
              <img :src="'/static/img/'+life.srcName"/>
              <div v-html="life.extra" @click="openLb(life.srcName, true)" />
            </div>
          </div>
          <div class="sq-tab">
            <ul>
              <li v-for="(life, i, k) in lifes" :key="k"><a :class="{'active':currentData(0,i)}" @click="currentHandler(0, i)">{{life.name}}</a></li>
            </ul>
          </div>
        </main>
        <div class="arrowBox">
          <div class="arrow">
            <a href="javascript:;" @click="arrowHandler(0,-1)" :class="{'transparent': current0===0 }" ><span></span></a>
            <a href="javascript:;" @click="arrowHandler(0,1)" :class="{'transparent': current0===(lifes.length-1) }"><span></span></a>
          </div>
        </div>
      </div>
      <div class="wrap" :key="'life2'" v-if=" $store.state.c5_tab === showItem(1)"><span class="page">about life</span>
        <main class="mapBG mapBG-4-2"></main>
      </div>
      <div class="wrap" :key="'life3'" v-if=" $store.state.c5_tab === showItem(2)"><span class="page">about life</span>
        <main class="mapBG mapBG-4-3"></main>
      </div>
      <div class="wrap" :key="'life4'" v-if=" $store.state.c5_tab === showItem(3)"><span class="page">about life</span>
        <main class="mapBG mapBG-4-4"></main>
      </div>
      <div class="wrap" :key="'life5'" v-if=" $store.state.c5_tab === showItem(4)"><span class="page">about life</span>
        <main class="mapBG mapBG-4-5"></main>
      </div>
      <LB :key="'lb'":picName="lbPic" :isShow="lbShow" @openLb="openLb" />
    </transition-group>
     
  </div>
</template>

<script>
  import LB from './../components/LightBox'

  export default {
    data() {
      return {
        current0: 0,
        current1: 0,
        current2: 0,
        current3: 0,
        current4: 0,
        lbPic:'',
        lbShow: false,
        lifes: [
          { name:'生活機能圖', srcName:'4-1-1.png', extra:'<a class="zoom abs" href="#"><img src="/static/asset/svg/zoom.svg"/></a>'},
          { name:'書生學區', srcName:'4-1-2.png', extra:''},
          { name:'公園綠地', srcName:'4-1-3.png', extra:''},
          { name:'便利生活', srcName:'4-1-4.png', extra:''}
        ],     
      }
    },
    components: {
        LB
    },
    updated() {
      console.log(this.$store.state.c5_tab);
      if( this.$store.state.c5_tab==='3' || this.$store.state.c5_tab==='4' ) {
        this.$store.commit('themeHandler', true);
      } else {
        this.$store.commit('themeHandler', false);
      }
    },
    methods: {
      currentData: function(index,i){
        return this['current'+index]===i;
      },
      currentHandler: function(main, sub) {
        if ( this['current'+main] !== sub) {
          this['current'+main] = sub;
        }
      },
      arrowHandler: function(sub, add){
        var newVal = this['current'+sub]+add;
        if( newVal<0 ) newVal= this.lifes.length-1;
        if( newVal >= this.lifes.length ) newVal = 0;
        this['current'+sub] = newVal;
      },
      showItem(index) {
        return (index + 1).toString()
      },
      openLb(name, isShow) {
        console.log(name, isShow);
        this.lbPic = name;
        this.lbShow = isShow;
      }
    },
    mounted() {
      this.$nextTick( ()=> {
        this.styleTag=document.createElement("link")
        this.styleTag.setAttribute("rel", "stylesheet")
        this.styleTag.setAttribute("type", "text/css")
        this.styleTag.setAttribute("href", '/static/css/life.css')
        document.getElementsByTagName("head")[0].appendChild(this.styleTag)

        
      })
    },
    destroyed() {
        document.getElementsByTagName('head')[0].removeChild(this.styleTag);
    },
  }
</script>
