<script setup>
</script>

<template>
  <div class="font-body ">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
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

/* background */
.back {
  background: url("./assets/images/grain.png") repeat, url("./assets/images/grad.png");
  background-size: 400px, cover;

}

/* page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
