<template>
  <section>
    <nav-bar-section></nav-bar-section>
    <hero-section></hero-section>
    <features-section></features-section>
    <testimonial-section></testimonial-section>
  </section>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import FeaturesSection from "@/components/featuresSection.vue";
// import OurTeamSection from '@/components/OurTeamSection.vue';
import TestimonialSection from "@/components/TestimonialSection.vue";
import NavBarSection from "@/components/NavBarSection.vue";
export default {
  components: { HeroSection, FeaturesSection, NavBarSection, TestimonialSection },
};
</script>
<style scoped>
* {
  margin: 0;
}
</style>
