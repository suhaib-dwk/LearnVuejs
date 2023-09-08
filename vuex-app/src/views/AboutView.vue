<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Count : {{ count }}</p>
    <p>my name is {{ aliasName }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "About",

  computed: {
    ...mapState({
      count: state => state.count,// us a arrow function
      aliasName: 'name',// alias for state property

    })
  }
}
</script>