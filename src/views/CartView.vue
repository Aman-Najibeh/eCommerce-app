<template>
<nav-bar-section/>  
<section>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="6" lg="4" xl="3" v-for="(item , i) in items " :key="item.id">
                    <product-card v-bind="item">
                        <v-btn @click="removecardfromcart(i)" variant="text" color="red"><v-icon>mdi-cart-remove</v-icon> remove</v-btn>
                    </product-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import { mapState } from 'pinia';
import { mapActions } from 'pinia';
import { useCartStore } from '@/store/Cart';
import NavBarSection from '@/components/NavBarSection.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
    components: { NavBarSection ,ProductCard },
    // data(){
    //    return{
    //     titems:this.items
    //    }
    // },
    computed:{
      ...mapState(useCartStore,['items'])
    },
    methods:{
        ...mapActions(useCartStore,['removecardfromcart'])
        // removecardfromcart(i)
        // {
        //    this.items.splice(i,1)
        // }
    }
}
</script>

<style>
section{
    background-color:#F1F6F5;
}
</style>