<template>
  <div class="middle-side" id="middle-side">
    <div class="search-alphabet">
      <img src="/frontend/images/search_alphabet.jpg">
      <div class="alpha">
        <ul>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('a')">A</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('b')">B</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('c')">C</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('d')">D</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('e')">E</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('f')">F</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('g')">G</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('h')">H</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('i')">I</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('j')">J</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('k')">K</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('l')">L</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('m')">M</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('n')">N</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('o')">O</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('p')">P</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('q')">Q</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('r')">R</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('s')">S</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('t')">T</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('u')">U</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('v')">V</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('w')">W</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('x')">X</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('y')">Y</a></li>
                        <li><a href="#" class="alpha-link link" @click.prevent="fetchCategoriesAlpha('z')">Z</a></li>
         
        </ul>
      </div>
    </div>
    <div style="margin-top:20px">
      <img src="/frontend/images/arrow.jpg">
    </div>
    <div v-if="!showSubcategories && categories.length > 0">
    <div class="main-content">    
      <div class="main-category">
        <h4><img src="/frontend/images/bullet.jpg">Categories</h4>
        <div class="category-list"> 

            <div v-for="category in categories" :key="category.id" class="category">
              <ul class="home-categories">
                <li>
                  <a href="#"  @click.prevent="fetchCategoriesId(category.id)" class="link">{{ category.name }}</a>
                  <p class="sub-category">
                    <a v-for="subCategory in category.sub_categories" :key="subCategory.id" href="/subcategory/id" class="link">{{ subCategory.name }}</a> 
                  </p>
                </li>
              </ul>
            </div>
        </div>
      </div>

      <div class="featured">
        <h4><img src="/frontend/images/bullet.jpg"> Featured Listing</h4>
        <div class="featured-list"> 
          <template v-for="listing in featuredListings" :key="listing.id">
            <div class="feature-items">                                
              <ul class="home-listings">
                <li>
                  <a :href="'/frontend/listing/' + listing.id" class="link">{{ listing.name }}<span class="badge" style="margin-left: 2px;background: #ccc;color:#345;">visited</span></a>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>

      <div class="recent">
        <h4><img src="/frontend/images/bullet.jpg"> Recent Listing</h4>
        <div class="recent-list"> 
          <template v-for="listing in recentListings" :key="listing.id">
            <div class="recent-items">
              <ul class="home-listings">
                <li>
                  <a :href="'/frontend/listing/' + listing.id" class="link">{{ listing.name }}<span class="badge" style="margin-left: 2px;color:#979090;">{{ listing.date }}</span></a>
                </li>
              </ul>  
            </div>
          </template>
        </div>
      </div>
    
    </div> 
  </div>

              
              <div class="main-content" v-else>
                  <div class="subcategory">
                    <h4><img src="/frontend/images/bullet.jpg">Categories</h4> 
                    <div class="subcategory-list">
                     
                <div v-for="subcategory in subcategoryData" :key="subcategory.id" class="subcategory-items">
                  <img src="/frontend/images/bullet.jpg" style="margin-right: 2px;">
                  <RouterLink :to="'/CategoryListingView/' + subcategory.id" class="link">{{ subcategory.name }}
                    <span class="badge" style="margin-left: 2px;background: #ccc;color:#345;">{{subcategory.no}}</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      featuredListings: [],
      recentListings: [],
      subcategoryData: [], // New property to store subcategory data
      showSubcategories: false, // Flag to indicate whether to display categories or subcategories
      listingData: '', // New property to store subcategory data
     };
  },
  mounted() {
    this.fetchCategories();
    this.fetchFeaturedListings();
    this.fetchRecentListings();
  },
  methods: {
   // ================Fetch Listing from SubCategory===========================
   fetchSubCategoriesId(subcatid) {
    // Construct the URL with the letter parameter
    const url = `http://localhost:8000/api/category-listings/${subcatid}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Assuming the response contains subcategory data
            this.subcategoryData = data;
            this.showSubcategories = true; // Update the flag to display subcategories
        })
        .catch(error => {
            console.error('Error fetching subcategory data:', error);
        });
},

    fetchCategoriesId(catid) {
    // Construct the URL with the letter parameter
    const url = `http://localhost:8000/api/categorybyid-listings/${catid}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Assuming the response contains subcategory data
            this.subcategoryData = data;
            this.showSubcategories = true; // Update the flag to display subcategories
        })
        .catch(error => {
            console.error('Error fetching subcategory data:', error);
        });
},

    fetchCategoriesAlpha(letter) {
    // Construct the URL with the letter parameter
    const url = `http://localhost:8000/api/alpha-listings/${letter}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Assuming the response contains subcategory data
            this.subcategoryData = data;
            this.showSubcategories = true; // Update the flag to display subcategories
        })
        .catch(error => {
            console.error('Error fetching subcategory data:', error);
        });
},

    fetchCategories() {
      fetch('http://localhost:8000/api/categories')
        .then(response => response.json())
        .then(data => {
          this.categories = data;
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    },
    fetchFeaturedListings() {
      fetch('http://localhost:8000/api/featured-listings')
        .then(response => response.json())
        .then(data => {
          this.featuredListings = data;
        })
        .catch(error => {
          console.error('Error fetching featured listings:', error);
        });
    },
    fetchRecentListings() {
      fetch('http://localhost:8000/api/recent-listings')
        .then(response => response.json())
        .then(data => {
          this.recentListings = data;
        })
        .catch(error => {
          console.error('Error fetching recent listings:', error);
        });
    }
  }
};
</script>

<style>
/* Your styles here */
</style>
