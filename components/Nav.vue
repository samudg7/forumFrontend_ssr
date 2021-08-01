<template>
	<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
	  <nuxt-link class="navbar-brand" to="/">Test Server Side Render App</nuxt-link>


	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav" >
	    <ul class="navbar-nav">
        <li class="nav-item active">
	        <nuxt-link to="/posts" class="nav-link">Lista feedback</nuxt-link>
	      </li>
        <li class="nav-item active">
	      	<nuxt-link to="/createPost" class="nav-link">Crea feedback</nuxt-link>
<!--          aggiungo i nuxt-link per far sembrare il caricamento come una spa-->
<!--          <a class="nav-link" href="/">Home</a>-->
	      </li>
	    </ul>
	  </div>
	</nav>
</template>
