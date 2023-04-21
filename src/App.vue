<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavSidebar from './components/navigation/NavSidebar.vue'
</script>

<template>
  <NavSidebar />
  <main class="page-content">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.page-content {
  position: relative;
}
</style>
