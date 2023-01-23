<template>
    <section class="ma-16">
        <v-row>
        <v-col justify="center " align="center">
            <v-card class="w-50 ma-8">
                <v-card-text>
                    <h1 class="ma-4 text-xs-h6 text-md-h5 text-lg-h4">Contact Us</h1>
                </v-card-text>
                <v-form class="w-75 ma-8">
                    <v-text-field v-model="phone" variant="filled" color="primary" label="First Name"></v-text-field>
                    <v-text-field v-model="phone" variant="filled" color="primary" label="Last Name"></v-text-field>
                    <v-text-field v-model="email" variant="filled" color="primary" label="Email address"
                        type="email"></v-text-field>
                    <v-textarea counter label="Message"  color="primary" :model-value="value"></v-textarea>
                    <v-btn color="primary" class="mr-4 w-100" to="/">
                        submit
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
    </section>
    <section class="my-16 pa-16  bg-blue-grey-lighten-4">
        <div>
            <h1 class="text-h4 text-center mb-2">Also, you can visit us through the location </h1>
            <p class="text-h5 text-center">Damascus, Syria </p>
            <p class="text-h5 text-center">Opposite to Ibn Al-Nafis Hospital, section 42</p>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>