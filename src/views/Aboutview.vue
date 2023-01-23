<template>
 <nav-bar-section></nav-bar-section>    
 <hero-section></hero-section>
 <tecnologe-section></tecnologe-section>
 <our-team-section></our-team-section>
 <our-projects></our-projects>
 
</template>

<script >
import HeroSection from '@/components/HeroSection.vue';
// import FeaturesSection from '@/components/featuresSection.vue';
import OurTeamSection from '@/components/OurTeamSection.vue';
// import TestimonialSection from '@/components/TestimonialSection.vue';
import NavBarSection from '@/components/NavBarSection.vue';
import TecnologeSection from '@/components/TecnologeSection.vue';
import OurProjects from '@/components/OurProjects.vue';
export default {
  components: { HeroSection, OurTeamSection, NavBarSection, TecnologeSection, OurProjects },
}
 
</script>
