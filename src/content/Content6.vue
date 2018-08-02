<template>
  <div>
    <transition-group name="fade">
      <div v-for="(slide, index, key) in slides" :key="index" :class="slide.class" v-if=" $store.state.c6_tab === showItem(index) ">
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
        slides: [{
            name: '傢配圖',
            class: 'forni',
            tabs: ['115', '150'],
            imgs:['115.png','150.png']
          },
          {
            name: '墨線圖',
            class: 'floor',
            tabs: ['b5f', 'b4f', 'b3f', 'b2f', 'b1f', '1f', '2f', '3~4f', '5f', '6f', '7~9f', '10f', '11f', '12f', '13f', '14f'],
            imgs:['b2.png','b3.png','b2.png','b3.png','b2.png','b3.png','b2.png','b3.png','b2.png','b3.png']
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
      test: function(){
        return true
      }
    },
    updated() {
      // console.log(this.$store);
    },
    computed: {

    }
  }
</script>
