<template>
  <div id="app">
    <div id="nav">
      <ul>
        <router-link tag="li" to="/" active-class="active" exact><a>Home</a></router-link>
        <router-link tag="li" to="/about" active-class="active"><a>About</a></router-link>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav li.active, #nav li.active a {
  color: #42b983;
}
</style>
