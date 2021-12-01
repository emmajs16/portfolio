<template>
  <div class="about">
     <v-card
      class="d-flex flex-row my-6"
      flat
      tile
    >
<v-container class="justify-center d-flex">
    <v-row class="align-center">
        <v-col class = "d-flex buttons" align="center"
      justify="center">
            <v-spacer>
            <h1>Hi, I'm Emma Stoverink!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</v-spacer>
</v-col>
<v-col>
    <v-img
lazy-src="https://picsum.photos/id/11/10/6"
class ="img"
src="../assets/portrait.jpg"
></v-img>
    </v-col>
    </v-row>
</v-container>
    </v-card>
<v-container>
<h2>Experience</h2>

    <v-timeline
   align-top
   :dense="$vuetify.breakpoint.smAndDown"
 >
   <v-timeline-item
     v-for="(item, i) in items"
     :key="i"
     small
     fill-dot
   >
     <v-card
     >
       <v-card-title class="text-h6">
         {{item.company}}
       </v-card-title>
       <v-card-text class="white text--primary">
         <div v-for="(position, p) in item.positions"
          :key="p"><h3>{{position.title}}</h3><p>{{position.date}}</p></div>
       </v-card-text>
     </v-card>
   </v-timeline-item>
 </v-timeline>
</v-container>
<v-container class="skills">
    <h2>Skills</h2>
    <div class="row">
        <div class="col">
            <h3>Front-End</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Vue.js</li>
            </ul>
        </div>
        <div class="col">
            <h3>Back-End</h3>
            <ul>
                <li>Python</li>
                <li>Ruby</li>
                <li>Java</li>
                <li>SQL</li>
            </ul>
        </div>
        <div class="col">
            <h3>Design</h3>
            <ul>
                <li>Adobe InDesign</li>
                <li>Figma</li>
                <li>Canva</li>
                <li>Adobe Photoshop</li>
            </ul>
        </div>
        <div class="col">
            <h3>Productivity</h3>
            <ul>
                <li>Github</li>
                <li>Microsoft Office Suite</li>
                <li>Google Suite</li>
                <li>Trello</li>
                <li>Slack</li>
            </ul>
        </div>
    </div>
</v-container>


  </div>
</template>
<script>

export default {
    name: 'About',
    data: () => ({
      items: [
          {
              company: "The Walt Disney Company",
              positions:[{title:"Enterprise Technology Software Engineer Intern", date:"May 2021 - present"}]
          },
          {
              company: "Florida Southern College Office of Admissions",
              positions:[{title:"Southern Ambassador", date:"December 2018 - present"}]
          },
          {
          company: 'Kode With Klossy',
          positions:[{title:"Instructor Assistant", date:"June 2017 - August 2020"},{title:"Community Camp Instructor Assistant", date:"August 2020"}, {title:"Regional Club Facilitator", date:"November 2020- May 2021"},]
          },
        {
            company: "DICK's Sporting Goods",
            positions:[{title:"Corporate Software Engineer Intern", date:"June 2020 - July 2020"}]
        },

      ],
    }),
}
</script>
<style scoped>
.img {
border-radius: 50%;
height: 250px;
width: 250px;
border: 10px solid #84A59D;
margin: 15px;
box-shadow: 5px 5px 5px grey;
}
</style>
