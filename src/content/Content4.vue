<template>
    <transition name="fade"><div :is="detailHandler"/></transition>
</template>

<script>
  import canvas1 from './../canvas/C1';
  import canvas2 from './../canvas/C2';
  import canvas3 from './../canvas/C3';
  import canvas4 from './../canvas/C4';
  import canvas5 from './../canvas/C5';

  export default {
    data(){
      return {
        tab:0,
        slides:{
          s1:['牆開囗角隅補強 002','雙層配筋004'],
          s2:['窗框防水 003','浴室防水 007','浴廁防水 008','外牆接縫企口 001','屋頂防水 010','露台防水 010'],
          s3:['排水分管 006','給水吊管 011','排水配管 009','防疫系統 streamvideo 179、182'],
          s4:['Low-E玻璃','YKK隔音氣密窗'],
          s5:['當層排氣 005'],
        },
      }

    },
    components: {
      'C1': canvas1,
      'C2': canvas2,
      'C3': canvas3,
      'C4': canvas4,
      'C5': canvas5
    },
    computed: {
        detailHandler: function(){
          return 'C'+ this.$store.state.c4_tab;
        }
    },
    updated() {
    },
    mounted() {
      
      this.$nextTick(function() {

      })
    },
    destroyed() {
    },
    methods: {
      

    }
  }
</script>
