export default {
  // 存储状态值
  state: {
    show: '4',
    c2_tab: '1',
    c3_tab: '1',
    c4_tab: '4',
    c5_tab: '1',
    c6_tab: '1'
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  mutations: {
    // 修改state，第一个参数就是state
    nav(state, num) {
      state.show = num;
      state[`c${num}_tab`] = '1'; 
      console.log('mutations');
    },
    // 提交载荷 Payload，第一个参数就是state，第二个参数是载荷。
    tab(state, tab) {
      // console.log(`c${tab}_tab`);
      state[`c${tab.tab}_tab`] = tab.num;
      // console.log(state);
    },
  },
  // actions用于处理异步事件，最后还是需要提交mutations来改变state
  actions: {
    // 这里使用context来提交mutations
    nav (context) {
      context.commit('nav')
    },
    tab (context) {
      context.commit('tab');
    },
    incrementAsync (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
    incrementAsyncWithValue (context, value) {
      setTimeout(() => {
        context.commit('add', value)
      }, 1000)
    }
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {
    done(state) {
      return state.count + 5;
    },
  }
}
