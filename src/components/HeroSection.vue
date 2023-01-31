<template>
  <v-parallax 
  src="@/assets/cover.jpg"
    height="600"
    >
    <div class="w-50 h-100">
      <h1 class="text-h1 font-weight-black textColor text-center ">
        Shop
      </h1>
      <h4 class="subheading textColor text-center ma-2 ">
        {{ $t('message.Welcome') }} to our store ...
      </h4>
    </div>
  </v-parallax>
</template>

<script>
export default {

}
</script>

<style>
.textColor{
  color: #FBDF07;
  margin: auto;
  margin-top:30%;
}
</style>