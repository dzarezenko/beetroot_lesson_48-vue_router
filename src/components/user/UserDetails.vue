<template>
  <div>
    <h1>User Details</h1>
    <p>User ID: {{ id }}</p>
    <p>{{ name }}</p>
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
  }
}
</script>
