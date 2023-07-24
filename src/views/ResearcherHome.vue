<script setup>
import TheNavigation from '../components/TheNavigation.vue';
import ImageGallery from '../components/ImageGallery.vue';
import TheFooter from '../components/TheFooter.vue';
</script>

<template>
    <div class="">
        <div class="bg-the-bg pb-40">
            <div class="maximum">
                <TheNavigation />
            </div>

            <div class="flex justify-center mt-10 items-center gap-8 maximum">
                <div class="w-[600px]">
                    <h1 class="font-heading-light text-6xl font-thin text-primary leading-[70px]">Make better and more
                        <br><span class="text-secondary font-heading">Informed </span><span
                            class="font-heading">Decisions</span>
                    </h1>
                    <p class="my-5 text-lg">
                        Recruit and have interaction with your target users, watch how every user engage and interact with
                        your platform. What they click and how they navigate the solutions you made for them and gather
                        INSIGHTS.
                    </p>
                    <router-link :to="{ name: 'ResearcherSignup' }"
                        class="bg-secondary  px-8 py-2 inline-block border-2 border-secondary mr-3 font-semibold">Join the
                        Waitlist</router-link>

                </div>
                <div>
                    <img src="../assets/images/baldman.png" alt="">
                </div>
            </div>

        </div>
        <div class="">
            <TheFooter />
        </div>
    </div>
</template>