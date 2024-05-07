<!-- resources/js/components/AddList.vue -->

<template>
        <div class="left-side">
            <ul>
                <div v-for="add in adds" :key="add.id">
                    <li><a :href="add.url" class="link" target="_blank" >
                    <img :src="getImageUrl(add.image)" alt="Ad Image" /></a></li>
                </div>

            </ul>
        </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        adds: []
      };
    },
    mounted() {
      this.fetchAdds();
    },
    methods: {
      fetchAdds() {
        const position = 'left'; // Replace with the actual position
        fetch(`http://localhost:8000/api/leftbanner/${position}`)
          .then(response => response.json())
          .then(data => {
            this.adds = data;
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
  