<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSecondary = () => {
  router.push('/vue_example/secondary')
}
</script>

<template>
  <div>Dashboard Component</div>
  <button @click="goToSecondary">Go to Secondary</button>
</template>

<style scoped></style>
