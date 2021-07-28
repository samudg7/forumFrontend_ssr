<template>
  <div>
    <Nav/>
    <div class="jumbotron"></div>
    <nuxt/>
    <Footer />
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

