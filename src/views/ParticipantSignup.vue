<script setup></script>

<template>
    <div class=" bg-the-bg min-h-screen">
        <div class="maximum">
            <div class="py-3">
                <img src="../assets/images/logo.png" alt="logo">
            </div>

            <div class="py-16 max-w-[600px] mx-auto sm:text-center">
                <h2 class="font-heading-normal text-4xl md:text-5xl ml-5 sm:ml-0"><span
                        class="excite relative">Participant</span> sign in</h2>
                <p class="xl:text-lg my-5">
                    Discovering the perfect participants is made easy, ensuring top-notch responses of superior quality, all
                    while propelling research that can change the world
                </p>
                <form class="text-left max-w-[450px] mx-auto">
                    <div class="mb-5">
                        <label for="firstname" class="block">First name</label>
                        <input type="text" name="firstname" id="firstname"
                            class="bg-transparent border border-black w-full p-3">
                    </div>
                    <div class="mb-5">
                        <label for="lastname" class="block">Last name</label>
                        <input type="text" name="lastname" id="lastname"
                            class="bg-transparent border border-black w-full p-3">
                    </div>
                    <div class="mb-7">
                        <label for="email" class="block">Email</label>
                        <input type="email" name="email" id="email" class="bg-transparent border border-black w-full p-3">
                    </div>
                    <input type="submit" value="Sign Up" class="bg-secondary w-full p-3">
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.excite::before {
    content: url("../assets/icons/excite-icon.png");
    position: absolute;
    bottom: 35%;
    right: 92%;
}
</style>