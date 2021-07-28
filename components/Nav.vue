<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	  <a class="navbar-brand" href="#">Test Server Side Render App</a>


	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
	    <ul class="navbar-nav">
        <li class="nav-item active">
	        <nuxt-link to="/posts" class="nav-link">Lista post</nuxt-link>
	      </li>
        <li class="nav-item active">
	      	<nuxt-link to="/" class="nav-link">Crea post</nuxt-link>
<!--          aggiungo i nuxt-link per far sembrare il caricamento come una spa-->
<!--          <a class="nav-link" href="/">Home</a>-->
	      </li>
	    </ul>
	  </div>
	</nav>
</template>
