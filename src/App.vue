<script lang="ts" setup>
// Libraries
import { PiniaColadaDevtools } from '@pinia/colada-devtools'
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
  <PiniaColadaDevtools />
</template>

<style scoped></style>
