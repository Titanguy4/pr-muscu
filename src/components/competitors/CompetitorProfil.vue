<script setup lang="ts">
import CompetitorPerformance from './CompetitorPerformance.vue'
</script>

<template>
  <div id="profil-container">
    <div class="profil-image-container">
      <img src="@/assets/images/tanguyProfilTest.png" alt="profil image" />
    </div>
    <div class="profil-details">
      <div>
        <p class="surname-title">Surname</p>
        <p class="description">Description</p>
      </div>
      <div class="competitor-performances">
        <CompetitorPerformance />
        <CompetitorPerformance />
        <CompetitorPerformance />
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
  background-color: var(--color-main-text);
  border: 3px solid black;
  padding: 60px 40px;
  border-radius: 10px;
  margin: 0 auto;
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
  top: -75px;
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
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}

.surname-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 10px auto;
}

.competitor-performances {
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 20px;
}
</style>
