<template>
  <section class="ma-16">
    <v-table 
    
    class="bg-success"  v-model:items-per-page="itemsPerPage">
          <thead>
      <tr class="bg-sucsess">
        <th class="text-center py-2">
          Id
        </th>
        <th class="text-left py-2">
          Title
        </th>
        <th class="text-left py-2">
          Price
        </th>
        <th class="text-left py-2">
          Percentage
        </th>
        <th class="text-left py-2">
          Rating
        </th>
        <th class="text-left py-2">
          Stock
        </th>
        <th class="text-left py-2">
          Brand
        </th>
        <th class="text-left py-2">
          Category
        </th>
        <th class="text-left py-2">
          EDIT 
        </th>
        <th class="text-left py-2">
          DELETE 
        </th>
        <!-- <th class="text-left py-2">
          thumbnail
        </th> -->
      </tr>
    </thead>
    
    <tbody>
      <tr
        class="bg-info"
        v-for="(product ,i) in this.ProductsStore"
        :key="product.id"
      >
      <td>{{ product.id }}</td>
      <td>{{ product.title }}</td>
      <!-- <td>{{ product.description }}</td> -->
      <td>{{ product.price }}</td>
      <td>{{ product.discountPercentage }}</td>
      <td>{{ product.rating }}</td>
      <td>{{ product.stock }}</td>
      <td>{{ product.brand }}</td>
      <td>{{ product.category }}</td>
      <td >
        <router-link to="/EditProduct">
        <v-icon class="ma-2"  @click="returnindexProductEdit(i)" >mdi-circle-edit-outline</v-icon>
        </router-link> </td>
      <td><v-icon class="ma-2" @click="RemoveProduct(i)">mdi-delete</v-icon></td>
      <!-- <td>{{ product.thumbnail }}</td> -->

        <v-divider></v-divider>
      </tr>
     

     
    </tbody>
  </v-table></section>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>

</template>

<script>

import { mapActions, mapState } from 'pinia'
import { useProductStore } from '@/store/Product'
// const store =useProductStore() 
  export default {
    data () {
      return {
        page: 1,

      }
    },
    computed:{
      ...mapState(useProductStore,['ProductsStore'])
    },
    methods: {
      ...mapActions(useProductStore,['RemoveProduct','returnindexProductEdit'])
    },
  }
</script>