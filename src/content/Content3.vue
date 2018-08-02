<template>
  <div>
    <transition-group name="fade">
      <div v-for="(slide, index, key) in slides" :key="index" :class="slide.class" v-if=" $store.state.c3_tab === showItem(index) ">
          <div v-for="(img, idx, ke) in slide.imgs" :key="ke" v-if="currentData(index,idx)">
            <img v-bind:src="'/static/images/'+img" />
          </div>
          <ul :key="index">
            <li v-for="(tab, i, k) in slide.tabs" :key="k" :class="{'active':currentData(index,i)}" @click="currentHandler(index, i)">{{ tab }}</li>
          </ul>
      </div>
    </transition-group>
   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current0: 0,
        current1: 0,
        current2: 0,
        slides: [{
            name: '建築設計理念',
            class: '',
            tabs: [],
            imgs:['115.png']
          },
          {
            name: '立面篇',
            class: '',
            tabs: [],
            imgs:['b2.png']
          },
          {
            name: '公設篇',
            class: '',
            tabs: [],
            imgs:['b2.png']
          }
        ]
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
      showItem(index) {
        return (index + 1).toString()
      },
    },
    updated() {
      // console.log(this.$store);
    },
    computed: {

    }
  }
</script>
