<template>

  <div id="list-complete-demo" class="demo">
    <h3>Filters:</h3>
    <v-btn v-on:click="filter('all')">All</v-btn>
    <v-btn v-on:click="filter('tag1')">Tag 1</v-btn>
    <v-btn v-on:click="filter('tag2')">Tag 2</v-btn>
    <v-container>
         <v-row no-gutters>
      <v-card
      :loading="loading"
    class="mx-auto my-12"
    max-width="374"
        v-for="item in filteredItems"
        v-bind:key="item.id"
        elevation="7"
      >
        <v-img :src="'http://placehold.it/450x200?text='+item.id" alt="" />
        <v-card-title>{{item.id}}</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-card-text>
        <v-btn
               text
             >
               Learn more
             </v-btn>
    </v-card>
</v-row>
</v-container>


  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data: () => ({

        items: [
          { id: 1, tags: ['all', 'tag1'] },
          { id: 2, tags: ['all', 'tag2'] },
          { id: 3, tags: ['all', 'tag2'] },
          { id: 4, tags: ['all', 'tag1'] },
          { id: 5, tags: ['all', 'tag1'] },
          { id: 6, tags: ['all', 'tag2'] },
          { id: 7, tags: ['all', 'tag1'] },
          { id: 8, tags: ['all', 'tag2'] },
          { id: 9, tags: ['all', 'tag2'] }
        ],
        currentTag: 'all'
        }),
      computed: {
        filteredItems: function() {
          var filter = this.currentTag;
          return this.items.filter(function(item) {
              return item.tags.indexOf(filter) !== -1;
          });
        }
      },
      methods: {
        filter: function(tag) {
          this.currentTag = tag;
        }
      }
  }
</script>
<style>

</style>
