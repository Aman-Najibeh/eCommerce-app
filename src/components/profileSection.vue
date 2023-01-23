<template>
  <v-container class="ma-16">
    <v-row justify="space-around">
      <v-card width="800" color="primary">
       <v-row justify="center" align="center">
          <v-col>
            <v-img
          :src="userinfo.image"
          class="text-white rounded-circle w-25 ma-8"
        > 
        </v-img>
          </v-col>
          <v-col>
            <v-card-text >
              <h1 class="text-xs-h6 text-md-h5 text-lg-h4" color="primary">
                {{ userinfo.firstName + userinfo.lastName }}
                </h1></v-card-text>
          </v-col>
       </v-row>
       <v-divider></v-divider>
       <v-card-title>Id : {{ userinfo.id }}</v-card-title>
       <v-card-title>Email : {{ userinfo.email }}</v-card-title>
       <v-card-title>Phone : {{ userinfo.phone }}</v-card-title>
       <!-- <v-card-title>address : {{ userinfo.address.address }}</v-card-title>
        <v-card-title>city: {{ userinfo.address.city }}</v-card-title>   -->
       <v-card-title>Gender : {{ userinfo.gender }}</v-card-title>
       <!-- <v-card-title>cardExpire : {{ userinfo.bank.cardExpire }}</v-card-title>
      <v-card-title>cardType : {{ userinfo.bank.cardType }}</v-card-title>
       <v-card-title>cardNumber : {{ userinfo.bank.cardNumber }}</v-card-title> -->
       <v-card-title>university : {{ userinfo.university}}</v-card-title> 
       <v-card-title>bloodGroup : {{ userinfo.bloodGroup }}</v-card-title>
      </v-card>
    </v-row>
  </v-container>


</template>

<script>
import { mapState } from 'pinia';
import { useUserStore} from '@/store/User'
export default {
  data:()=>({
    userinfo:'',

  }),
  created() {

    this.axios.get('https://dummyjson.com/users/' + this.user.id ,{
      headers:{
        Authorization:'Bearer '+ this.user.token
      }
    }).then(Response=>this.userinfo=Response.data);
  },
  computed: {
    ...mapState(useUserStore,['user'])
  }
}
</script>

<style>
  
</style>