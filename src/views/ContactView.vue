<template>
 <nav-bar-section></nav-bar-section>    
 <hero-section></hero-section>
 <contact-form></contact-form>
 <GoogleMap
  api-key="hhhhh"
  style="width: 90%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>

</template>

<script >
import HeroSection from '@/components/HeroSection.vue';
import NavBarSection from '@/components/NavBarSection.vue';
import ContactForm from '@/components/ContactForm.vue';
// import { defineComponent } from 'vue'
import { GoogleMap} from 'vue3-google-map'
export default {
  components: { HeroSection,  NavBarSection, ContactForm,GoogleMap},
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 }
    return { center }
  },
}
</script>
