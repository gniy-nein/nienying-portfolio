<template>
    <div class="relative md:mx-16">
        <div 
            class="w-fit rounded-t-xl p-2 px-5 pb-4 absolute -top-10"
            :style="{ backgroundColor: props.color }">
            <p class="text-black font-semibold text-2xl md:text-3xl">{{ props.title ? props.title : "Folder" }}</p>
        </div>
        <div 
            class="w-full rounded-2xl p-5 pb-4 mt-20 grid grid-cols-2 md:grid-cols-3 place-content-center place-items-center gap-2"
            :style="{ backgroundColor: props.color }">
            <div class="w-fit m-auto pt-3" v-for="(skill, index) in props.skill" :key="index">
                <img :src="skill.img" alt="location" class="rounded-3xl mx-auto object-cover max-w-[25vw] md:max-w-[12vw] max-h-[25vw] md:max-h-[12vw] p-1 md:p-2 bg-white"/>
                <p class="text-black text-center font-bold text-lg md:text-2xl lg:text-3xl pt-2">{{ skill.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    color: {
        type: String,
        default: "#cacaca"
    },
    skill: {
        type: Array,
    }
});
</script>

<style scoped>
</style>
