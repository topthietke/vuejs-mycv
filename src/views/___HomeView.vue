<template>
  <!-- <DownloadBar /> -->

  <!-- PAGE 1 -->
  <Information />

  <!-- PAGE 2 -->
  <Experience />
  <!-- PAGE 3 -->
  <Projects />

  <!-- PAGE 4 -->
  <Activity />
</template>

<script setup>
import { cvData as cv } from "../data/cvData.js";
import CvHeader from "../components/CvHeader.vue";
import CvSection from "../components/CvSection.vue";
import CvWorkEntry from "../components/CvWorkEntry.vue";


import  Information from "./Information.vue";
import Experience from "./Experience.vue";
import Projects from "./Projects.vue";
import Activity from "./Activity.vue";


</script>
