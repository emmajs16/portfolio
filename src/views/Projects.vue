<template>
  <div class="projects">
    <h1>This is a projects page</h1>
    <Gallery></Gallery>
  </div>
</template>
<script>
import Gallery from '../components/Gallery.vue'
export default {
    name: 'Projects',
    components: {
      Gallery,
    },
}
</script>
