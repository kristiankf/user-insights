<script setup>

</script>

<template>
    <div class="flex justify-between items-center p-3 ">
        <div>
            <img src="../assets/images/logo.png" alt="logo">
        </div>
        <div>
            <router-link :to="{ name: 'ParticipantHome' }" class="px-4 py-2 inline-block border-2 border-black mr-3">Join as
                a
                Participant</router-link>
            <router-link :to="{ name: 'ResearcherHome' }"
                class="bg-transparent text-black px-4 py-2 inline-block border-2 border-black">Join as a
                Researcher</router-link>
        </div>
    </div>
</template>

<style scoped>
.active-link {
    background-color: black;
    color: white;
}
</style>