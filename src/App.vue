<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/layout/HeaderComponent.vue'
import FooterComponent from './components/layout/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <RouterView />
  </div>
  <FooterComponent />
</template>
