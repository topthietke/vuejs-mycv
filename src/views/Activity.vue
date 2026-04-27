<template>
  <!-- PAGE 4 -->
  <div class="cv-page" id="cv-page-4" style="margin-top: 30px">
    <div class="cv-body" style="padding-top: 30px">
      <!-- Hoạt động -->
      <CvSection title="Hoạt động">
        <div v-for="(act, i) in cv.activities" :key="i" class="cv-content">
          <b>{{ act.org }}:</b>
          <span v-if="act.detail"> {{ act.detail }}</span>
          <template v-if="act.items && act.items.length">
            <div v-for="(item, j) in act.items" :key="j" class="mx-3">
              - {{ item }}
            </div>
          </template>
        </div>
      </CvSection>

      <!-- Ngoại ngữ -->
      <CvSection title="Ngoại ngữ">
        <div v-for="(lang, i) in cv.languages" :key="i" class="cv-content">
          <b>{{ lang.lang }}:</b> {{ lang.desc }}
        </div>
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
