<template>
<div class="right-side">

<ul>
   
        <li v-for="add in addsr" :key="add.id">
          <a :href="add.url" target="_blank"><img :src="getImageUrl(add.image)" alt="Ad Image"></a>
        </li>
   
</ul>
</div>	
</template>

<script>
export default {
  data() {
    return {
      addsr: []
    };
  },
  mounted() {
    this.fetchAdds();
  },
  methods: {
    fetchAdds() {
      const position = 'right'; // Replace with the actual position
      fetch(`http://localhost:8000/api/leftbanner/${position}`)
        .then(response => response.json())
        .then(data => {
          this.addsr = data;
        })
        .catch(error => {
          console.error('Error fetching adds:', error);
        });
    },
    getImageUrl(imageName) {
      return `http://ypnepal.com/uploads/adds/${imageName}`;
    }
  }
};
</script>

<style>

</style>