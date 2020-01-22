<template>
  <div>
    <h1>User Details</h1>
    <p>User ID: {{ userId }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id,
    }
  },
  watch: {
    $route(to, from) {
      //console.log("TO", to);
      //console.log("FROM", from);

      this.userId = to.params.id;
    }
  }
}
</script>
