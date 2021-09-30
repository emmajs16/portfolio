<template>
<div class="home">
    <div class="container-fluid d-flex justify-content-center flex-nowrap">
        <appNav></appNav>
        <div class="row">
            <div class="col">


                <h1>Emma Stoverink</h1>
                <p>Computer science student, creative problem solver, and ....</p>
                    <div class = "buttons">
                    <button type="button" class="btn">About</button>
                    <button type="button" class="btn">Projects</button>
                    <button type="button" class="btn">Contact</button>
                </div>

            </div>
            <div class="col">
                    <img src="../assets/portrait.jpg" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
    name: 'Home',
    components: {
        appNav: Nav
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../main.css';
</style>
