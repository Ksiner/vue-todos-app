<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Icon from '@/components/ui/IconComponent.vue'
import { ref } from 'vue'

const collapsed = ref(true)

const openSidebar = () => {
  collapsed.value = false
}

const collapseSidebar = () => {
  collapsed.value = true
}
</script>

<template>
  <aside>
    <section class="sidebar" :class="{ sidebar_collapsed: collapsed, sidebar_opened: !collapsed }">
      <header class="sidebar__header">
        <Icon v-if="collapsed" @click="openSidebar" iconClass="pi-angle-right" />
        <template v-else>
          <p class="sidebar__header-text">Todo App</p>
          <Icon iconClass="pi-angle-left" @click="collapseSidebar" />
        </template>
      </header>
      <nav class="sidebar__content">
        <RouterLink class="sidebar__content-item" to="/">
          <Icon iconClass="pi-align-justify" />
          <span v-if="!collapsed">Home</span>
        </RouterLink>
        <RouterLink class="sidebar__content-item" to="/about">
          <Icon iconClass="pi-book" />
          <span v-if="!collapsed">About</span>
        </RouterLink>
        <RouterLink class="sidebar__content-item" to="/todos">
          <Icon iconClass="pi-list" />
          <span v-if="!collapsed">Todos</span>
        </RouterLink>
      </nav>
    </section>
    <div class="sidebar-dummy" />
    <span v-if="!collapsed" class="sidebar__overlay" @click="collapseSidebar" />
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  display: grid;
  grid-auto-rows: auto 1fr;
  background-color: var(--color-background-soft);
  z-index: 1000;
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;

  &-dummy {
    width: 60px;
    height: 100%;
  }

  &_opened {
    width: 300px;
  }

  &_collapsed {
    width: 60px;
  }

  &__header {
    padding: 0 20px;
    min-height: 65px;
    border-bottom: 1px solid var(--color-border);
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    justify-content: space-between;
    align-items: center;

    &-text {
      color: var(--color-text);
    }
  }

  &__content {
    display: grid;
    align-items: flex-start;
    grid-auto-rows: min-content;
    grid-gap: 8px;
    padding: 20px;

    &-item {
      color: var(--color-text);
      width: 100%;
      min-height: 24px;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: min-content;
      align-items: center;
      grid-gap: 8px;

      &:hover {
        color: var(--color-text-hover);
      }
    }
  }

  &__overlay {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-background-mute-overlay);
  }

  & .icon-wrapper {
    cursor: pointer;

    &:hover {
      color: var(--color-text-hover);
    }
  }
}
</style>
