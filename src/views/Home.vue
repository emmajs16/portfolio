<template>
<!-- <hello-world /> -->
<v-container class="justify-center d-flex">
    <v-row class="align-center">
        <v-col class = "d-flex buttons" align="center"
      justify="center">
            <!-- <v-spacer> -->
            <h1>Emma Stoverink</h1>
<div >
            <v-btn class = "d-block my-3" x-large color="primary" elevation="6" raised block rounded @click="$router.push({ path: 'About' })">about</v-btn>
            <v-btn  class = "d-block my-3" x-large color="primary" elevation="6" raised block rounded @click="$router.push({ path:'Projects' })">portfolio</v-btn>
            <v-btn class = "d-block my-3" x-large color="primary" elevation="6" raised block rounded @click="$router.push({ path: 'Contact' })">contact</v-btn>
</div>
<!-- </v-spacer>/ -->
</v-col>
<v-col>
            <v-img class ="img"  cover lazy-src="https://picsum.photos/id/11/10/6" src="../assets/portrait.jpg"></v-img>
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
<style scoped>
.img {
border-radius: 50%;
height: 350px;
width: 350px;
border: 10px solid #84A59D;
margin: 15px;
box-shadow: 5px 5px 5px grey;
}

.buttons{
    display: flex;
    flex-direction: column;
}

</style>
