<script setup lang="ts">
import CompetitorProfil from './CompetitorProfil.vue'
</script>

<template>
  <div id="competitors-container">
    <CompetitorProfil />
    <CompetitorProfil />
    <CompetitorProfil />
    <CompetitorProfil />
    <CompetitorProfil />
  </div>
</template>

<style>
#competitors-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 150px 32px; /* gap: row column */
  justify-items: center;
  align-items: start;
  padding: 40px;
  margin: 100px auto;
  background: rgba(0, 56, 32, 0.7);
  border-radius: 8px;
}

@media (max-width: 1275px) {
  #competitors-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 885px) {
  #competitors-container {
    grid-template-columns: 1fr;
  }
}
</style>
