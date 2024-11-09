<template>
  <div class="h-screen w-screen">
    <component :is="layouts || 'div'">
      <RouterView />
    </component>
  </div>
</template>

<script setup>
import { ref, computed, shallowRef } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { NavigationFailureType, isNavigationFailure } from "vue-router";
import layouts from "@/components/layouts/Layout.vue";

const router = useRouter()
const route = useRoute()

const layout = shallowRef("div");

router.afterEach((to, from, failure) => {
  if (!isNavigationFailure(failure)) {
    layout.value = layouts[to.meta.layout] || "div";
  }
});
</script>

<style scoped>

</style>