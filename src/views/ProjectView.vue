<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-2 md:m-5">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :description="project.description"
      :image="project.image"
      :tags="project.tags"
      :link="project.link"
    />
  </div>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import Verscan from "@/assets/images/verscan.png";
import Sponga from "@/assets/images/sponga.webp";
import EGAT from "@/assets/images/egat.jpg";
import Mymirai from "@/assets/images/mymirai.jpg";
import AssetBlitz from "@/assets/images/techsauce.svg";
import Hadalabo from "@/assets/images/hada_event.jpg";
import AI from "@/assets/images/research_ai.png";
const projects = [
  {
    title: "Verscan",
    description: "Verscan, an asset management system, where I was responsible for front-end development and parts of the back-end. My contributions included implementing new features, creating responsive designs, migrating user data to the latest version, and supporting the mobile application.",
    image: Verscan,
    tags: [
        {
            name: "Java Script",
            color: "#adbf49",
        },
        {
            name: "Type Script",
            color: "#adbf49",
        },
        {
            name: "Vue",
            color: "#4bdeff",
        },
        {
            name: "Tailwind",
            color: "#4bdeff",
        },
        {
            name: "React Native",
            color: "#4bdeff",
        },
        {
            name: "Node",
            color: "#e177dc",
        },
        {
            name: "Express",
            color: "#e177dc",
        },
        {
            name: "Sequelize",
            color: "#e177dc",
        },
        {
            name: "MySQL",
            color: "#927eff",
        },
        {
            name: "PostgreSQL",
            color: "#927eff",
        },
    ],
    link: "https://www.verscan.com/",
  },
  {
    title: "Sponga",
    description: "Sponga, an E-learning platform where I was responsible for front-end development. My contributions included building responsive designs and researching client-side rendering (CSR) and pre-rendering techniques to optimize SEO",
    image: Sponga,
    tags: [
       {
            name: "Java Script",
            color: "#adbf49",
        },
        {
            name: "Vue",
            color: "#4bdeff",
        },
        {
            name: "Tailwind",
            color: "#4bdeff",
        },
    ],
    link: "https://www.google.com",
  },
  {
    title: "Project with EGAT",
    description: "This project involved developing an appointment management system for the EGAT task. I was responsible for both frontend and backend development, as well as deployment. My contributions included creating responsive designs, implementing new features based on requirements, debugging on both the front and back end, exporting data, handling data migration, and managing deployment.",
    image: EGAT,
    tags: [
        {
            name: "Java Script",
            color: "#adbf49",
        },
        {
            name: "Vue",
            color: "#4bdeff",
        },
        {
            name: "Tailwind",
            color: "#4bdeff",
        },
        {
            name: "Node",
            color: "#e177dc",
        },
        {
            name: "Express",
            color: "#e177dc",
        },
        {
            name: "Sequelize",
            color: "#e177dc",
        },
        {
            name: "MySQL",
            color: "#927eff",
        },
    ],
  },
  {
    title: "Mymirai",
    description: "an chat bot ai platform, where I was responsible for front-end development My contributions included creating responsive designs for Outsource.",
    image: Mymirai,
    tags: [
        {
            name: "Type Script",
            color: "#adbf49",
        },
        {
            name: "React (Next.js)",
            color: "#4bdeff",
        },
        {
            name: "Tailwind",
            color: "#4bdeff",
        },
    ],
    link: "https://mymirai.ai/",
  },
  {
    title: "Asset Blitz; Spot the Spec",
    description: "I worked on a web game for the HoD X TechSauce Global Summit 2024, where I was responsible for front-end development. My contributions included building responsive designs, establishing WebSocket connections, and implementing the game to integrate seamlessly with the monitor board.",
    image: AssetBlitz,
    tags: [
        {
            name: "Type Script",
            color: "#adbf49",
        },
        {
            name: "React (Next.js)",
            color: "#4bdeff",
        },
        {
            name: "Tailwind",
            color: "#4bdeff",
        },
    ],
    link: "https://practice-tsgs2024.hodevent.tech/?fbclid=IwY2xjawGbRt1leHRuA2FlbQIxMAABHQDuoj2RWH8ik35Bg6IQw6OacgtD4f5q7jDF-VqCmwpJVTysmRkWCHxm3w_aem_bQ_OxAq5KwjpygU2yDKhcA",
    // link: "https://www.houseofdev.tech/th/blog/our-sucess-tsgs2024",
  },
  {
    title: "𝟰𝗘𝗩𝗘 𝘅 𝗛𝗮𝗱𝗮 𝗟𝗮𝗯𝗼 Event",
    description: "I supported the front end development for a web game used at an event, where users tap to pop bubbles and collect scores. My contributions included creating responsive designs and integrating the game with the back-end API.",
    image: Hadalabo,
    tags: [
        {
            name: "Java Script",
            color: "#adbf49",
        },
        {
            name: "Vue",
            color: "#4bdeff",
        },
        {
            name: "Tailwind",
            color: "#4bdeff",
        },
    ],
    link: "https://www.facebook.com/share/p/19M7egBiyj/",
  },
  {
    title: "Generative AI Research for Further Development",
    description: "I was responsible for researching and developing a proof of concept (POC) for an AI solution that generates information from uploaded images. This involved crafting effective prompt messages, processing the AI responses, and converting the data for storage in the database.",
    image: AI,
    tags: [
        {
            name: "Java Script",
            color: "#adbf49",
        },
        {
            name: "Node",
            color: "#e177dc",
        },
        {
            name: "Express",
            color: "#e177dc",
        },
        {
            name: "Sequelize",
            color: "#e177dc",
        },
        {
            name: "MySQL",
            color: "#927eff",
        },
    ],
  },
];
</script>

<style lang="scss" scoped>
</style>