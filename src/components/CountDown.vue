<template>
  <div id="countdown-container">
    <div id="countdown-info">Temps avant la prochaine PR :</div>
    <div class="countdown">
      <div class="countdown-item">
        <div class="countdown-value">{{ days }}</div>
        <div class="countdown-label">jours</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">{{ hours }}</div>
        <div class="countdown-label">heures</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">{{ minutes }}</div>
        <div class="countdown-label">minutes</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">{{ seconds }}</div>
        <div class="countdown-label">secondes</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'CountdownN',
  setup() {
    const eventDate = new Date(Date.now() + 109 * 24 * 60 * 60 * 1000 + 2616 * 60 * 60 * 1000)
    const now = ref(new Date())
    const timerId = ref<number | null>(null)

    const diffInMs = computed(() => Math.max(0, eventDate.getTime() - now.value.getTime()))
    const days = computed(() => Math.floor(diffInMs.value / (1000 * 60 * 60 * 24)))
    const hours = computed(() => Math.floor((diffInMs.value / (1000 * 60 * 60)) % 24))
    const minutes = computed(() => Math.floor((diffInMs.value / (1000 * 60)) % 60))
    const seconds = computed(() => Math.floor((diffInMs.value / 1000) % 60))
    const pad = (n: number) => (n < 10 ? '0' + n : n)

    onMounted(() => {
      timerId.value = window.setInterval(() => {
        now.value = new Date()
      }, 1000)
    })

    onBeforeUnmount(() => {
      if (timerId.value) clearInterval(timerId.value)
    })

    return {
      days,
      hours: computed(() => pad(hours.value)),
      minutes: computed(() => pad(minutes.value)),
      seconds: computed(() => pad(seconds.value)),
    }
  },
})
</script>

<style scoped>
#countdown-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.countdown {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: flex-end;
}
.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.countdown-value {
  color: #f0e4c3;
  font-size: 4.5rem;
  font-weight: bold;
}
.countdown-label {
  font-size: 2rem;
  color: #888;
  margin-top: 0.2rem;
}

#countdown-info {
  text-align: center;
  font-size: 2rem;
  color: #f0e4c3;
}
</style>
