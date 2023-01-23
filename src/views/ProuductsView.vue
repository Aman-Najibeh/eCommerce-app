<template>
  <nav-bar-section/> 
  <products-section/>
</template>

<script>
import ProductsSection from '@/components/ProductsSection.vue'
import NavBarSection from '@/components/NavBarSection.vue'
// import FilterProduct from '@/components/filterProduct.vue'
export default {
  components: { ProductsSection, NavBarSection},

}
</script>
