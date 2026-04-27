<template>
  <div class="cv-header">
    <div class="cv-header__photo">
      <img :src="personal.avatar" :alt="personal.name" />
    </div>
    <div class="cv-header__info">
      <div class="cv-header__name">{{ personal.name }}</div>
      <div class="cv-header__title">{{ personal.title }}</div>
      <div class="cv-header__divider"></div>
      <div class="cv-header__contacts">
        <span>
          <svg viewBox="0 0 24 24"><path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm0 2l-7 5-7-5h14zm0 12H5a1 1 0 01-1-1V8.5l7 5 7-5V17a1 1 0 01-1 1z" /></svg>
          {{ personal.dob }}
        </span>
        <span>
          <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.45 11.45 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.49 11.49 0 00.57 3.57 1 1 0 01-.25 1.02l-2.2 2.2z" /></svg>
          {{ personal.phone }}
        </span>
        <span>
          <svg viewBox="0 0 24 24"><path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm0 2l-7 5-7-5h14zm0 12H5a1 1 0 01-1-1V8.5l7 5 7-5V17a1 1 0 01-1 1z" /></svg>
          {{ personal.email }}
        </span>
        <span>
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" /></svg>
          {{ personal.address }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  personal: { type: Object, required: true },
})
</script>
