<template>
  <div class="cv-entry">
    <div class="cv-entry__row">
      <div class="cv-entry__school">{{ entry.company }}</div>
      <div class="cv-entry__school">{{ entry.position }}</div>
      <div class="cv-entry__date">{{ entry.period }}</div>
    </div>
    <ul class="cv-entry__bullets">
      <li><b>Công nghệ: </b>{{ entry.tech }}</li>
      <li>
        <b>Dự án phụ trách:</b>
        <div v-for="(project, i) in entry.projects" :key="i" class="cv-entry__bullets">
          - {{ project.name }}:
          <a v-if="project.url && project.url !== '#'" class="lnk_project" :href="project.url" target="_blank">
            {{ project.label }}
          </a>
          <span v-else-if="project.label">{{ project.label }}</span>
        </div>
      </li>
      <li>
        <b>Nội dung công việc:</b>
        <div v-for="(duty, i) in entry.duties" :key="i" class="cv-entry__bullets">
          - {{ duty }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  entry: { type: Object, required: true },
})
</script>
