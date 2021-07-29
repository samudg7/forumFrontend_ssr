<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	  <nuxt-link class="navbar-brand" to="/posts">Test Server Side Render App</nuxt-link>


	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
      <v-spacer></v-spacer>
	  <div class="collapse navbar-collapse" id="navbarNav">
	    <ul class="navbar-nav">
        <li class="nav-item active">
	        <nuxt-link to="/posts" class="nav-link">Lista post</nuxt-link>
	      </li>
        <li class="nav-item active">
	      	<nuxt-link to="/createPost" class="nav-link">Crea post</nuxt-link>
<!--          aggiungo i nuxt-link per far sembrare il caricamento come una spa-->
<!--          <a class="nav-link" href="/">Home</a>-->
	      </li>
	    </ul>
	  </div>
	</nav>
</template>
