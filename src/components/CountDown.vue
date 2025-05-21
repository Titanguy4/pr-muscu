<template>
  <div id="countdown-container">
    <div v-if="error">{{ error }}</div>
    <template v-else>
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
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'
import CompetitionsService, { type Competition } from '@/services/CompetitionsService'

export default defineComponent({
  name: 'CountdownN',
  setup() {
    const now = ref(new Date())
    const eventDate = ref<Date | null>(null)
    const timerId = ref<number | null>(null)
    const error = ref('')

    // Appel API pour récupérer la prochaine compétition
    const fetchNextCompetition = async () => {
      try {
        const next: Competition = await CompetitionsService.getNext()
        eventDate.value = new Date(next.date)
      } catch (err) {
        console.error(err) // A SUPPRIMER
        error.value = 'Impossible de charger la prochaine compétition.'
      }
    }

    const diffInMs = computed(() => {
      if (!eventDate.value) return 0
      return Math.max(0, eventDate.value.getTime() - now.value.getTime())
    })

    const days = computed(() => Math.floor(diffInMs.value / (1000 * 60 * 60 * 24)))
    const hours = computed(() => Math.floor((diffInMs.value / (1000 * 60 * 60)) % 24))
    const minutes = computed(() => Math.floor((diffInMs.value / (1000 * 60)) % 60))
    const seconds = computed(() => Math.floor((diffInMs.value / 1000) % 60))
    const pad = (n: number) => (n < 10 ? '0' + n : n)

    onMounted(() => {
      fetchNextCompetition()
      timerId.value = window.setInterval(() => {
        now.value = new Date()
      }, 1000)
    })

    onBeforeUnmount(() => {
      if (timerId.value) clearInterval(timerId.value)
    })

    return {
      error,
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
