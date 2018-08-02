<template>
  <div>
    <transition-group name="fade">
      <div v-for="(slide, index, key) in slides" :key="index" :class="slide.class" v-if=" $store.state.c5_tab === showItem(index) ">
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
        current3: 0,
        current4: 0,
        slides: [{
            name: '生活機能圖',
            class: '',
            tabs: ['生活機能圖', '書生學區','公園綠地','便利生活'],
            imgs:['115.png','150.png','115.png','150.png']
          },
          {
            name: '音樂篇',
            class: '',
            tabs: [],
            imgs:['b2.png']
          },
          {
            name: '文人篇',
            class: '',
            tabs: [],
            imgs:['b2.png']
          },
          {
            name: '生活篇',
            class: '',
            tabs: [],
            imgs:['b2.png']
          },
          {
            name: '交通篇',
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
