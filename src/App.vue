<script lang="ts" setup>
// Libraries
import { onMounted } from 'vue'

// Stores
import { useFeatureFlagStore } from '@/stores/featureFlag/featureFlag.js'

const featureFlagStore = useFeatureFlagStore()

onMounted(() => {
  featureFlagStore.setAllFlags({
    isDarkMode: true,
  })
})
</script>

<template>
  <h1>Vue Router</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/secondary">Go to Secondary</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
