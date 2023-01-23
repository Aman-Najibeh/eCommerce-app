<template>
  <section id="MyAbout" class="team text-center pt-16 pb-16" data-aos="fade-down" data-aos-easing="linear"
    data-aos-duration="1500">
    <div class="team-title pt-6">
      <h1 class="text-h4 font-weight-bold pb-2">OUR TEAM</h1>
    </div>
    <div class="team-content mt-12 ">
      <v-container>
        <v-row no-gutters>
          <v-col v-for="team in teamList" :key="team.id" class="d-flex  mb-6 justify-space-around">
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <v-img :src="team.src" height="200px" width="200px" cover class="rounded-circle"
                style="border:8px solid rgb(193 193 193 / 66%);"></v-img>
              <h2 class="mt-6 font-weight-black" color="#212529">{{ team .title }}</h2>
              <h1 class="mt-2 mb-4" color="#6c757d">{{ team .explain }}</h1>
              <a href="#" class="ma-2">
                <v-icon color="black">
                  mdi-github
                </v-icon>

              </a>
              <a href="#" class="ma-2">
                <v-icon color="black">
                  mdi-facebook
                </v-icon>

              </a>
              <a href="#" class="ma-2">
                <v-icon x-large color="black">
                  mdi-linkedin
                </v-icon>
              </a>

            </div>
          </v-col>

        </v-row>
      </v-container>
    </div>
  </section>
</template>


<script>
export default {
  data: () => ({

    teamList: [
      {
        id: 1,
        src: './src/assets/undraw_developer_activity_re_39tg.svg',
        title: 'Taiseer Almadani',
        explain: 'Senior Front-End Developer '
      },
      {
        id: 2,
        src: './src/assets/undraw_male_avatar_g98d (1).svg',
        title: 'Roduan Kareem Aldeen',
        explain: 'Senior Backend Developer'
      },
      {
        id: 5,
        src: './src/assets/undraw_dev_focus_re_6iwt.svg',
        title: 'Aman Najibeh',
        explain: 'Junior front-End Developer'
      },
      {
        id: 4,
        src: './src/assets/undraw_female_avatar_efig (1).svg',
        title: 'Parveen Anand',
        explain: 'Junior Backend Developer'
      },
      {
        id: 6,
        src: './src/assets/undraw_pic_profile_re_7g2h (1).svg',
        title: 'Larry Parker',
        explain: 'Graphic  Designer'
      }
    ],
  }),
}
</script>
