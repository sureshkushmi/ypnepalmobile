<template>
  <div>
    <headerView></headerView>
    <div class="container" id="content">
      <div class="wrapper">
        <section class="top-container">
          <LeftContentView></LeftContentView>
          <div class="middle-side" id="middle-side">
            <div class="col main-content">
                <h3>{{ listing.name }}</h3>
                <h5>Total Views<i class="fa fa-eye"></i>  : <strong>{{ listing.visited }}</strong></h5>
                <div class="addthis_native_toolbox"></div>
                <div class="row" v-if="listing.image && listing.image !== ''">
                    <a :href="'http://ypnepal.com/uploads/listing/' + listing.image" data-lightbox="images" :data-title="listing.name" class="link-preview" title="Preview">
                        <img :src="'http://ypnepal.com/uploads/listing/' + listing.image" class="img img-responsive" style="max-width: 400px;"></a>
                </div>
                <table class="table">
                    <tr>
                        <td>Listing Name</td>
                        <td><span>:</span> <b class="listname">{{ listing.name }}</b></td>
                    </tr>
                    <tr v-if="listing.description">
                        <td>Description</td>
                        <td><span>:</span> {{ listing.description }}</td>
                    </tr>
                    <tr>
                        <td>Address<i class="fa fa-location-arrow"></i></td>
                        <td><span>:</span> {{ listing.add1 }}</td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td><span>:</span> {{ listing.city }}</td>
                    </tr>
                    <tr v-if="listing.phone1">
                        <td>Phone <i class="fa fa-phone"></i></td>
                        <td> {{ listing.phone1 }}</td>
                    </tr>
                    <tr v-if="listing.phone2">
                        <td>Mobile <i class="fa fa-mobile"></i></td>
                        <td> {{ listing.phone2 }}</td>
                    </tr>
                    <tr v-if="listing.fax">
                        <td>Fax</td>
                        <td><span>:</span> {{ listing.fax }}</td>
                    </tr>
                    <tr v-if="listing.email">
                        <td>Email <i class="fa fa-envelope"></i></td>
                        <td ><a :href="'mailto:' + listing.email" style="color:#D80726">{{ listing.email }}</a></td>
                    </tr>
                    <tr v-if="listing.url">
                        <td>Website <i class="fa fa-globe"></i></td>
                        <td ><span>:</span> <a :href="'http://' + listing.url" target="_blank">{{ listing.url }}</a></td>
                    </tr>
                </table>
            </div>
            <div class="col">
                <div id="map" style="margin: 20px; padding: 20px;width:90%;height:324px;"></div>
            </div>
            <div style="color:#D80726">Related Category:
                <div v-for="(c, index) in listing.category" :key="index">
                    <a :href="BASE + '/subcategory/' + c[0]" class="link">{{ c[1] }}</a>
                </div>
            </div> 
            <!-- Go to www.addthis.com/dashboard to customize your tools -->
           
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
    FooterView,
    LeftContentView,
    RightContentView
  },
  name: 'ListingView',
  data() {
    return {
      listing: {},
      BASE: window.location.origin // Using the current origin as the base URL
    }
  },
  mounted() {
    const listingId = this.$route.params.id;
    this.fetchListing(listingId);
  },
  methods: {
    fetchListing(listingid) {
      const url = `http://localhost:8000/api/listings/${listingid}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          //console.log('Fetched data:', data);
          this.listing = data;
        })
        .catch(error => {
          console.error('Error fetching listing data:', error);
        });
    },

  },
}

</script>
<style>
table {
  font-size: 13px;
  font-family: sans-serif;
}
table thead {
  font-weight: bold;
  font-size: 14px;
}
.table td {
  padding: 0.40rem;
}
</style>
