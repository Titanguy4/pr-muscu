// src/components/CompetitorProfil.vue
<script setup lang="ts">
import CompetitorPerformance from './CompetitorPerformance.vue'
import type { Participant } from '@/services/ParticipantService' // Assure-toi que le chemin est correct

defineProps<{
  participant: Participant
}>()

// Tu peux ajouter une image par défaut si l'image du participant n'est pas disponible
const defaultProfileImage = '@/assets/images/tanguyProfilTest.png' // Garde ton image par défaut
</script>

<template>
  <div id="profil-container">
    <div class="profil-image-container">
      <img :src="defaultProfileImage" :alt="`Profil de ${participant.prenom} ${participant.nom}`" />
    </div>
    <div class="profil-details">
      <div>
        <p class="surname-title">{{ participant.prenom }} {{ participant.nom }}</p>
        <p class="description">Participant de la compétition</p>
      </div>
      <div class="competitor-performances">
        <CompetitorPerformance liftName="Squat" :weight="participant.prSquat" />
        <CompetitorPerformance liftName="Bench" :weight="participant.prBench" />
        <CompetitorPerformance liftName="Deadlift" :weight="participant.prDeadlift" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#profil-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-main-text); /* Assure-toi que cette variable CSS est définie */
  border: 3px solid black;
  padding: 60px 40px;
  padding-top: 80px; /* Augmenté pour laisser de la place à l'image au-dessus */
  border-radius: 10px;
  margin: 0 auto;
  width: 300px; /* Donne une largeur fixe ou min-width/max-width */
  box-sizing: border-box;
  transition: transform 0.25s cubic-bezier(0.4, 2, 0.6, 1);
  cursor: pointer;
}

#profil-container:hover {
  transform: scale(1.05);
  z-index: 20;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
}

.profil-image-container {
  position: absolute;
  top: -75px; /* Ajuste pour que l'image chevauche correctement */
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  z-index: 10;
}

.profil-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profil-details {
  /* z-index: 50; -- Pas forcément nécessaire si la structure est correcte */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0; /* Le padding est déjà sur #profil-container */
  margin-top: 60px; /* Espace pour l'image qui dépasse en haut */
}

.surname-title {
  font-size: 2rem; /* Ajusté pour une meilleure lisibilité dans la carte */
  font-weight: 800;
  margin-top: 10px; /* Ajusté car l'image est au-dessus */
  margin-bottom: 5px;
  color: #111; /* Couleur du nom */
}

.description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 15px;
}

.competitor-performances {
  display: flex;
  justify-content: space-around; /* Ou center */
  flex-direction: row;
  column-gap: 15px; /* Réduit l'espacement pour les cartes plus petites */
  width: 100%; /* Pour que les performances s'étalent bien */
}
</style>
