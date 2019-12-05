import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const  state = {
  count : 2
};
const mutations = {
  add(state,n){
    state.count+=n;
  },
  reduce(state){
    state.count-=1;
  }
}
const getters ={
  count:function (state) {
    return state.count+=100;
  }
}

const actions ={
  addAction(context){
    setTimeout(()=>{
      context.commit('reduce')
    },3000);
    console.log("我比reduce先执行")
    // context.commit('add',10);
  },
  reduceAction({commit}){
    commit('reduce')
  }
}

const moduleA ={
  state,mutations,actions,getters
}
export default new Vuex.Store({
  //   state,
  //   mutations,
  //   getters,
  // actions

  modules:{a:moduleA}
});
