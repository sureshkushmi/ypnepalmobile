<template>
	<headerView></headerView>
	<div class="container" id="content">
		<div class="wrapper">
<section class="top-container">
<LeftContentView></LeftContentView>
<MiddleContentView></MiddleContentView>
<RightContentView></RightContentView>
</section>
</div>
		</div>			
	<FooterView></FooterView>			
</template>

<script>
import HeaderView from './pages/HeaderView.vue'
import LeftContentView from './pages/LeftContentView.vue'
import MiddleContentView from './pages/MiddleContentView.vue'
import RightContentView from './pages/RightContentView.vue'
import FooterView from './pages/FooterView.vue'
export default {
components:{HeaderView,FooterView,LeftContentView,MiddleContentView,RightContentView},
name:'Master',
}
</script>

<style>

</style>