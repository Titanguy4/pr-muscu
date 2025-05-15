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
  gap: 24px;
  justify-items: center;
}

@media (max-width: 900px) {
  #competitors-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  #competitors-container {
    grid-template-columns: 1fr;
  }
}
</style>
