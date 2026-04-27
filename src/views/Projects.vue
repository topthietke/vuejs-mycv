<template>
  <div class="cv-page" id="cv-page-3" style="margin-top: 30px">
    <div class="cv-body" style="padding-top: 30px">
      <CvSection title="Kinh nghiệm làm việc và Dự án thực tế">
        <CvWorkEntry
          v-for="(job, i) in cv.workExperience.slice(2)"
          :key="i"
          :job="job" />
      </CvSection>
    </div>
  </div>
</template>

<script setup>
import { cvData as cv } from "../data/cvData.js";
// import DownloadBar from '../components/DownloadBar.vue'
import CvHeader from "../components/CvHeader.vue";
import CvSection from "../components/CvSection.vue";
import CvWorkEntry from "../components/CvWorkEntry.vue";
</script>
