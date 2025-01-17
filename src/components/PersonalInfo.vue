<template>
  <div class="space-y-4">
    <p class="w-full p-2">
      &emsp;&emsp; A passionate and adaptable Full-Stack Developer with with
      hands-on experience in both front-end and back-end development. As a
      Taiwanese graduate from King Mongkut's University of Technology Thonburi
      (KMUTT), I am eager to continue expanding my skills, open to learning new
      programming languages, and always ready to take on new challenges.
      Currently seeking opportunities to further my career in Thailand and
      contribute to dynamic development teams.
    </p>
    <div class="space-y-4 md:space-y-0 grid md:grid-cols-2">
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <LanguageIcon class="w-6 h-6 md:w-7 md:h-7" />
          <p>TH || EN || CN</p>
        </div>
        <div class="flex items-center gap-2">
          <PhoneIcon class="w-6 h-6 md:w-7 md:h-7" />
          <p>081-828-1854</p>
        </div>
        <div class="flex items-center gap-2">
          <ContactIcon class="w-6 h-6 md:w-7 md:h-7" />
          <p>nien-ying23097@hotmail.com</p>
        </div>
        <div class="flex items-center gap-2">
          <LocationIcon class="w-6 h-6 md:w-7 md:h-7" />
          <p>Nakhon Pathom || Bangkok, Thailand</p>
        </div>
      </div>
      <div class="space-y-4">
        <div
          @click="openLink('https://www.linkedin.com/in/nien-ying-hung-54080a331/')"
          class=" flex items-center gap-2 text-left w-fit focus:outline-none hover:bg-[#000000] transition-all duration-800 hover:rounded-xl hover:p-1 animate__animated animate__pulse animate__infinite	infinite animate__slow"
        >
          <LinkedInIcon class="w-6 h-6 md:w-7 md:h-7" />
          <p>nien-ying hung</p>
        </div>

        <div
          @click="openLink('https://github.com/gniy-nein')"
          class="flex items-center gap-2 text-left w-fit focus:outline-none hover:bg-[#000000] transition-all duration-800 hover:rounded-xl hover:p-1 animate__animated animate__pulse animate__infinite	infinite animate__slow"
        >
          <GithubIcon class="w-6 h-6 md:w-7 md:h-7 bg-white rounded-full" />
          <p>gniy-nein</p>
        </div>
        <div
          @click="openLink('https://drive.google.com/file/d/1MyuAoxNfxW7l8YbbEIV4AMRZo3C6V1_G/view?usp=sharing')"
          class="hidden md:flex items-center gap-2 text-left w-fit focus:outline-none hover:bg-[#9f9f9f] hover:text-black transition-all duration-800 p-1.5 border-2 hover:border-dashed border-[#ffffff] rounded-xl"
        >
          <PDFIcon class="w-5 h-5 md:w-6 md:h-6" />
          <p>Download Resume</p>
        </div>
      </div>
      <div
          @click="openLink('https://drive.google.com/file/d/1MyuAoxNfxW7l8YbbEIV4AMRZo3C6V1_G/view?usp=sharing')"
          class="flex md:hidden justify-center items-center gap-2 text-left w-full focus:outline-none hover:bg-[#9f9f9f] hover:text-black transition-all duration-800 p-2 border-2 hover:border-dashed border-[#ffffff] rounded-xl"
        >
          <PDFIcon class="w-5 h-5 md:w-6 md:h-6" />
          <p>Download Resume</p>
        </div>
    </div>
  </div>
</template>

<script setup>
import PhoneIcon from "@/assets/icons/PhoneIcon.vue";
import ContactIcon from "@/assets/icons/ContactIcon.vue";
import LocationIcon from "@/assets/icons/LocationIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedinIcon.vue";
import GithubIcon from "@/assets/icons/GithubIcon.vue";
import PDFIcon from "@/assets/icons/PDFIcon.vue";
import LanguageIcon from "@/assets/icons/LanguageIcon.vue";

function openLink(link) {
  window.open(link, "_blank");
}
</script>

<style lang="scss" scoped>
</style>