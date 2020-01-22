<template>
  <div>
    <h1>User Details</h1>
    <p>User ID: {{ id }}</p>
    <p>Property: {{ name }}</p>
    <p>Query parameter: {{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
      default: 1,
    },
    name: String,
  },
  computed: {
    title() {
      return this.$route.query.title;
    }
  }
}
</script>
