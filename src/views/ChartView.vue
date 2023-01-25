<template>
     <section class="mb-16 pa-16  bg-blue-grey-lighten-4">
        <div>
            <!-- <h1 class="text-h4 text-center mb-2">Also, you can visit us through the location </h1> -->
            <p class="text-h5 text-center">Users count: 30 user </p>
            <p class="text-h5 text-center">Products count : {{ ProductsStore.length}} Product</p>
        </div>
    </section>

  <v-row>
    <v-col>
        <donut-chart></donut-chart> 
    </v-col>
    <v-col>
        <barChart></barChart>
    </v-col>
  </v-row> 
             <line-chart></line-chart>
</template>

<script>
import barChart from '@/ChartComponnent/barChart.vue'
import DonutChart from '@/ChartComponnent/DonutChart.vue'
import LineChart from '@/ChartComponnent/LineChart.vue'
// import useUserStore from '@/store/User'
import { mapState } from 'pinia'
import { useProductStore } from '@/store/Product'
export default {
  components: { barChart, DonutChart, LineChart },
  computed:{
    ...mapState(useProductStore,['ProductsStore'])

  }
}
</script>

<style>

</style>