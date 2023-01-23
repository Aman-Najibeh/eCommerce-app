<template>
  <v-btn variant="text"  @click="ToggleLocal">
         <v-icon>{{$i18n.locale==='en' ?'mdi-abjad-arabic' :'mdi-alpha-e'}}</v-icon></v-btn>
</template>

<script>
export default {
methods:{
    ToggleLocal()
    {
        this.$i18n.locale=this.$i18n.locale==='ar' ?'en':'ar',
        this.$vuetify.locale.current=this.$vuetify.locale.current ==='ar'?'en' :'ar'
    }
}
}
</script>

<style>

</style>