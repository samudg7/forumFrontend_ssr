<template>
  <div>
    <div>
      <h1 style="margin: 15px; margin-left: 20px">Lista dei feedback</h1>
      <!-- <hr> -->
    </div>
    <div class="container row">
      <Card v-for="post in posts" :key="post.id" :post="post" class="ml-auto mr-auto" />
    </div>
    <!-- <pre>
      {{posts}}
    </pre> -->
  </div>
</template>


// export default{
//   asyncData(context)
// {
//   console.log(context)
// }}
// </script>


 <script>
 import axios from 'axios'
 import Card from '@/components/Card'

	export default {
		components: {
			Card
		},
		data() {
			return {
				posts: []
			}
		},
		// async asyncData() {
		// 	let {data} =  await axios.get('https://jsonplaceholder.typicode.com/posts')
		// 	return {posts: data}
		// },


    async asyncData({ $axios}) {
    let  {data}  = await $axios.$get(`/post/`)
    return {posts: data}
  },
		head: {
			title: 'Lista dei feedback'
		}
	}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Volkhov&display=swap');
h1{
  font-family: 'Volkhov', serif;
}
</style>
