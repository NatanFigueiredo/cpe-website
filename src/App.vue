<template>
  <div id="app">

		<Header/>
    <router-view/>

		<footer>
			
		</footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
	components: {
		'Header': Header
	}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.cpe-azul {
	background-color: #12385B;
}

.navbar-nav a {
  font-weight: bold;
  color: #2c3e50;
}

.navbar-nav a.router-link-exact-active {
  color: #42b983;
}
</style>
