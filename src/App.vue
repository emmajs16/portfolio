<template>
<v-app>
    <v-app-bar app color="primary" dark>
        <div class="d-flex align-center"  @click="$router.push({ path: '/' })">
            <h1>ES</h1>
        </div>

        <v-spacer></v-spacer>
        <v-btn icon @click="$router.push({ path: 'About' })">
            <v-icon>mdi-clipboard-account</v-icon>
        </v-btn>
        <v-btn icon @click="$router.push({ path: 'Projects' })">
            <v-icon>mdi-bookmark</v-icon>
        </v-btn>
        <v-btn icon @click="$router.push({ path: 'Contact' })">
            <v-icon>mdi-email</v-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
        <router-view />
    </v-main>
</v-app>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        //
    }),
};
</script>
<style>
/* .v-btn{
    background-color: pink !important;
} */
</style>
