import { createStore } from 'vuex'
import { todoModules } from './todoModules';

export default createStore({
  state: {
    name: "suhaib",
    // todoList: [
    //   { id: 1, name: "Homework", done: true },
    //   { id: 2, name: "Exam", done: false },
    //   { id: 3, name: "Quiz", done: true },
    // ],
    count: 5
  },
  // returns state values as requested
  getters: {
    // properties
    // todoListDone: (state) => {
    //   return state.todoList.filter((v) => v.done === true)
    // },

    //method

    // getTodoListById: (state) => (id) => {
    //   return state.todoList.filter((v) => v.id === id)
    // }
  },

  // alters/ update / change state values
  mutations: {

    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    n_increment(state, n) {
      state.count += n;
    },
    n_decrement(state, payload) {
      state.count -= payload.decBy5;
    }
  },
  actions: {
    a_increment({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000)
    }
  },
  modules: {
    todo: todoModules
  }
})
