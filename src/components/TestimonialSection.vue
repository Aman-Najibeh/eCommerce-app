<template>
    <section class="ma-16 pa-16">
        <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <v-container>
                <p>Testimonial</p>
            </v-container>
        </section>
        <section>

            <div v-if="loading">
                <loading></loading>
            </div>
            <div v-else>
                <v-container>
                    <v-row justify="center">
                        <v-carousel cycle height="350" hide-delimiters show-arrows="hover" class="w-75 ma-16 ml-16 bg">
                            <v-carousel-item cols="12" sm="6" md="6" lg="4" xl="3" v-for="testimonial in testimonials "
                                :key="testimonial.id">
                                <testimonial-card v-bind="testimonial">
                                </testimonial-card>
                            </v-carousel-item>
                        </v-carousel>
                    </v-row>
                </v-container>
            </div>



        </section>
    </section>
</template>

<script>
import TestimonialCard from './testimonialCard.vue'
import loading from '@/components/loading.vue'
export default {

    components: { TestimonialCard, loading },

    data() {
        return {
            testimonials: [],
            loading: false,

        }
    },
    computed: {
    },
    created() {
        this.loadtestimonials()

    },
    methods: {
        loadtestimonials() {
            this.loading = true
            this.axios('https://jsonplaceholder.typicode.com/posts', { headers: { Authorization: undefined } })
                .then(res => { this.testimonials = res.data, this.loading = false })

            console.log(this.res);
        },
    }
}
</script>
<style scoped>
p {
    text-align: center;
    font-size: 3rem;
    color: #fbdf07;
}
</style>