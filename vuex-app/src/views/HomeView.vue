<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <p>my name is {{ names }}</p>
    <p>my name is {{ $store.state.name }}</p>
    <p v-for="(todo, i) in todoList" :key="i">
      {{ todo.id }} : {{ todo.name }}
    </p> -->

    <!-- <p>{{ this.$store.getters.todoListDone }}</p>
    <p>{{ this.$store.getters.getTodoListById(1) }}</p> -->

    <p>{{ todoListDone }}</p>
    <p>{{ getTodoListById(1) }}</p>

    <!-- <p>Count : {{ count }}</p>
    <button @click="increment()"> + </button>
    |
    <button @click="decrement()"> - </button>
    |
    <button @click="n_increment()"> Add 5 </button>
    |
    <button @click="n_decrement()"> Sub 5 </button> -->


    <!-- <p>Count : {{ count }}</p>
    <button @click="increment()"> + </button>
    |
    <button @click="decrement()"> - </button>
    |
    <button @click="n_increment(5)"> Add 5 </button>
    |
    <button @click="n_decrement({ decBy5: 5 })"> Sub 5 </button> -->

    <!-- <p>Count : {{ count }}</p>
    <button @click="a_increment">Normal Action</button>
    <button @click="m_increment">Dispatch Action</button> -->
  </div>
</template>

<script>
// import { mapActions, mapGetters, mapMutations } from 'vuex'
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  data() {
    return {
      name: "suhaib"
    }
  },
  // computed: {
  //   // reactive --- best to declare state property here
  //   fullNameIs() {
  //     return this.$store.state.name;
  //   },
  //   todoList() {
  //     return this.$store.state.todoList;
  //   }
  // },

  // compud: temapState({
  //   names: (store) => store.name
  // })

  // computed: {
  //   todoList() {
  //     return this.$store.state.todoList;
  //   },
  //   ...mapState({
  //     names: (store) => store.name
  //   })
  // },

  // computed: {
  //   ...mapState(['name', 'todoList'])
  // }

  computed: {
    ...mapGetters(['todoListDone', 'getTodoListById']),
  }

  // methods: {
  //   increment() {
  //     this.$store.commit('increment');
  //   },
  //   decrement() {
  //     this.$store.commit('decrement');
  //   },
  //   n_increment() {
  //     this.$store.commit('n_increment', 5);
  //   },
  //   n_decrement() {
  //     this.$store.commit('n_decrement', { decBy5: 5 });
  //   },
  // },

  // methods: {
  //   ...mapMutations(['increment', 'decrement', 'n_increment', 'n_decrement']),
  //   ...mapActions(['a_increment']),
  //   m_increment() {
  //     this.$store.dispatch('a_increment')
  //   }
  // },

  // computed: {
  //   ...mapState({
  //     count: state => state.count,
  //   }),
  // }
}
</script>
