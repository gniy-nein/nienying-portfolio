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
const projects = [
  {
    title: "Verscan",
    description: "Verscan, an asset management system, where I was responsible for front-end development and parts of the back-end. My contributions included implementing new features, creating responsive designs, migrating user data to the latest version, and supporting the mobile application.",
    image: "https://verscan.sponga.co/img/spongaBanner.c2688f5e.png",
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
    image: "https://www.houseofdev.tech/hubfs/16%20blog%20-%20sponga.png",
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
    image: "https://ned.egat.co.th/images/logo/LogoEGATE.jpg",
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
    image: "https://pbs.twimg.com/media/GT4SurwXUAAgmWk.jpg",
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
    image: "https://www.houseofdev.tech/hubfs/18%20final%202%20edited.svg",
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
    image: "https://scontent.fkdt3-1.fna.fbcdn.net/v/t39.30808-6/456297769_1026534275542368_6325315736686762672_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rHM_me5ajuAQ7kNvgFrKDd7&_nc_zt=23&_nc_ht=scontent.fkdt3-1.fna&_nc_gid=AvV-pQepJ3LtEUfwO2eBPh4&oh=00_AYBBu-bPMoZ442YrwI-BqOxw-QLAGD1n5Q8u4U8C1b8rmg&oe=673421DA",
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
    image: "https://cdn.mos.cms.futurecdn.net/bSdmBqWbHN49gwmHGisNge-1200-80.png",
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