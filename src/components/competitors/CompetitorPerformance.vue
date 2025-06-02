// src/components/CompetitorPerformance.vue
<script setup lang="ts">
defineProps<{
  liftName: string
  weight: number
}>()
</script>

<template>
  <div class="performance">
    <h3>{{ liftName }}</h3>
    <div>{{ weight }}kg</div>
  </div>
</template>

<style scoped>
.performance {
  /* Ajoute ici tes styles spécifiques si nécessaire, ou garde ceux du parent */
  text-align: center;
}
.performance h3 {
  font-size: 1.2rem; /* Ajuste la taille comme souhaité */
  margin-bottom: 5px;
  color: #333; /* Couleur du titre du lift */
}
.performance div {
  font-size: 1.1rem; /* Ajuste la taille comme souhaité */
  font-weight: bold;
  color: var(--color-primary); /* Utilise une variable de couleur si disponible */
}
</style>
