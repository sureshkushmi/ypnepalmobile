<template>
  <div>
    <headerView></headerView>
    <div class="container" id="content">
      <div class="wrapper">
        <section class="top-container">
          <LeftContentView></LeftContentView>
          <div class="main-content">
          <div class="subcategory">
            <h4><img src="/frontend/images/bullet.jpg">Listings under Subcategory</h4>  
            <div class="listing-items">
              <table class="table responsive">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Address</td>
                    <td>Views</td>
                  </tr>
                </thead>             
                <tbody>
                  <tr v-for="l in listings" :key="l.id">
              <td style="width: 50%;">
                <RouterLink :to="'/listing/' + l.id" class="link" style="color: #f44415;">{{ l.name }}</RouterLink>
             <!--<a :href="`${BASE}/listing/${l.id}`" class="link" style="color: #f44415;">{{ l.name }}</a>--></td>
              <td style="width: 40%;">{{ l.add1 }}</td>
              <td style="width: 10%;">{{ l.visited }}</td>
            </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
          <RightContentView></RightContentView>
        </section>
      </div>
    </div>
    <FooterView></FooterView>
  </div>
</template>


<script>
import HeaderView from './pages/HeaderView.vue'
import LeftContentView from './pages/LeftContentView.vue'
import RightContentView from './pages/RightContentView.vue'
import FooterView from './pages/FooterView.vue'

export default {
  components: {
    HeaderView,
    FooterView,
    LeftContentView,
    RightContentView
  },
  name: 'CategoryListingView',
  data() {
    return {
      subcategoryData: [],
      category: {},
      listings: [],
      BASE: 'http://localhost:5173' // Assuming this is your base URL
    }
  },
  created() {
    // Capture the route parameter using $route.params.id
    const subcategoryId = this.$route.params.id;
    // Call the fetchSubCategoriesId method passing the subcategory ID
    this.fetchSubCategoriesId(subcategoryId);
  },
  methods: {
    // Fetch listings for the given subcategory ID
    fetchSubCategoriesId(subcatid) {
      const url = `http://localhost:8000/api/category-listings/${subcatid}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched data:', data); // Log the fetched data
          // Assuming the response contains category and listings data
          this.category = data;
          //this.listings = data.listings;
          this.listings = data;
        })
        .catch(error => {
          console.error('Error fetching subcategory data:', error);
        });
    }
  }
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
