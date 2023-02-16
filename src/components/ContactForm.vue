<template>
    <section  >
          <v-container  data-aos="fade-up">
              <p class="pcolor mt-16">Contact</p>
              <p class="text-center ma-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vitae, soluta inventore aspernatur quibusdam tempora hic labore beatae quod corrupti, nam est repudiandae quos voluptatum aliquam officia non sed doloribus, expedita esse excepturi suscipit! Explicabo aspernatur magnam debitis error? Possimus corporis doloribus eligendi hic, consequatur officiis magnam rem, quis eaque, voluptas harum asperiores repellendus laboriosam impedit sequi vel accusamus tempora!
              </p>
          </v-container>
      </section>
      
       
        <v-container jus class="my-6 text-center w-100">
           <div>
            <iframe width="800" height="400" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=800&cp=33.51391942394942~36.27754211425781&lvl=14&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
     </iframe>
</div>
        </v-container>
 
    <section class="ma-16">
        <v-row justify="center" align="center">
            <v-col cols="4">
                <v-card class="text-center w-100 ma-4" >
                    <v-card-title><v-icon>mdi-map-marker-circle</v-icon></v-card-title>
                    <v-card-subtitle>Our Address</v-card-subtitle>
                    <v-card-text>Damascus, Syria <br/> Opposite to Ibn Al-Nafis Hospital, section 42</v-card-text>
                </v-card>
                <v-card class="text-center w-100 ma-4" >
                    <v-card-title><v-icon>mdi-email-multiple-outline</v-icon></v-card-title>
                    <v-card-subtitle>Email Us</v-card-subtitle>
                    <v-card-text>Info@albarakah.net</v-card-text>
                </v-card>
                <v-card class="text-center w-100 ma-4" >
                    <v-card-title><v-icon>mdi-phone-incoming-outgoing</v-icon></v-card-title>
                    <v-card-subtitle>Call Us</v-card-subtitle>
                    <v-card-text>0991 086 666</v-card-text>
                </v-card>

            </v-col>
            <v-col justify="center " align="center">
                <v-card class="w-75 ma-8">
                    <!-- <v-card-text>
                        <h1 class="ma-4 text-xs-h6 text-md-h5 text-lg-h4">Contact Us</h1>
                    </v-card-text> -->
                    <v-form class="w-75 ma-8 pa-4">
                        <v-text-field v-model="phone" variant="filled" color="primary"
                            label="First Name"></v-text-field>
                        <v-text-field v-model="phone" variant="filled" color="primary" label="Last Name"></v-text-field>
                        <v-text-field v-model="email" variant="filled" color="primary" label="Email address"
                            type="email"></v-text-field>
                        <v-textarea counter label="Message" color="primary" :model-value="value"></v-textarea>
                        <v-btn color="#FBDF07" class="mr-4 w-100" to="/">
                            submit
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </section>
    
</template>

<script>
export default {

}
</script>

<style>

</style>