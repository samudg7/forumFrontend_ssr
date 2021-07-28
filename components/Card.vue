<template>
  <div>
    <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Post: {{post.id}}</div>
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
        <h5 class="card-title">{{post.body}}</h5>
        <h5 class="card-title">{{post.name}}</h5>
        <h5 class="card-title">{{post.created_at}}</h5>

      </div>
    </div>
  </div>
</template>

<script>
	export default {
		props: {
			post: Object
		}
	}
</script>
