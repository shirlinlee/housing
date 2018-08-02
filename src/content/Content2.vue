<template>
  <div>
    <transition-group name="fade">
      <div v-for="(slide, index, key) in slides" :key="index" :class="slide.class" v-if=" $store.state.c2_tab === showItem(index) ">
          <div v-for="(img, idx, ke) in slide.imgs" :key="ke" v-if="currentData(index,idx)">
            <img v-bind:src="'/static/images/'+img" v-if="idx!==6" />
            <div class="all_pic" v-if="idx === 6">
              <img src="/static/images/all_01.png" @click="openLb('all_01.png', true)"/>
              <img src="/static/images/all_02.png" @click="openLb('all_02.png', true)"/>
            </div>
          </div>
          

          <ul :key="index" :class="slide.class">
            <li v-for="(tab, i, k) in slide.tabs" :key="k" :class="{'active':currentData(index,i)}" @click="currentHandler(index, i)">{{ tab }}</li>
          </ul>
      </div>
    </transition-group>
    <LB :picName="lbPic" :isShow="lbShow" @openLb="openLb" />
   
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
        slides: [{
            name: '城中理念',
            class: '',
            tabs: [],
            imgs: ['115.png']
          },
          {
            name: '城中實績',
            class: '',
            tabs: [],
            imgs: ['150.png']
          },
          {
            name: '團隊成員',
            class: 'member',
            tabs: ['杜','倪','王','李','林','潘','璞寶營造'],
            imgs: ['115.png','150.png','115.png','150.png','115.png','150.png','']
          }
        ],
        lbPic: 'all_01.png',
        lbShow: false
      }
  
    },
    components: {
        LB,
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
      openLb(name, isShow) {
        console.log(name, isShow);
        this.lbPic = name;
        this.lbShow = isShow;
        
        
      }
    },
    updated() {
      // console.log(this.$store);
    },
    computed: {

    }
  }
</script>
