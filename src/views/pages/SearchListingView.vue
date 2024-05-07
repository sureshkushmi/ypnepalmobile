<template>
  <div>
    <HeaderView></HeaderView>
    <div class="container" id="content">
      <div class="wrapper">
        <section class="top-container">
          <LeftContentView></LeftContentView>
          <div class="middle-side" id="middle-side">
            <div class="col main-content">
              <!-- Render the listing data received through props -->
              <h3 v-if="listing">{{ listing.name }}</h3>
              <h5 v-if="listing">Total Views<i class="fa fa-eye"></i>  : <strong>{{ listing.visited }}</strong></h5>
              <div class="addthis_native_toolbox" v-if="listing"></div>
              <div class="row" v-if="listing && listing.image && listing.image !== ''">
                <a :href="'http://ypnepal.com/uploads/listing/' + listing.image" data-lightbox="images" :data-title="listing.name" class="link-preview" title="Preview">
                  <img :src="'http://ypnepal.com/uploads/listing/' + listing.image" class="img img-responsive" style="max-width: 400px;">
                </a>
              </div>
              <!-- Render other details of the listing -->
              <!-- Your existing code for rendering listing details -->
            </div>
            <!-- Other sections of the component -->
          </div>
          <RightContentView></RightContentView>
        </section>
      </div>
    </div>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
import LeftContentView from './LeftContentView.vue'
import RightContentView from './RightContentView.vue'
import FooterView from './FooterView.vue'

export default {
  components: {
    HeaderView,
    LeftContentView,
    RightContentView,
    FooterView
  },
  props: {
    // Define a prop to receive the listing data
    listing: Object
  }
}
</script>

<style>
  /* Your styles here */
</style>
