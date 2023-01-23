<template>
    <v-card data-aos="zoom-in-up" class="mx-auto" color="success"  max-width="400" prepend-icon="mdi-comma" :title="name">

        <v-card-text class=" py-2">
            {{ message }}
        </v-card-text>

        <v-card-actions>
            <v-list-item class="w-100">
                <template v-slot:prepend>
                    <v-avatar color="grey-darken-3"
                        :image="avatar"></v-avatar> 
                </template>
               <!-- /  <p class="text-subtitle-1">{{ location }}</p> -->
                 <p class="text-subtitle-1">{{designation}}</p>
                <!-- <v-list-item-title>{{ title }}</v-list-item-title> -->

                <!-- <v-list-item-subtitle>{{lorem}}</v-list-item-subtitle> -->

                <template v-slot:append>
                    <div class="justify-self-end">
                        <v-icon class="mr-1" icon="mdi-heart"></v-icon>
                        <span class="subheading mr-2">{{ rating }}</span>
                    </div>
                </template>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>
  
<script>
export default {
    props: {
        id: Number,
        name: String,
        location: String,
        designation: String,
        avatar: String,
        message: String,
        lorem: String,
        rating: Number,
    }

}
</script>