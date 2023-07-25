<script setup>
</script>

<template>
  <div class="font-body bg-the-bg">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
/* Fonts */
@font-face {
  font-family: Butler;
  src: url("./assets/fonts/Butler_ExtraBold.otf");
}

@font-face {
  font-family: Butler Normal;
  src: url("./assets/fonts/Butler_Regular.otf");
}

@font-face {
  font-family: Butler Light;
  src: url("./assets/fonts/Butler_Ultra_Light.otf");
}

@font-face {
  font-family: Inter;
  src: url("./assets/fonts/Inter-VariableFont_slnt,wght.ttf");
}

/* page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
