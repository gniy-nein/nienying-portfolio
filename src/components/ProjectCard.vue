<template>
  <div class="space-y-3 bg-[#0d0d0d] rounded-3xl h-full">
    <div class="w-full h-[25vh]">
      <img :src="props.image" class="w-full h-full object-cover rounded-xl" />
    </div>
    <div class="h-fit space-y-3 p-4 pt-0">
      <p class="font-bold text-xl md:text-2xl">{{ props.title }}</p>
      <p class="text-base md:text-lg">&emsp;{{ props.description }}</p>
      <div class="flex flex-wrap gap-2" >
        <div 
            v-for="(tag,index) in tags" :key="index"
          class="py-1 px-2 rounded-3xl text-sm md:text-base text-black w-fit"
          :style="{ backgroundColor: tag.color }"
        >
          {{ tag.name }}
        </div>
      </div>
      <p
        v-if="props.link"
        class="underline font-semibold text-base underline-offset-4 hover:bg-white hover:text-black w-fit p-1 transition-all rounded-xl"
        @click="openLink(props.link)"
      >
        Visit Project Here
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  tags: Array,
  link: String,
});

function openLink(link) {
  window.open(link, "_blank");
}
</script>

<style lang="scss" scoped>
</style>