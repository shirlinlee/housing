<template>
  <div id="wrapper">
    <Nav />
    <div :is="showItem"/>
  </div>  
    
</template>

<script>
import Nav from './components/Nav'

import MainPage from './content/Main';
import conent1 from './content/Content1';
import conent2 from './content/Content2';
import conent3 from './content/Content3';
import conent4 from './content/Content4';
import conent5 from './content/Content5';
import conent6 from './content/Content6';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

export default {
  name: 'Index',
  data() {
    return {
    }
  },
  methods: {
    change(){
      
    }
  },
  components: {
    Nav,
    'C0':MainPage,
    'C1':conent1,
    'C2':conent2,
    'C3':conent3,
    'C4':conent4,
    'C5':conent5,
    'C6':conent6
  },
  computed: {
    showItem () {
      return 'C'+this.$store.state.show;
    }
  }
}
</script>

<style lang="scss">
  @import '~/static/css/init.css';
</style>
