<template>
  <div class="main-content">    
    <div class="main-category">
      <h4><img src="/frontend/images/bullet.jpg">Categories</h4>
      <div class="category-list"> 
        <div class="category" v-for="category in categories" :key="category.id">
          <ul class="home-categories">
            <li>
              <a href="" class="link" @click.prevent="fetchSubcategories(category.id)">{{ category.name }}</a>
              <p class="sub-category">
                <a v-for="subCategory in category.sub_categories" :key="subCategory.id" href="#" class="link">{{ subCategory.name }}</a> 
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="subcategory">
      <!-- Display dynamic data fetched from the server here -->
      {{ subcategoryData }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [], // Your categories data
      subcategoryData: '' // Holds the fetched subcategory data
    };
  },
  methods: {
    fetchSubcategories(categoryId) {
      // Make an AJAX request to fetch dynamic data based on the category ID
      // Replace the URL with the appropriate endpoint that returns subcategory data for the given category ID
      fetch(`/category/view/${categoryId}`)
        .then(response => response.json())
        .then(data => {
          // Assuming the response is JSON containing subcategory data
          this.subcategoryData = data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }
};
</script>

<style>
/* Your CSS styles here */
</style>
