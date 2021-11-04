<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-card
      class="d-flex flex-row"
      flat
      tile
    >
    <h1>Hi, I'm Emma Stoverink!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="150"
  max-width="250"
  src="https://picsum.photos/id/11/500/300"
></v-img>
    </v-card>


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
 <div class="skills">
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
</div>


  </div>
</template>
<script>

export default {
    name: 'About',
    data: () => ({
      items: [
        {
        company: 'Kode With Klossy',
        positions:[{title:"job", date:"date"},{title:"job", date:"date"}]
        },
        {
            company: "DICK's Sporting Goods",
            positions:[{title:"job", date:"date"}]
        },
        {
            company: "The Walt Disney Company",
            positions:[{title:"job", date:"date"}]
        },
      ],
    }),
}
</script>
