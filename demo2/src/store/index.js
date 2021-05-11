import Vue from 'vue'
// import { createApp } from 'vue'
import Vuex from 'vuex'
// const app = createApp({})


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stu: [
      { id: 1, name: 'Arles', face: 'static/img/users/stu1.jpg' },
      { id: 2, name: '粉磨心草昧', face: 'static/img/users/stu2.jpg' },
      { id: 3, name: '卖女孩的小火柴', face: 'static/img/users/stu3.jpg' },
      { id: 4, name: '秋凉', face: 'static/img/users/stu4.jpg' },
    ]
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {}
})

export default store;