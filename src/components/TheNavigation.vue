<script setup>
import MobileNav from './MobileNav.vue';
import { ref, watch, onUnmounted } from 'vue';

const toggle = ref(false)

function toggleMobileNav() {
    toggle.value = !toggle.value
}

watch(toggle, (newToggle) => {
    newToggle ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
})

onUnmounted(() => {
    document.body.style.overflow = 'auto'
})
</script>

<template>
    <Transition name="mobile">
        <MobileNav v-if="toggle" @close="toggleMobileNav" />
    </Transition>

    <div class="flex justify-between items-center py-3 ">
        <div>
            <img src="../assets/images/logo.png" alt="logo">
        </div>
        <div class="hidden md:block">
            <router-link :to="{ name: 'ParticipantHome' }" class="px-4 py-2 inline-block border-2 border-black mr-3">Join as
                a
                Participant</router-link>
            <router-link :to="{ name: 'ResearcherHome' }"
                class="bg-transparent text-black px-4 py-2 inline-block border-2 border-black">Join as a
                Researcher</router-link>
        </div>
        <div class="md:hidden">
            <img class="w-10 cursor-pointer" src="../assets/icons/hamburger.png" alt="" @click="toggleMobileNav">
        </div>
    </div>
</template>

<style scoped>
.active-link {
    background-color: black;
    color: white;
}

.mobile-enter-active {
    transition: all 0.4s ease-in-out;
}

.mobile-leave-active {
    transition: all 0.4s ease
}

.mobile-enter-from,
.mobile-leave-to {
    opacity: 0;
    /* transform: translate(50%, -50%);
  transform: scale(0); */
    transform: translateX(100%);
}
</style>