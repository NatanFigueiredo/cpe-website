<template>
  <div id="app">

		<Header/>
    <router-view/>

		<Footer/>
    <VLibras/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { VLibras } from '@vue-a11y/vlibras'

export default {
	components: {
		Header,
    Footer,
    VLibras
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
</style>
