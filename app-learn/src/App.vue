<template>
  <!-- <h1>{{ title }}}</h1>
  <input type="text"  ref="name"/> 
  <button @click="handleClick">Click me</button>
  <div v-if="showModel">
    <Model :header="header" :text="text" theme="dark" @close="toggleModel"/> 
    <Model theme="dark" @close="toggleModel">
      <template v-slot:links>
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
      </template>
      <h1>suhaib Giveaway</h1>
      <p>email to sign-up</p>
    </Model>
  </div>
    <teleport to='.models' v-if="showModelTwo" >
      <Model2  :header="header" :text="text" @close="toggleModelTwo" />
    </teleport>

  <p>Welcome ... </p>
  <button @click.alt="toggleModel">Click Model1</button>
  <button style="margin-left: 20px;" @click="toggleModelTwo">Click Model2</button> -->
  <!-- <Model header="Sign up for the Giveaway!" text="Hello World"/> -->
  <div>
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <p v-if="showResults">Reaction Time : {{ score }} ms</p>
  </div>
</template>

<script>
// import Model from './components/Model.vue';
// import Model2 from './components/Model2.vue';

import Block from './components/Block.vue';

export default {
  name: 'App',
  components: {
    Block
  },

  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    }
  },

  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false
      // console.log(this.delay);
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false,
        this.showResults = true
    }
  }

  // components: {
  //   HelloWorld
  // }

  // components:{
  //   Model,
  //   Model2
  // },


  // data() {
  //   return {
  //       title : "Hello World :)",
  //       header:"Sign up for the Giveaway!",
  //       text :"Enter your email to sign-up and get a chance at winning $50!",
  //       showModel: false,
  //       showModelTwo: false
  //   }
  // },
  // methods : {
  //   handleClick(){
  //     console.log(this.$refs.name);
  //     this.$refs.name.classList.add('active');
  //     this.$refs.name.focus();
  //   },
  //   toggleModel(){
  //     this.showModel = !this.showModel;
  //   },
  //   toggleModelTwo(){
  //     this.showModelTwo = !this.showModelTwo;
  //   }
  // }
}
</script>

<style>
#app,
.models {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #706f6f;
  margin-top: 60px;
}

/* .model .actions {
        text-align: center;
        margin: 30px 0 10px 0;
    }

    .model .actions a {
        color: #fcfdf5;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
        
    }

    .model .actions a:hover {
      background: #2c3e50;
      
    } */
</style>
