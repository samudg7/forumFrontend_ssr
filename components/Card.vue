<template>
  <div>
    <div class="card bg-light mb-3" style="max-width: 18rem;">
      <div class="card-header">Recensione: {{post.id}}</div>
      <div class="card-body">
         <p class="card-text">{{post.name}}</p>
        <h5 class="card-title">{{post.title}}</h5>
        <h5 class="card-subtitle mb-2 text-muted">{{post.created_at}}</h5>
        <p class="card-text">{{post.body}}</p>


       <button @click="destroy(post.id)" class="btn btn-outline-danger fa fa-trash fa-2x pull-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                    />
                  </svg>
       </button>
                <!-- </v-btn> -->
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		props: {
			post: Object
		},

    methods: {


    async destroy(id) {
        await this.$axios.$delete(`/post/${id}`)
         this.$router.push('/createPost')
         this.$router.push('/posts')

      }
      }
	}
</script>
