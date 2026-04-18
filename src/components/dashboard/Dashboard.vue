<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSecondary = () => {
  router.push('/secondary')
}
</script>

<template>
  <div>Dashboard Component</div>
  <button @click="goToSecondary">Go to Secondary</button>
</template>

<style scoped></style>
