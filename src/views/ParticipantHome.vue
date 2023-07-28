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
                class="flex justify-between mt-14 md:mt-10 items-center  gap-20 md:gap-10 flex-col md:flex-row maximum md:pl-10 xl:pl-5 max-w-7xl">
                <div class="md:w-[48%] w-full relative lg:bottom-24">
                    <h1 class="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-primary ml-5 md:ml-0"><span
                            class="inline-block relative excite">Share
                            <img src="../assets/icons/excite-icon.svg"
                                class="absolute bottom-[60%] right-[85%] w-9 lg:w-auto">

                        </span>
                        your
                        <span class="text-secondary">Opinion,</span><br>&
                        Get paid.
                    </h1>
                    <p class="my-5 xl:text-lg">
                        Sharing your perspective on products and experiences and earning money online from the comfort of
                        your home is a breeze with our simple, speedy, and effortless platform.
                    </p>
                    <router-link :to="{ name: 'ParticipantSignup' }"
                        class="bg-secondary  px-8 py-2 inline-block border-2 border-secondary mr-3 relative arrow">Join
                        the
                        Waitlist
                        <img src="../assets/icons/arrow-curved.svg" class="absolute top-[50%] left-[65%]"> </router-link>

                </div>
                <div class="md:w-[48%] w-full">
                    <ImageGallery />
                </div>
            </div>

        </div>
        <div class="">
            <TheFooter />
        </div>
    </div>
</template>

<style scoped></style>