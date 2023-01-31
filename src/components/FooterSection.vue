<template>
  <!-- <v-footer 
    dark
    padless
  > -->
  <v-card color="success" class="lighten-1 white--text text-center w-100">
    <v-card-text>
      <v-btn
        class="white--text rounded-circle ma-4 hoverlink"
        size="34px"
        href="https://www.linkedin.com/in/aman-najibeh-9a17b6201/"
        target="_blank"
      >
        <v-icon size="24px">mdi-linkedin</v-icon>
      </v-btn>
      <v-btn class="white--text rounded-circle ma-4 hoverlink" size="34px">
        <v-icon size="24px">mdi-facebook</v-icon>
      </v-btn>

      <v-btn
        class="white--text rounded-circle ma-4 hoverlink"
        size="34px"
        href="https://github.com/Aman-Najibeh"
        target="_blank"
      >
        <v-icon size="24px">mdi-github</v-icon>
      </v-btn>
    </v-card-text>

    <v-card-text class="white--text pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus
      commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed
      at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et
      faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
      cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel
      ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus.
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="colorlink">
      {{ new Date().getFullYear() }} —
      <router-link class="headers colorlink" :to="{ name: 'About', hash: '#MyAbout' }">
        Made by Aman Najibeh
      </router-link>
    </v-card-text>
  </v-card>
  <!-- </v-footer> -->
</template>

<script>
export default {
  // data: () => ({
  //   icons: [
  //     {icone:'mdi-facebook'},
  //     'mdi-twitter',
  //     'mdi-linkedin',
  //     'mdi-github',
  //   ],
  // }),
};
</script>

<style scoped>
.colorlink,
.hoverlink:hover {
  color: #fbdf07;
}
</style>
