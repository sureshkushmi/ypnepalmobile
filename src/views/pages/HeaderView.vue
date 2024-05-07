<template>
	<div class="main">
	  <div class="top-header">
		<div class="container">
		  <div class="row">
			<div class="col-sm-4 col-md-6 overflow-hidden">                            
			  <i class="fa fa-phone" style="margin: 0 10px;font-size: 1.5em;"></i><a href="tel:+015439170" style="border-color: white; display: inline; font-size: 1em; padding: 0;">01-5439170</a>,
			  <a href="tel:+015420354" style="border-color: white; display: inline; font-size: 1em; padding: 0;">01-5420354</a>
			  <a href="https://www.facebook.com/GlobalBizYellowPages" target="_blank" style="border-bottom:0px;"><i class="fa fa-facebook fa-2x" style="margin: 0 10px;"></i></a>
			  <i class="fa fa-envelope" style="margin: 0 5px;"></i>info@ypnepal.com
			</div>
			<div class="col-md-6 col-sm-8 float-right">
			  <div class="search-container animated fadeInUp">                            
				<input type="text"  v-model="searchQuery" @keyup="searchUsers" placeholder="Search for" id="search">  <i class="fa fa-search" style="color:rgba(255,255,255,0.7);margin-left: 5px;"></i>  
				<div class="spinner d-none">
				  <div class="bounce1"></div>
				  <div class="bounce2"></div>
				  <div class="bounce3"></div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>     
	  <div class="container">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <a class="navbar-brand" href=""><img src="/frontend/images/logo.jpg" class="d-inline-block" > </a>
		  <a class="navbar-brand" href="https://ypnepal.com.np/book" target="_blank"><img src="/frontend/images/ebook.png" class="d-inline-block" > </a>
  
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
  
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
			  <li class="nav-item active">
				<RouterLink to="/" class="nav-link">Home</RouterLink>
			  </li>
			  <li class="nav-item">
				<RouterLink to="/about" class="nav-link">About</RouterLink>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="https://ypnepal.com.np/book/free-listing">Request Listing</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="https://ypnepal.com.np/book/new-arrival" id="arrival">New Arrival</a>
			  </li>
			  <li class="nav-item">
				<RouterLink to="/contact" class="nav-link">Contact Us</RouterLink>
			  </li>
			  <li style="padding-top:8px;">
				<a href="https://www.ypnepal.com.np/" target="_blank" style="color:white;">Profile</a>
			  </li>
			</ul>
		  </div>
		</nav>
	  </div>
	  <!-- Navigation -->
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		searchQuery: '',
		users: []
	  };
	},
	methods: {
	  searchUsers() {
		fetch(`http://localhost:8000/api/listings/search/${this.searchQuery}`)
		  .then(response => {
			if (!response.ok) {
			  throw new Error('Network response was not ok');
			}
			return response.json();
		  })
		  .then(data => {
			this.users = data;
		  })
		  .catch(error => {
			console.error('Error searching users:', error);
		  });
	  }
	}
  };
  </script>
  
  <style>
	/* Your styles here */
  </style>
  