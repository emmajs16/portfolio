<template>
  <v-container class="contact">
      <h1>Reach out</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <v-list rounded>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
      <v-list-item>
          <v-list-item-icon><v-icon x-large>mdi-email-send</v-icon></v-list-item-icon>
          <v-list-item-content> <v-list-item-title>Email</v-list-item-title></v-list-item-content>
      </v-list-item>
      <v-list-item>
          <v-list-item-icon><v-icon x-large>mdi-linkedin</v-icon></v-list-item-icon>
          <v-list-item-content> <v-list-item-title >LinkedIn</v-list-item-title></v-list-item-content>
      </v-list-item>
      <v-list-item>
          <v-list-item-icon><v-icon x-large>mdi-github</v-icon></v-list-item-icon>
          <v-list-item-content> <v-list-item-title >Github</v-list-item-title></v-list-item-content>
      </v-list-item>
      <v-list-item>
          <v-list-item-icon><v-icon x-large>mdi-twitter</v-icon></v-list-item-icon>
          <v-list-item-content> <v-list-item-title >Twitter</v-list-item-title></v-list-item-content>
      </v-list-item>
      </v-list-item-group>
  </v-list>
</v-container>
</template>
<script>

export default {
    name: 'Contact',
}
</script>
