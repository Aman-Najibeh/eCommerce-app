<template>
  <!-- <transition name="fade" mode="out-in"> -->
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"> </component>
    </transition>
  </router-view>
  <!-- </transition> -->
</template>
<style lang="css">
.route-enter-from {
  opacity: 0;
  transition: translateX(100px);
}
.route-enter-active {
  transition: all 0.9s ease-out;
}
.route-leave-to {
  opacity: 0;
  transition: translateX(-100px);
}
.route-leave-active {
  transition: all 0.9s ease-in;
}
</style>
