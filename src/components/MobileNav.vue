<script setup></script>

<template>
    <div class="relative z-40 ml-auto top-5 max-w-xs">
        <div class="nav absolute py-20 px-10 right-0 left-0">
            <router-link :to="{ name: 'ParticipantHome' }"
                class="px-4 py-2 inline-block border-2 border-black mr-3 w-full text-center mb-3 link">Join as
                a
                Participant</router-link>
            <router-link :to="{ name: 'ResearcherHome' }"
                class="bg-transparent text-black px-4 py-2 inline-block border-2 border-black w-full text-center link">Join
                as a
                Researcher</router-link>
        </div>
        <img src="../assets/icons/close-square.svg" alt="" class="absolute right-4 top-4" @click="$emit('close')">
    </div>
</template>

<style scoped>
link.active-link {
    background-color: black !important;
    color: white;
}

.router-link-exact-active {
    background-color: black !important;
    color: white;
}

.nav {
    background: rgba(255, 255, 255) url("./assets/images/grain.png") repeat;
}
</style>