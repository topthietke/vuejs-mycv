<template>
  <div id="dl-bar" v-show="visible">
    <button id="dl-pdf-btn" :disabled="loading" @click="downloadPDF">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
        <path d="M5 20h14v-2H5v2zm7-18v12.17l-3.59-3.58L7 12l5 5 5-5-1.41-1.41L13 14.17V2h-1z" />
      </svg>
      <span>{{ btnText }}</span>
      <div id="dl-progress" :style="{ display: loading ? 'block' : 'none' }">
        <div id="dl-progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(true)
const loading = ref(false)
const btnText = ref('Tải xuống PDF')
const progress = ref(0)

async function downloadPDF() {
  loading.value = true
  visible.value = false

  try {
    const { default: html2canvas } = await import('html2canvas')
    const { jsPDF } = await import('jspdf')

    btnText.value = 'Đang chuẩn bị…'
    progress.value = 10
    await delay(200)

    const A4_W = 210
    const A4_H = 297

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    })

    const pages = Array.from(document.querySelectorAll('.cv-page')).filter(Boolean)
    if (pages.length === 0) throw new Error('Không tìm thấy trang CV nào (.cv-page)')

    for (let i = 0; i < pages.length; i++) {
      progress.value = Math.round(10 + ((i + 1) / pages.length) * 75)
      btnText.value = `Đang render trang ${i + 1}/${pages.length}…`
      await delay(50)

      const patches = patchLists([pages[i]])
      const canvas = await html2canvas(pages[i], {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        removeContainer: true,
        scrollX: -window.scrollX,
        scrollY: -window.scrollY,
        width: pages[i].offsetWidth,
        height: pages[i].offsetHeight,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight,
      })
      restorePatches(patches)

      const imgData = canvas.toDataURL('image/jpeg', 0.95)
      const imgH = (canvas.height / canvas.width) * A4_W

      if (i > 0) pdf.addPage()
      pdf.addImage(imgData, 'JPEG', 0, 0, A4_W, Math.min(imgH, A4_H))
    }

    progress.value = 100
    btnText.value = 'Hoàn tất!'
    pdf.save('CV_Tran_Ngoc_Tu.pdf')
    await delay(800)
  } catch (err) {
    console.error('PDF error:', err)
    btnText.value = 'Có lỗi, thử lại'
  } finally {
    visible.value = true
    loading.value = false
    progress.value = 0
    btnText.value = 'Tải xuống PDF'
  }
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms))
}

function patchLists(pages) {
  const patches = []
  pages.forEach(page => {
    page.querySelectorAll('ul, ol').forEach(list => {
      const prev = list.style.overflow
      list.style.overflow = 'visible'
      patches.push({ el: list, prop: 'overflow', prev })
    })
    page.querySelectorAll('ul li, ol li').forEach(li => {
      const prevOF = li.style.overflow
      const prevPL = li.style.paddingLeft
      li.style.overflow = 'visible'
      const pl = parseFloat(window.getComputedStyle(li).paddingLeft) || 0
      if (pl < 16) li.style.paddingLeft = '16px'
      patches.push({ el: li, prop: 'overflow', prev: prevOF })
      patches.push({ el: li, prop: 'paddingLeft', prev: prevPL })
    })
  })
  return patches
}

function restorePatches(patches) {
  patches.forEach(({ el, prop, prev }) => { el.style[prop] = prev })
}
</script>
