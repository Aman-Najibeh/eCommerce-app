<template>
    <section class="bg">
        <v-container>
            <p class="pcolor">Our Product</p>
        </v-container>
    </section>
    <section >
        <v-btn @click="productFilterValue('all')" class="ma-8 hoveryellocolor" color="#f2f2f3">All</v-btn>
        <v-btn @click="productFilterValue('smartphones')" class="ma-8 hoveryellocolor"  color="#f2f2f3">smartphones</v-btn>
        <v-btn @click="productFilterValue('laptops')" class="ma-8 hoveryellocolor"  color="#f2f2f3">laptops</v-btn>
        <v-btn @click="productFilterValue('fragrances')" class="ma-8 hoveryellocolor"  color="#f2f2f3">fragrances</v-btn>
        <v-btn @click="productFilterValue('skincare')" class="ma-8 hoveryellocolor" color="#f2f2f3" >skincare</v-btn>
        <v-btn @click="productFilterValue('groceries')" class="ma-8 hoveryellocolor"  color="#f2f2f3">groceries</v-btn>
        <v-btn @click="productFilterValue('home-decoration')" class="ma-8 hoveryellocolor"  color="#f2f2f3">home-decoration</v-btn>
        <v-text-field v-model.trim="searchvalue"  label="search" class="ma-8"></v-text-field>
    </section>
    <section>
        <v-container>       
            <v-row>
                <v-col cols="12" sm="6" md="6" lg="4" xl="3" v-for="product in filteredProducts" :key="product.id">
                    <product-card v-bind="product">
                        <v-btn @click="selectSingleProduct(product)" class="cartcolor " variant="text" color="#FBDF07"
                            to="/singleproduct">read more info </v-btn>
                        <v-card-actions>
                            <v-btn :disabled="!isLoggedIn" class="cartcolor" @click="AddToCart(product)" color="#FBDF07">
                                <!-- :disabled="!isLoggedIn"  -->
                                <v-icon >mdi-cart-plus</v-icon> Add to cart</v-btn>
                        </v-card-actions>
                    </product-card>
                </v-col>
            </v-row>
        </v-container>

    </section>
</template>

<script>
import ProductCard from './ProductCard.vue'
import { mapActions, mapState, mapStores, mapWritableState } from 'pinia'
import { useCartStore } from '@/store/Cart.js'
import { useProductStore } from '@/store/Product'
import { useUserStore } from '@/store/User'
export default {
    components: { ProductCard },  
    created() {
        this.loadProducts(),
            this.productFilterValue("all")
            // this.searchvalue=''
    },        
    data() {
        return {
            Products: this.ProductsStore,
            //searchvalue:this.searchvalue
        }
    },
    computed: {
        ...mapState(useUserStore, ['isLoggedIn']),
        ...mapStores(useProductStore),
        ...mapWritableState(useProductStore, ['searchvalue','productFilterValue', 'ProductsStore', 'filteredProducts', 'productFilterAll', 'productFilterlaptops', 'productFilterfragrances'])

    },
    
    methods: {
        ...mapActions(useCartStore, ['AddToCart']),
        ...mapActions(useProductStore, ['addProducttoStore', 'deletProductStore', 'selectSingleProduct']),
        loadProducts() {
            this.axios('https://dummyjson.com/products')
                .then(res => { this.addProducttoStore(res.data.products), console.log(res.data.products) })
            // console.log(this.res);
        },

    }
}
</script>

<style>
.hoveryellocolor:hover ,.hoveryellocolor:focus{
    color:#FBDF07;
    /* background-color: #FBDF07; */
}
</style>