<template>
  <v-container>
    <v-row class="text-center">
        <v-col>
        <h1>Emma Stoverink</h1>
        <v-btn
      color="primary"
      elevation="6"
      raised
      rounded
    >about</v-btn>
    <v-btn
  color="primary"
  elevation="6"
  raised
  rounded
>portfolio</v-btn>
<v-btn
color="primary"
elevation="6"
raised
rounded
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
  export default {
    name: 'HelloWorld',

    data: () => ({
    }),
  }
</script>
