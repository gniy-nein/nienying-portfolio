<template>
  <div class="nav-container flex">
    <div class="h-dvh min-w-[20vw] lg:min-w-[13vw] hidden sm:block">
      <p class="text-[#CFCFCF] font-bold pb-2">EXPLOROR</p>
      <div
        v-for="item in menuItems"
        :key="item.name"
        :class="[
          'font-medium md:pl-3 pl-2 hover:bg-[#1d1d1d] py-2 md:px-3',
          { active: isActive(item.name) },
        ]"
        @click="navigateTo(item.name)"
      >
        <div
          class="flex gap-5 items-center justify-between pl-2 md:pl-0"
          :class="route.name == item.name ? 'border-l md:border-none' : ''"
        >
          <div class="flex gap-2 items-center">
            <component :is="item.icon" class="w-4 h-4" />{{ item.label }}
          </div>
          <span
            v-if="route.name == item.name"
            class="hidden md:block rounded-full bg-white w-2 h-2"
          ></span>
        </div>
      </div>
    </div>
    <div class="size-full">
      <div class="flex overflow-x-auto custom-scrollbar bg-transparent">
        <div
          v-for="item in menuItems"
          :key="item.name"
          :class="[
            'nav-item font-medium border border-[#1d1d1d] size-fit',
            { active: isActive(item.name) },
          ]"
          @click="navigateTo(item.name)"
        >
          <div class="flex gap-2 items-center px-3 pt-2">
            <component :is="item.icon" class="w-4 h-4" />{{ item.label }}
          </div>
        </div>
      </div>
      <div class="h-[calc(100%-30px)] bg-[#1d1d1d] overflow-y-scroll p-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import Home from "@/assets/icons/HomeIcon.vue";
import Experience from "@/assets/icons/ExperienceIcon.vue";
import Project from "@/assets/icons/ProjectIcon.vue";
import Puzzle from "@/assets/icons/PuzzleIcon.vue";

const router = useRouter();
const route = useRoute();
const menuItems = [
  { name: "Home", label: "Home", icon: Home },
  { name: "Experience", label: "Experience", icon: Experience },
  { name: "Project", label: "Project", icon: Project },
  { name: "Skill", label: "Skill", icon: Puzzle },
];

function navigateTo(pathName) {
  router.push({ name: pathName });
}

function isActive(pathName) {
  return route.name === pathName;
}
</script>

<style scoped>
.nav-container {
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  background-color: #151515;
  overflow: hidden;
}

.nav-item {
  @apply cursor-pointer text-[#f1f1f5];
  transition: color 0.3s ease, transform 0.2s ease;
}

.nav-item.active {
  @apply text-[#ffffff] font-bold;
  border-top: solid 2px #ffffff;
  background-color: #1d1d1d;
}

.nav-item:hover {
  color: #ffffff;
  transform: scale(1.01);
}

.custom-scrollbar {
  scrollbar-width: auto; /* Firefox */
  scrollbar-color: #424242 transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  height: 10px; /* Scroll bar height for horizontal scroll */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #1d1d1d;
  border-radius: 5px;
  border: 5px solid transparent;
  background-clip: padding-box;
}
</style>