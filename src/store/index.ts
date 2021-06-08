import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//把store帮到Vue.prototype.$store = store

const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment(state,n:number){
      state.count += n;
    }
  },
});

export default store;