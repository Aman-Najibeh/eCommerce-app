<template>
    <v-card :loading="loading" class=" my-12" >
        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
        </template>

        <v-carousel>
            <v-carousel-item  :src="thumbnail" cover></v-carousel-item>
            <v-carousel-item :src="images[0]" cover></v-carousel-item>
            <v-carousel-item :src="images[1]" cover></v-carousel-item>
            <v-carousel-item :src="images[2]" cover></v-carousel-item>
            <v-carousel-item :src="images[3]" cover></v-carousel-item>

        </v-carousel>

        <v-card-item>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-subtitle>
                <span class="mr-1">{{ category }}</span>

                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
            <v-card-subtitle>
                <span class="mr-1"> brand:{{ brand }}</span>
            </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            <v-row align="center" class="mx-0">
                <!-- <v-rating :model-value="rating" color="amber" density="compact" half-increments readonly
                    size="small"></v-rating> -->

                <div class="text-grey ms-4">
                    4.5 (413)
                </div>

            </v-row>
            <div class="my-4 text-subtitle-1">
                discountPercentage:{{ discountPercentage }}
            </div>
            <div class="my-4 text-subtitle-1">
                $ • {{ price }}
            </div>

            <div>{{ description }}</div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <div class="px-4">
            <v-chip-group v-model="selection">
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
            </v-chip-group>
        </div>

        <v-card-actions>
            <v-btn color="#FBDF07" class="cartcolor" @click="AddToCart({id,title,price,description,category,thumbnail,rating,brand,discountPercentage})">
                <!-- :disabled="!isLoggedIn" -->
                <v-icon>mdi-cart-plus</v-icon> Add to cart</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'pinia'
import { useCartStore } from '@/store/Cart.js'
export default {

    data: () => ({
        show: false,
        loading: false,
        selection: 1,
    }),
    methods: {
        ...mapActions(useCartStore, ['AddToCart']),
        reserve() {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        },
    },
    props: {
        id: Number,
        title: String,
        price: Number,
        description: String,
        category: String,
        thumbnail: String,
        rating: Object,
        images: Array,
        brand: String,
        discountPercentage: Number
    }

}
</script>

<style>
.cardstyle:hover {
    -webkit-box-shadow: 0px 0px 19px 0px rgba(10,10,9,1);
-moz-box-shadow: 0px 0px 19px 0px rgba(10,10,9,1);
box-shadow: 0px 0px 19px 0px rgba(10,10,9,1);
}
</style>