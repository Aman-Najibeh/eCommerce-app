import { defineStore } from 'pinia'
import {axios} from '@/plugins/axios'
export const useUserStore = defineStore('user', {
  persist: true,
  state: () => ({
    testimonial:{},         
     token:null,
 
  }),
  getters:{
    //
    },
    created() {
        this.loadProducts()
       
    },
    methods: {
        loadProducts() {
            this.axios('https://testimonialapi.toolcarton.com/api')
                .then(res=> this.testimonial = res.data)
                console.log(this.res);
        },
    }
    
    
  })
