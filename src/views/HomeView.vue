<template>
  <!-- <DownloadBar /> -->

  <!-- PAGE 1 -->
  <div class="cv-page" id="cv-page-1">
    <CvHeader :personal="cv.personal" />
    <div class="cv-body">
      <!-- Mục tiêu nghề nghiệp -->
      <CvSection title="Mục tiêu nghề nghiệp">
        <div class="cv-intro">
          <span>{{ cv.objective }}</span>
        </div>
      </CvSection>

      <!-- Quá trình đào tạo -->
      <CvSection title="Quá trình đào tạo">
        <table class="table table-striped">
          <thead class="table-secondary">
            <tr>
              <th class="text-center">Tên trường</th>
              <th class="text-center">Chuyên ngành</th>
              <th class="text-center">Loại tốt nghiệp</th>
              <th class="text-center">Năm tốt nghiệp</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(edu, i) in cv.education" :key="i">
              <td>{{ edu.school }}</td>
              <td>{{ edu.major }}</td>
              <td class="text-center">{{ edu.grade }}</td>
              <td>{{ edu.period }}</td>
            </tr>
          </tbody>
        </table>
      </CvSection>

      <!-- Kỹ năng -->
      <CvSection title="Kỹ năng">
        <table class="table table-striped">
          <thead class="table-secondary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Công nghệ</th>
              <th scope="col">Mức độ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="skill in cv.skills" :key="skill.id">
              <td>{{ skill.id }}</td>
              <td>{{ skill.tech }}</td>
              <td>{{ skill.level }}</td>
            </tr>
          </tbody>
        </table>
      </CvSection>
    </div>
  </div>

  <!-- PAGE 2 -->
  <div class="cv-page" id="cv-page-2" style="margin-top: 30px">
    <div class="cv-body" style="padding-top: 30px">
      <CvSection title="Kinh nghiệm làm việc và Dự án thực tế">
        <CvWorkEntry
          v-for="(job, i) in cv.workExperience.slice(0, 2)"
          :key="i"
          :job="job" />
      </CvSection>
    </div>
  </div>

  <!-- PAGE 3 -->
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
