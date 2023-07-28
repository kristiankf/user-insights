<script setup>
import TheNavigation from '../components/TheNavigation.vue';
import ImageGallery from '../components/ImageGallery.vue';
import TheFooter from '../components/TheFooter.vue';
</script>

<template>
    <div class="">
        <div class="back pb-20 md:pb-40">
            <div class="maximum">
                <TheNavigation />
            </div>

            <div
                class="flex justify-between mt-14 md:mt-10 items-center gap-14 md:gap-8 flex-col md:flex-row maximum md:pl-10 xl:pl-5">
                <div class="md:w-[48%]">
                    <h1
                        class="font-heading-light text-4xl lg:text-5xl xl:text-6xl font-thin text-primary xl:leading-[70px] ml-5 md:ml-0">
                        <span class="relative excite">Make
                            <img src="../assets/icons/excite-icon.svg"
                                class="absolute bottom-[60%] right-[80%]  w-9 lg:w-auto">
                        </span> better and more
                        <br><span class="text-secondary font-heading">Informed </span><span
                            class="font-heading">Decisions</span>
                    </h1>
                    <p class="my-5 xl:text-lg">
                        Recruit and have interaction with your target users, watch how every user engage and interact with
                        your platform. What they click and how they navigate the solutions you made for them and gather
                        INSIGHTS.
                    </p>
                    <router-link :to="{ name: 'ResearcherSignup' }"
                        class="bg-secondary  px-8 py-2 inline-block border-2 border-secondary mr-3  relative arrow">Join
                        the
                        Waitlist
                        <img src="../assets/icons/arrow-curved.svg" class="absolute top-[50%] left-[65%]">
                    </router-link>

                </div>
                <div class="md:w-[48%]">
                    <img src="../assets/images/baldman.png" alt="">
                </div>
            </div>

        </div>
        <div class="">
            <TheFooter />
        </div>
    </div>
</template>

<style scoped></style>