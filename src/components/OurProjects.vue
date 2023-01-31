<template>
   <section class="team text-center pt-16 pb-16" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <div class="team-title pt-6">
      <h1 class="text-h4 font-weight-bold pb-2 pcolor">OUR PROJECTS</h1>
    </div>
    </section>
    <section class="ma-16 bx-16">
        <v-carousel hide-delimiters cycle>
            <v-carousel-item v-for="(item, i) in items" :key="i" >
              <a :href="item.alink" target="_blank"><v-img 
                 :src="item.src"
                 class="h-100"
             ></v-img></a>
                
           </v-carousel-item>
        </v-carousel>
    </section>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {
                    src: "../../ourProjectsImg/Capture.PNG",
                    alink:"https://aman-najibeh.github.io/Networking-website/"
                },
                {
                    src: '../../ourProjectsImg/FreachProject.PNG',
                    alink:"https://aman-najibeh.github.io/Fresh/",
                },
                {
                    src: '../../ourProjectsImg/simpleHomeCV.PNG',
                    alink:"https://aman-najibeh.github.io/Simple-CV/",
                },
                {
                    src: '../../ourProjectsImg/Seo.PNG',
                    alink:"https://aman-najibeh.github.io/SEO_website/",
                },
                {
                    src: '../../ourProjectsImg/flexbox.PNG',
                    alink:"https://aman-najibeh.github.io/Flex-Box/",
                },
            ],
        }
    },
}
</script>