<template>
  <div>
    <Nav/>
    <div id="app" style="margin-bottom: 50px">
    <div class="jumbotron"></div>
    <nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  components: {
    Nav, Footer
  }
}
</script>

<style>
#app {
  background-color: #e0e0e0;
}
</style>
