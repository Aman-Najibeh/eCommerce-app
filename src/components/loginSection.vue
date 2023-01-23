<template>

  <v-row>
    <v-col justify="center " align="center">
      <v-card class="w-50 ma-8">
        <v-card-text>
          <h1 class="ma-4 text-xs-h6 text-md-h5 text-lg-h4">LOG IN</h1>
        </v-card-text>
        <v-form @click.prevent="submit" class="w-75 ma-8">
          <v-text-field v-model="username" label="Name" required></v-text-field>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
          <v-text-field v-model="password" label="Password" required></v-text-field>
          <!-- <v-select label="Select" :items="['USER', 'ADMIN']"></v-select> -->
          <v-row>
          

            <v-col>
              <v-btn color="primary" class="mr-4 w-100" to="/">
                USER
              </v-btn>
            </v-col>
            <v-col>
            <v-btn color="primary" class="mr-4 w-100" to="/chartView">
                ADMIN
              </v-btn>
            </v-col>
          </v-row>


        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'pinia';
import { useUserStore } from '@/store/User'
export default {

  data: () => ({
    username: 'kminchelle',
    password: '0lelplR',

    email: 'kminchelle@gmail.com',

  }),

  methods: {
    ...mapActions(useUserStore, ['login']),
    submit() {
      this.login(this.username, this.password)
    }

  }
}
</script>


<style>

</style>