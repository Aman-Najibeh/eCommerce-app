<template>
    <section  >
          <v-container  data-aos="fade-up">
              <p class="pcolor mt-16">Contact</p>
              <p class="text-center ma-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vitae, soluta inventore aspernatur quibusdam tempora hic labore beatae quod corrupti, nam est repudiandae quos voluptatum aliquam officia non sed doloribus, expedita esse excepturi suscipit! Explicabo aspernatur magnam debitis error? Possimus corporis doloribus eligendi hic, consequatur officiis magnam rem, quis eaque, voluptas harum asperiores repellendus laboriosam impedit sequi vel accusamus tempora!
              </p>
          </v-container>
      </section>
      
       
        <v-container jus class="my-6 text-center w-100">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.3251693614684!2d36.29446617404161!3d33.50943756904865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e1fa18b952b7%3A0xdd0332d43b2c6e3c!2z2KzZhdi52YrYqSDYp9mE2KjYsdmD2Kkg2YTZhNiq2YbZhdmK2Kkg2KfZhNil2KzYqtmF2KfYudmK2Kk!5e0!3m2!1sar!2s!4v1674469667391!5m2!1sar!2s"
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
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