import { defineStore } from 'pinia'
import {axios} from '@/plugins/axios'
export const useUserStore = defineStore('user', {
  persist: true,
  state: () => ({
    user:{},         
     token:null,
 
  }),
  getters:{
      isLoggedIn(state)
      {
        return !!state.user.token 
      }
          },
  actions:{
    login(username,password)
    {
       
      axios.post('https://dummyjson.com/auth/login', {
          username: username,
          password: password,
        })
        .then(res=>{this.user=res.data
          axios.defaults.headers.common['Authorization']='bearer '+this.user.token }
          );
        //  this.$router.push('/')
    },
    logout(){
      this.user={}
       axios.defaults.headers.common['Authorization']
      //  this.$router.push('/')
    }

    }
    
  })
