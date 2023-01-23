<template>
  <v-app-bar color="primary" >
    <template v-slot:prepend>
      <!-- <div class="text-h5">Title</div> -->
    </template>
    <v-toolbar-title><v-icon>mdi-shopping</v-icon> SHOP </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-list-item variant="text" exact to="/">Home</v-list-item>
      <v-list-item variant="text" exact to="/About">About</v-list-item>
      <v-list-item variant="text" exact to="/Contact">Contact</v-list-item>
      <v-list-item variant="text" exact to="/Products">Products</v-list-item>
      <!-- <v-list-item  variant="text" to="/cart">Cart</v-list-item>    -->
      <v-btn variant="text" to="/cart" v-if="isLoggedIn"> <v-badge color="red" floating
          :content="itemscount"><v-icon>mdi-cart</v-icon></v-badge></v-btn>
      <v-btn variant="text" to="/profile" stacked v-if="isLoggedIn">
        <v-img :src="userimage" class="w-50 h-50 rounded-circle ">{{ user.username }}</v-img>
      </v-btn>
      <v-btn variant="text" to="/login" stacked v-else>
        LOGIN
      </v-btn>
      <v-btn @click="logout" variant="text" to="/login" v-if="isLoggedIn" stacked>
        LOGOUT
      </v-btn>
     <change-theme-button/>
     <toggle-language-en-ar/>

    </v-toolbar-items>


    <!-- <v-app-bar-nav-icon class="ms-2"></v-app-bar-nav-icon> -->
  </v-app-bar>

</template>

<script>

import { mapActions, mapState } from 'pinia'
import { useCartStore } from '@/store/Cart'
import { useUserStore } from '@/store/User'
import ChangeThemeButton from './ChangeThemeButton.vue'
import ToggleLanguageEnAr from './ToggleLanguage-en-ar.vue'
export default {
  components: { ChangeThemeButton, ToggleLanguageEnAr },
  // data: () => ({
  //   userimg: this.user.user,
  // }),
 
  computed: {
    ...mapState(useCartStore, ['itemscount']),
    ...mapState(useUserStore, ['isLoggedIn', 'user']),
    userimage() {
      return this.user.image
    }
  },
  methods: {
    ...mapActions(useUserStore, ['logout']),

  },

}
</script>

<style>

</style>