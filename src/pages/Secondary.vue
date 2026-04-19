<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/vue_example')
}
</script>

<template>
  <div>Secondary Page</div>
  <button @click="goToHome">Go to Home</button>
</template>

<style scoped></style>
