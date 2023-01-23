<template>
    <section class="ma-16">
        <v-form  class="w-75 ma-8">
            <v-text-field v-model="currntproductedit.id" required label="id"></v-text-field>
            <v-text-field v-model="currntproductedit.title" required label="title"></v-text-field>
            <v-text-field v-model="currntproductedit.description" required label="description"></v-text-field>
            <v-text-field v-model="currntproductedit.price" required label="price"></v-text-field>
            <v-text-field v-model="currntproductedit.discountPercentage" required label="discountPercentage"></v-text-field>
            <v-text-field v-model="currntproductedit.rating" required label="rating"></v-text-field>
            <v-text-field v-model="currntproductedit.stock" required label="stock"></v-text-field>
            <v-text-field v-model="currntproductedit.brand" required label="brand"></v-text-field>
            <!-- <v-text-field v-model="newproduct.category" required label="category"></v-text-field> -->
            <v-select label="category" v-model="currntproductedit.category"
                :items="['smartphones', 'laptops', 'fragrances', 'skincare', 'home-decoration', 'groceries']"></v-select>
            <v-text-field v-model="currntproductedit.thumbnail" required label="thumbnail"></v-text-field>
            <v-btn @click.prevent="AddEditProductToProducts()" to="/productlist" class="mt-2 bg-success">OK
                <v-overlay activator="parent" location-strategy="connected" scroll-strategy="block" >
                    <v-card class="pa-2">
                     DONE ♥
                    </v-card>
                </v-overlay>
            </v-btn>
            <slot></slot>
        </v-form>
    </section>
</template>

<script>

import { mapActions, mapState } from 'pinia'
import { useProductStore } from '@/store/Product'
// const store =useProductStore() 
export default {
    data() {
        return {
            //
        }
    },
    computed: {
        ...mapState(useProductStore, ['ProductsStore','currntproductedit'])
    },
    methods: {
        ...mapActions(useProductStore, ['AddProduct','EditProduct','AddEditProductToProducts'])
    },
}
</script>

