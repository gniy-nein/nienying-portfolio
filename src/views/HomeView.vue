<template>
  <div class="size-full p-4 pb-6 space-y-6">
    <div class="grid md:grid-cols-[2fr_1fr] gap-5">
      <div class="md:pt-3 col-span-1 place-content-center place-items-center">
        <div class="text-4xl lg:text-5xl font-semibold bg-transparent py-2">
          Nien-Ying Hung
        </div>
        <div
          class="block text-md lg:text-2xl font-semibold bg-transparent md:py-2"
        >
          Full Stack Developer
        </div>
        <PeronalInfo class="hidden md:block" />
      </div>
      <div class="mx-auto">
        <img
          class="md:block rounded-3xl object-cover w-[320px] h-[300px] lg:w-[420px] lg:h-[400px]"
          :src="Profile"
          alt="Profile"
        />
      </div>
      <PeronalInfo class="md:hidden block" />
    </div>
    <div class="md:px-10">
      <EducationInfo />
    </div>
  </div>
</template>

<script setup>
import Profile from "@/assets/images/nienying.jpg";
import PeronalInfo from "@/components/PersonalInfo.vue";
import EducationInfo from "@/components/EducationInfo.vue";
</script>

<style scoped>

</style>
