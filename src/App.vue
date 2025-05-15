<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/layout/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <RouterView />
  </div>
</template>
