<template>
  <div>
    <h1>Users List</h1>
    <ol>
      <router-link tag="li" v-for="userId in 3" :key="userId" :to="'/user/' + userId + '?title=Hello'">
        <a>User {{ userId }}</a>
      </router-link>
    </ol>

    <router-view></router-view>
  </div>
</template>

<style scoped>
ol {
  list-style: none;
}
</style>
