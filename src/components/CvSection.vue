<template>
  <div class="cv-section">
    <div class="cv-section__header">
      <div class="cv-section__label">{{ title }}</div>
      <div class="cv-section__line"></div>
    </div>
    <div class="cv-section__body">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>
