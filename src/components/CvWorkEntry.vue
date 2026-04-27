<template>
  <div class="cv-entry">
    <div class="cv-entry__row">
      <div class="cv-entry__school">{{ job.company }}</div>
      <div class="cv-entry__school">{{ job.position }}</div>
      <div class="cv-entry__date">{{ job.period }}</div>
    </div>
    <ul class="cv-entry__bullets">
      <li><b>Công nghệ: </b>{{ job.tech }}</li>
      <li>
        <b>Dự án phụ trách:</b>
        <div v-for="(p, i) in job.projects" :key="i" class="cv-entry__bullets">
          - {{ p.name }}
          <a v-if="p.url && p.url !== '#'" class="lnk_project" :href="p.url" target="_blank">
            {{ p.label }}
          </a>
          <span v-else-if="p.label" class="text-muted">{{ p.label }}</span>
        </div>
      </li>
      <li>
        <b>Nội dung công việc:</b>
        <div v-for="(t, i) in job.tasks" :key="i" class="cv-entry__bullets">
          - {{ t }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  job: { type: Object, required: true },
})
</script>
