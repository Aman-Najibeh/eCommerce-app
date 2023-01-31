<template>
  <section class="bg mt-16" data-aos="fade-up">
    <v-container>
      <h1 class="text-h2 text-center pcolor">Technologies</h1>
    </v-container>
  </section>
  <section class="ma-16 pa-10">
    <v-timeline align="start">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card
          data-aos="fade - left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <v-card-title :class="['text-h6', `bg-${item.color}`]">
            {{ item.title }}
          </v-card-title>
          <p class="my-4 ma-2">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet
            nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an
            vim zril disputando voluptatibus, vix an salutandi sententiae.
          </p>
          <v-btn :color="item.color" class="ma-4" variant="outlined"> READ MORE </v-btn>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "red-lighten-2",
        icon: "mdi-vuetify",
        title: "Vue js",
        fade: "fade-left",
      },
      {
        color: "purple-lighten-2",
        icon: "mdi-language-javascript",
        title: "Javascript",
      },
      {
        color: "green-lighten-1",
        icon: "mdi-bulma",
        title: "Bulma Framwork",
      },
      {
        color: "indigo-lighten-2",
        icon: "mdi-language-css3",
        title: "Css3",
      },
      {
        color: "indigo-lighten-2",
        icon: "mdi-language-html5",
        title: "Html5",
      },
    ],
  }),
};
</script>

<style scoped></style>
