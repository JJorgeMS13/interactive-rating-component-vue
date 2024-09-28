<template>
  <Rating/>
</template>

<script>
import Rating from './page/RatingPage.vue';

export default {
  name: 'App',
  components: {
    Rating, 
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Overpass:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,700;1,700&display=swap');
:root {
  font-size: 62.5%;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: "Overpass", sans-serif;
  font-size: 1.5rem;
  height: 100vh;
}
#app {
  height: 100vh;
}
</style>
