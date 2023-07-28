<script setup></script>

<template>
    <div class="flex gap-3 items-center w-full">
        <div class="w-[32%]  flex-shrink">
            <div class="img-container blue relative bottom-12 overflow-hidden">
                <div class="absolute top-0 bottom-0 left-0 right-0"></div>
            </div>
        </div>
        <div class="w-[32%]  flex-shrink">
            <div class="img-container red relative mb-3 overflow-hidden">
                <div class="absolute top-0 bottom-0 left-0 right-0"></div>
            </div>
            <div class="img-container green relative overflow-hidden">
                <div class="absolute top-0 bottom-0 left-0 right-0"></div>
            </div>
        </div>
        <div class="w-[32%]  flex-shrink">
            <div class="img-container purple relative top-14 xs:top-16 md:top-20 overflow-hidden">
                <div class="absolute top-0 bottom-0 left-0 right-0"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-container {
    border-radius: 20px;
    width: 100%;
    aspect-ratio: 5.5/11;
}

.blue {
    background: url(../assets/images/blue.png) no-repeat;
    background-size: cover;
}

.red {
    background: url(../assets/images/red.png) no-repeat;
    background-size: cover;
}

.green {
    background: url(../assets/images/green.png) no-repeat;
    background-size: cover;
}

.purple {
    background: url(../assets/images/purple.png) no-repeat;
    background-size: cover;
}

@media screen and (max-width: 1280px) {
    .img-container {
        /* width: 120px */
    }
}
</style>