export default {
  // 存储状态值
  state: {
    show: '0',
    c2_tab: '1',
    c3_tab: '1',
    c4_tab: '1',
    c5_tab: '1',
    c6_tab: '1',
    isBlackTheme: false
  },

  mutations: {
    // 主選單點擊, 次選單也要重新顯示第一個
    nav(state, num) {
      console.log(state.show, num,'store');
      if( state.show === num ) return;
      state.show = num;
      state[`c${num}_tab`] = '1'; 
      state.isBlackTheme = false;
    },
     // 次選單
    tab(state, tab) {
      // console.log(tab);
      state[`c${tab.tab}_tab`] = tab.num;
    },
    themeHandler(state, isblack) {
      state.isBlackTheme = isblack;
    }
  },
  // actions用于处理异步事件，最后还是需要提交mutations来改变state
  actions: {
    // 这里使用context来提交mutations
    navAndTheme (context, num) {
      // console.log(context, num);
      context.commit('nav',num);
    },
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {
    done(state) {
      return state.count + 5;
    },
  }
}
