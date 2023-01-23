<template>
   
    <v-app>
        <!-- <nav-bar-section/> -->
        <dashboard-section/>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
import DashboardSection from '@/components/DashboardSection.vue'
// import NavBarSection from '@/components/NavBarSection.vue'

export default {
  components: { DashboardSection },
    setup() {
        
    },
}
</script>