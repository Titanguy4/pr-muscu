<script setup lang="ts">
import CountDown from '@/components/CountDown.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import CompetitorList from '@/components/competitors/CompetitorList.vue'
import QuickPronoForm from '@/components/QuickPronoForm.vue'
</script>

<template>
  <div id="home-container">
    <div id="top-page">
      <CountDown />
      <FontAwesomeIcon
        id="double-arrows"
        :icon="faAngleDoubleDown"
        size="2xl"
        style="color: #f0e4c2"
      />
    </div>

    <CompetitorList />

    <div id="home-quickpronoform-container">
      <QuickPronoForm />
    </div>
  </div>
</template>

<style>
#top-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
}

#top-page::before {
  content: '';
  position: absolute;
  left: -100px;
  bottom: 0;
  width: 700px;
  height: 100%;
  background-image: url('@/assets/images/countdown-background-left.png');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 700px auto;
  opacity: 0.1;
  pointer-events: none;
  z-index: -1;
}

#top-page::after {
  content: '';
  position: absolute;
  right: -100px;
  bottom: 0;
  width: 700px;
  height: 100%;
  background-image: url('@/assets/images/countdown-background-right.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 700px auto;
  opacity: 0.1;
  pointer-events: none;
  z-index: -1;
}

#double-arrows {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}

#home-quickpronoform-container {
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
  min-height: 50vh;
  padding: 150px 40px;
  background-color: var(--color-background);
  transform: translate(-50%);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
