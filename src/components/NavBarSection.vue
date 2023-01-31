<template>
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <!-- <div class="text-h5">Title</div> -->
    </template>
    <v-toolbar-title class="ycolor"
      ><v-icon class="ycolor">mdi-shopping</v-icon> SHOP
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-list-item variant="text" class="hoverlink" exact to="/">Home</v-list-item>
      <v-list-item variant="text" class="hoverlink" exact to="/about">About</v-list-item>
      <v-list-item variant="text" class="hoverlink" exact to="/contact"
        >Contact</v-list-item
      >
      <v-list-item variant="text" class="hoverlink" exact to="/products"
        >Products</v-list-item
      >
      <!-- <v-list-item  variant="text" to="/cart">Cart</v-list-item>    -->
      <v-btn variant="text" class="hoverlink" to="/cart" v-if="isLoggedIn">
        <v-badge color="red" floating :content="itemscount"
          ><v-icon>mdi-cart</v-icon></v-badge
        ></v-btn
      >
      <v-btn variant="text" class="hoverlink" to="/profile" stacked v-if="isLoggedIn">
        <v-img :src="userimage" class="w-50 h-50 rounded-circle">{{
          user.username
        }}</v-img>
      </v-btn>
      <v-btn variant="text" class="hoverlink" to="/login" stacked v-else> LOGIN </v-btn>
      <v-btn
        @click="logout"
        variant="text"
        class="hoverlink"
        to="/login"
        v-if="isLoggedIn"
        stacked
      >
        LOGOUT
      </v-btn>
      <change-theme-button class="hoverlink" />
      <toggle-language-en-ar class="hoverlink" />
    </v-toolbar-items>

    <!-- <v-app-bar-nav-icon class="ms-2"></v-app-bar-nav-icon> -->
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCartStore } from "@/store/Cart";
import { useUserStore } from "@/store/User";
import ChangeThemeButton from "./ChangeThemeButton.vue";
import ToggleLanguageEnAr from "./ToggleLanguage-en-ar.vue";
export default {
  components: { ChangeThemeButton, ToggleLanguageEnAr },
  // data: () => ({
  //   userimg: this.user.user,
  // }),

  computed: {
    ...mapState(useCartStore, ["itemscount"]),
    ...mapState(useUserStore, ["isLoggedIn", "user"]),
    userimage() {
      return this.user.image;
    },
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
  },
};
</script>

<style>
.ycolor,
.hoverlink:hover {
  color: #fbdf07;
}
</style>
