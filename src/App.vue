<script lang="ts" setup>
// Libraries
import { PiniaColadaDevtools } from '@pinia/colada-devtools'
</script>

<template>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <main>
    <RouterView />
  </main>
  <PiniaColadaDevtools />
</template>

<style scoped></style>
