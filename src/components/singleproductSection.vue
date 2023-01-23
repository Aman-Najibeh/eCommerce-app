<template>
  <nav-bar-section></nav-bar-section>
 
  <section>
      <v-container>
           <v-row>
               <v-col>
                   <single-productcard  v-bind="SingleProduct" >    
                       <v-btn class="cartcolor " variant="text" to="/singleproduct">read more info </v-btn>
                       <v-card-actions>
                       <v-btn class="cartcolor" @click="AddToCart(product)"  >
                           <!-- :disabled="!isLoggedIn" -->
                           <v-icon>mdi-cart-plus</v-icon> Add to cart</v-btn>
                       </v-card-actions>
                   </single-productcard>
               </v-col>
           </v-row>
       </v-container>
   
</section>

</template>

<script>
import NavBarSection from './NavBarSection.vue'
import SingleProductcard from './SingleProductcard.vue'
import {useProductStore} from '@/store/Product'
import { mapState } from 'pinia'

export default {
  components: { NavBarSection,SingleProductcard},
  computed:{
    ...mapState(useProductStore,['SingleProduct'])
  }

}
</script>

<style>

</style>