import Vue from 'vue'
// import { createApp } from 'vue'
import Vuex from 'vuex'
// const app = createApp({})


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stu: [
      { id: 1, name: 'Arles', face: 'assets/img/users/stu1' },
      { id: 2, name: '粉磨心草昧', face: 'assets/img/users/stu2' },
      { id: 3, name: '卖女孩的小火柴', face: 'assets/img/users/stu3' },
      { id: 4, name: '秋凉', face: 'assets/img/users/stu4' },
    ]
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {}
})

export default store;