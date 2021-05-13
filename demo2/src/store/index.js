import Vue from 'vue'
// import { createApp } from 'vue'
import Vuex from 'vuex'

// const app = createApp({})


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userID: "",
    stu: [
      { id: 1, name: 'Arles', sex: '♀', birth: "3.12", face: 'static/img/users/stu1.jpg', signature: "日出东方落于西" },
      { id: 2, name: '粉磨心草昧', sex: '♂', birth: "7.30", face: 'static/img/users/stu2.jpg', signature: "外向是生活所需，孤独是自我享受" },
      { id: 3, name: '卖女孩的小火柴', sex: '♀', birth: "9.20", face: 'static/img/users/stu3.jpg', signature: "自律且努力 别让生活太安逸" },
      { id: 4, name: '秋凉', sex: '♂', birth: "3.7", face: 'static/img/users/stu4.jpg', signature: "仙女的眼应该满怀清明大意和温柔阳光" },
    ]
  },
  mutations: {
    changeStu(state, params) {
      // console.log(params);
      this.userID = params[params.length - 1];
      // console.log(this.userID);
      state.stu.filter((s) => s.id == this.userID)[0].name = params[0];
      state.stu.filter((s) => s.id == this.userID)[0].sex = params[1];
      state.stu.filter((s) => s.id == this.userID)[0].birth = params[2];
      state.stu.filter((s) => s.id == this.userID)[0].signature = params[3];
      // console.log(params);
      // console.log(state.stu.filter((s) => s.id == id)[0].name);
    }
  },
  getters: {
    getUserid(state) {
      return id => {
        // console.log(id);
        state.userid = id;
        // console.log(state.userid);
      }
    },
    getName(state) {
      // console.log(id);
      // console.log(state.stu[id].name);
      // return state.stu[id].name;
      // console.log(state.stu.filter((s) => s.id === this.$route.query.id).name);
      return id => {
        // const ids = state.stu.filter((s) => s.id == id);
        // console.log(ids[0].name);
        return state.stu.filter((s) => s.id == id)[0].name;
      };

    },
    getSex(state) {
      return id => state.stu.filter((s) => s.id == id)[0].sex;
    },
    getBirth(state) {
      return id => state.stu.filter((s) => s.id == id)[0].birth;
    },
    getSignature(state) {
      return id => state.stu.filter((s) => s.id == id)[0].signature;
    },
    getFace(state) {
      return id => state.stu.filter((s) => s.id == id)[0].face;
    }
  },
  actions: {},
  modules: {}
})

export default store;