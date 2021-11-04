<template>
  <!-- <hello-world /> -->
  <v-container>
    <v-row class="text-center">
        <v-col>
        <h1>Emma Stoverink</h1>
        <v-btn
      color="primary"
      elevation="6"
      raised
      rounded
      @click="$router.push({ path: 'About' })"
    >about</v-btn>
    <v-btn
  color="primary"
  elevation="6"
  raised
  rounded
  @click="$router.push({ path:'Projects' })"
>portfolio</v-btn>
<v-btn
color="primary"
elevation="6"
raised
rounded
@click="$router.push({ path: 'Contact' })"
>contact</v-btn>
    </v-col>
    <v-col>
        <v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  src="https://picsum.photos/id/11/500/300"
></v-img>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    // components: {
    //   HelloWorld,
    // },
  }
</script>
