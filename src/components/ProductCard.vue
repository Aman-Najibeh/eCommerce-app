<template>
    
        <v-card :loading="loading" class="mx-auto my-12 cardstyle " max-width="374" color="info">
            <template v-slot:loader="{ isActive }">
                <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
            </template>
            <v-img  height="250" width="100%" :src="thumbnail" class="w-100" cover></v-img>
            <v-card-item>
                <v-card-title>{{ title }}</v-card-title>
                <v-card-subtitle>
                    <span class="mr-1">{{ category }}</span>
                    <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                </v-card-subtitle>
            </v-card-item>
            <v-card-text class=" mb-0 pb-0">
                <v-row align="center" class="mx-0">
                    <!-- <v-rating model-value="4.5" color="amber" density="compact" half-increments readonly
                        size="small"></v-rating>
                    <div class="text-grey ms-4 ">
                        {{ rating }}
                    </div> -->
                </v-row>
                <div class="mt-4 text-subtitle-1">
                    $ • {{ price }}
                </div>
            </v-card-text>
            <!-- <slot></slot> -->
            <v-card-actions mt="0" pt="0">
                <v-btn class="cartcolor" variant="text">
                    <slot></slot>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                        {{ description }}
                    </v-card-text>
                </div>
            </v-expand-transition>
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
        thumbnail:String,
        // rating: Object
    }

}
</script>

<style>
.cardstyle:hover{
    -webkit-box-shadow: 0px 0px 19px 0px rgba(10,10,9,1);
-moz-box-shadow: 0px 0px 19px 0px rgba(10,10,9,1);
box-shadow: 0px 0px 19px 0px rgba(10,10,9,1);
}
</style>