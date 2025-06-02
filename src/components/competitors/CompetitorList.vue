<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CompetitorProfil from './CompetitorProfil.vue'
import ParticipantService from '@/services/ParticipantsService'

import type { Participant } from '@/services/ParticipantsService'

const participants = ref<Participant[]>([])
const isLoading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    isLoading.value = true
    participants.value = await ParticipantService.getAll()
    error.value = null
  } catch (err) {
    console.error('Failed to fetch participants:', err)
    error.value = 'Impossible de charger les compétiteurs.'
    // Gère l'erreur (par exemple, affiche un message à l'utilisateur)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div id="competitors-container-wrapper">
    <div v-if="isLoading" class="loading-message">Chargement des compétiteurs...</div>
    <div v-if="error" class="error-message">{{ error }}</div>
    <div v-if="!isLoading && !error && participants.length === 0" class="no-data-message">
      Aucun compétiteur trouvé.
    </div>
    <div v-if="!isLoading && !error && participants.length > 0" id="competitors-container">
      <CompetitorProfil
        v-for="participant in participants"
        :key="participant.id"
        :participant="participant"
      />
    </div>
  </div>
</template>

<style>
/* Styles pour le wrapper et les messages */
#competitors-container-wrapper {
  padding: 20px;
  /* Tu peux mettre un fond général pour la page ici si besoin */
}

.loading-message,
.error-message,
.no-data-message {
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
  margin: 100px auto;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  max-width: 400px;
}

.error-message {
  color: red;
  border: 1px solid red;
}

/* Tes styles existants pour competitors-container */
#competitors-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 150px 32px; /* gap: row column - La row gap est grande à cause de l'image qui dépasse */
  justify-items: center;
  align-items: start; /* Les items démarrent en haut */
  padding: 40px;
  padding-top: 80px; /* Pour laisser de la place aux images des profils qui dépassent en haut */
  margin: 100px auto;
  background: rgba(0, 56, 32, 0.7);
  border-radius: 8px;
}

@media (max-width: 1275px) {
  /* Ajuste ce breakpoint si nécessaire */
  #competitors-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 120px 24px; /* Ajuste le gap pour les écrans plus petits */
  }
}

@media (max-width: 885px) {
  /* Ajuste ce breakpoint si nécessaire */
  #competitors-container {
    grid-template-columns: 1fr;
    gap: 100px 16px; /* Ajuste le gap */
  }
}
</style>
