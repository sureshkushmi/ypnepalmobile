<script setup lang="ts">
import HeaderView from './pages/HeaderView.vue'
import HeaderNavView from './pages/HeaderNavView.vue'
import TestimonialsSlider from './pages/TestimonialsSlider.vue'
import FooterView from './pages/FooterView.vue'
</script>

<template>
  	<header></header>			
	<HeaderNavView></HeaderNavView>
		
		<div class="main-container">
      <section class="pure-text-centered">
				<div class="container">
					<div class="row">
						<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
							
							<h1><strong>Testimonials</strong></h1>
							<p class="lead">
								This is testimonials</p>
						</div>
					</div>
		
				</div>
			</section>
		</div>
		<FooterView></FooterView>	
</template>

