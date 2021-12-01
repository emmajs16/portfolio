<template>

  <div id="list-complete-demo" class="demo">
    <h3>Filters:</h3>

    <v-btn class= "mx-2" v-on:click="filter('all')">All</v-btn>
    <v-btn class= "mx-2" v-on:click="filter('web development')">Web Development</v-btn>
    <v-btn class= "mx-2" v-on:click="filter('design')">Design</v-btn>

    <v-container>
         <v-row no-gutters>
      <v-card
      :loading="loading"
    class="mx-auto my-6"
    max-width="374"
        v-for="item in filteredItems"
        v-bind:key="item.id"
        elevation="7"
      >
        <v-img height="250" :src=item.image :alt="item.title" />
        <v-card-title>{{item.title}}</v-card-title>
        <v-card-text>
            <div class=" text-subtitle-1">
        {{item.year}}
      </div>
            <div class="">
                {{item.description}}
            </div>
        </v-card-text>
        <v-btn
               text block
             >
               Visit
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
          { title: "Stitched Together", tags: ['all','hackathon', 'web development', 'programming','html','javascript','css'], image: require("../assets/stitched.png"), year:"2020", description:"Stitched Together is an interactive website to connect underrepresented local entrepreneurs. This project was developed for the Technica Hackathon at University of Maryland with a small team.", link:"https://emmajs16.github.io/stiched-together/"  },
          { title: "PS Occassions", tags: ['all', 'web development','html','javascript','css'], image: require("@/assets/occassions.png"), year:"2019", description:"The PS Occassions website was designed and developed specifically for a client. I worked with the business to capture the brand and goals of the beginning company.", link:"https://emmajs16.github.io/ps-occasions/services.html"  },
          { title: "Compass", tags: ['all', 'web development','html','javascript','css', 'hackathon'], image: require("@/assets/compass.png"), year:"2018", description:"The goal of Compass is to help immigrants and refugees with the often difficult employment process, and Compass also provides easy-to-understand financial resources. This was developed at GlobalHack VI in St. Louis with a small team.", link:"https://emmajs16.github.io/compass/"  },
          { title: "Hourglass", tags: ['all', 'web development','html','javascript','css','vue','programming'], image: require("@/assets/hourglass.png"), year:"2020", description:"Hourglass works to help students organize their schedule and manage their time more efficiently. It was developed by a group for a software engineering class.", link:"https://google.com"  },
          { title: "Book Cover Redesign", tags: ['all', 'design'], image: require("@/assets/bookcover.png"), year:"2021", description: "The goal of this project was to apply the principles of design to a redesign of a book cover.", link: "https://drive.google.com/file/d/1gGZH_QQmbpMpJbhgzdhoA137nzotCpdH/view?usp=sharing"  },
          { title: "Expressive Typography Poster", tags: ['all', 'design'], image: require("@/assets/typography.png"), year:"2021", description: "With the expressive typography project, I worked through the design process to create a poster using typography to represent a nursery rhyme.", link: "https://drive.google.com/file/d/1wIPepBgkK7eYsibQ2IsRfCDEJxiIZw-5/view?usp=sharing"  },
          { title: "Influential Designer Report", tags: ['all', 'design'], image: require("@/assets/designer.png"), year:"2021", description: "With the expressive typography project, I worked through the design process to create a poster using typography to represent a nursery rhyme.", link: "https://drive.google.com/file/d/1wIPepBgkK7eYsibQ2IsRfCDEJxiIZw-5/view?usp=sharing"  },
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
