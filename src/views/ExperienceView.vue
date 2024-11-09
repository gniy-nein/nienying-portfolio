<template>
  <div class="m-auto p-3 md:p-5 overflow-hidden">
    <p class="font-bold text-2xl md:text-3xl text-center md:text-start pb-8">
      My Experience So Far
    </p>
    <div
      v-for="(item, index) in experienceData"
      :key="item.title"
      class="timeline-item"
      :class="{ 'fade-in': itemVisible[index] }"
    >
      <div class="text-[#D3ADFE] font-bold flex md:block gap-2 text-nowrap text-base md:text-lg">
        <div>{{ item.dateFrom }}</div>
        <p class="hidden md:block text-white">to</p>
        <p class="text-center md:hidden">-</p>
        <div >{{ item.dateTo }}</div>
      </div>
      <div class="timeline-content pl-3 md:px-7">
        <h2 class="font-bold text-lg md:text-xl">{{ item.title }}</h2>
        <h3 class="text-base md:text-lg text-[#9c9c9c]">@ {{ item.company }}</h3>
        <ul class="pl-3">
          <li v-for="(detail, index) in item.details" :key="index" class="mb-2 text-base md:text-lg">
            - {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const experienceData = ref([
  {
    title: "Full Stack Developer",
    company: "House of Dev Technology Co., Ltd.",
    dateFrom: "December 2023",
    dateTo: "Present",
    details: [
      "Developed, debugged, and optimized Verscan v.2, focusing on frontend UI, responsive design, and business functions.",
      "Implemented new features for Verscan v.2, including frontend UI, responsive design, and business function implementation.",
      "Handled backend tasks such as API debugging, implementing data export to Excel, and configuring email services (mailer).",
      "Managed the user data migration process from Verscan v.1 to Verscan v.2.",
      "Implemented offline mode for Verscan mobile using React Native Expo and SQLite.",
      "Contributed to client projects, such as 4EVE x Hada Labo and a Healthcare project, building responsive UIs, integrating with backend APIs, and enhancing web functionality.",
      "Assisted in frontend development for Mymirai.ai and HoD TechSauce Global Summit 2024, including websocket integration for real-time interactions.",
      "Provided backend debugging support and managed deployment processes for the EGAT project.",
      "Conducted research on generative AI implementation (Google Gemini and ChatGPT), exploring ways to integrate these technologies into future projects.",
    ],
  },
  {
    title: "Front-end Developer Intern",
    company: "House of Dev Technology Co., Ltd.",
    dateFrom: "January 2023",
    dateTo: "December 2023",
    details: [
      "Developed and optimized frontend interfaces for Verscan, Management Website for Egat, and other client projects.",
      "Conducted research on client-side rendering (CSR) and implemented SEO-friendly pre-rendered pages to enhance site visibility and performance.",
      "Implemented responsive web design and seamless user experience across platforms.",
    ],
  },
  {
    title: "Business Analyst Intern",
    company: "Graduate School of Management and Innovation (GMI), KMUTT",
    dateFrom: "June 2022",
    dateTo: "August 2022",
    details: [
      "Contributed to the Construction Management Project for the Department of Public Works and Town & Country Planning.",
      "Assisted in project planning, requirement gathering, and document management.",
    ],
  },
]);

const itemVisible = ref(experienceData.value.map(() => false));

onMounted(() => {
  experienceData.value.forEach((_, index) => {
    setTimeout(() => {
      itemVisible.value[index] = true;
    }, index * 300);
  });
});
</script>

<style scoped>

.timeline-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-left: 3px solid hsl(268, 100%, 84%);
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.timeline-item.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.timeline-content {
  margin-left: 1rem;
}

@media (max-width: 600px) {
  .timeline-item {
    flex-direction: column;
    padding: 1rem;
  }

  .timeline-content {
    margin-left: 0;
  }
}
</style>
