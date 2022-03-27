<template>
  <div id="app">
    <nav>
      <router-link to="/" class="navItem">Home</router-link>
      <router-link to="/admin" class="navItem">Administrador</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
template {
  margin: 0px;
  padding: 0px;
}
nav {
  background: linear-gradient(#b9bbbd, #2c3e50);
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.navItem {
  float: left;
  width: 50%;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  transition: all 400ms;
}
nav a.router-link-exact-active {
  color: rgba(48, 46, 46, 0.842);
}
.navItem:hover {
  background: linear-gradient(#35333377, #353333);
}
</style>
