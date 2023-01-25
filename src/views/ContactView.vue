<template>
  <nav-bar-section></nav-bar-section>
  <hero-section></hero-section>
  <contact-form></contact-form>
  <section class="ma-6" >

  </section>

</template>

<script >
import HeroSection from '@/components/HeroSection.vue';
import NavBarSection from '@/components/NavBarSection.vue';
import ContactForm from '@/components/ContactForm.vue';
// import { defineComponent } from 'vue'
export default {
  components: { HeroSection, NavBarSection, ContactForm },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 }
    return { center }
  },
}
</script>
