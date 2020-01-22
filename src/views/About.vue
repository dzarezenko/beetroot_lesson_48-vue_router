<template>
  <div class="about">
    <h1>About</h1>
    <button @click="goHome()">Home</button>
    <router-link tag="button" to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      //console.log("Router", this.$router);
      //console.log("Route", this.$route);
      this.$router.push('/');
    },
  },
}
</script>
