<script setup lang="ts">
defineProps<{
  iconClass: string
}>()
</script>

<template>
  <div class="icon-wrapper">
    <i class="pi" :class="iconClass" />
  </div>
</template>

<style scoped lang="scss">
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  width: 24px;
}
</style>
