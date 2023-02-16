<template>
  <v-card>
    <!-- <v-layout> -->
    <v-navigation-drawer class="bg-primary" permanent>
      <v-list color="info">
        <v-list-item
          class="btnhover"
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          to="/chartView"
        ></v-list-item>
        <v-list-item
          class="btnhover"
          prepend-icon="mdi-clipboard-list"
          title="Products List"
          to="/productlist"
        ></v-list-item>
        <v-list-item
          class="btnhover"
          prepend-icon="mdi-plus-thick"
          title="Add Product"
          to="/addProduct"
        ></v-list-item>
        <!-- <v-list-item
          class="btnhover"
          prepend-icon="mdi-circle-edit-outline"
          to="/editProduct"
          title="Edit Product"
        ></v-list-item> -->
        <v-list-item
          class="btnhover"
          prepend-icon="mdi-clipboard-list"
          title="users List"
          to="/UsersList"
        ></v-list-item>

        <v-list-item
          class="btnhover"
          prepend-icon="mdi-account-box"
          title="Account"
        ></v-list-item>
        <v-list-item
          class="btnhover"
          prepend-icon="mdi-gavel"
          title="Admin"
        ></v-list-item>
        <v-list-item
          class="btnhover"
          prepend-icon="mdi-home"
          title="Home"
          to="/"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="#FBDF07" to="/login"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- <v-main style="height:600px"></v-main> -->
    <!-- </v-layout> -->
  </v-card>
</template>

<script>
// import { mapActions } from 'pinia'
// import useUserStore from '@/store/User'

// export default {

//   methods:{
//     ...mapActions(useUserStore,['logout'])
//   }
// }
//
</script>

<style>
.btnhover:hover {
  color: #fbdf07;
}
</style>
