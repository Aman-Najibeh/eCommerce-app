<template>
    <v-card data-aos="zoom-in-up" class=" w-100 h-100" color="info" >

        <v-row>
            <v-col class="text-center mt-16">
                <v-avatar color="grey-darken-3 " size="80"
                       image="../assets/undraw_coding_re_iv62.svg"></v-avatar> 
            </v-col>
        </v-row>
        <v-card-text class=" py-5 text-center text-h6">
            {{ title }}
        </v-card-text>

        <v-card-actions>
            <v-list-item class="w-100">
                 <p class="text-subtitle-1  text-center text-black" >{{body}}</p>
               
            </v-list-item>
        </v-card-actions>
     <div class="text-center">
        <v-rating
       
        v-model="rating"
        color="white"
        active-color="yellow-accent-4"
        half-increments
        hover
        size="18"
      ></v-rating>
     </div>
    </v-card>
</template>
  
<script>
export default {
    props: {
        id: Number,
        name: String,
        location: String,
        body: String,
        avatar: String,
        title: String,
        lorem: String,
        rating: Number,
    },

   data() {
    return {
       rating: 4.5 
    }
   },
}
</script>