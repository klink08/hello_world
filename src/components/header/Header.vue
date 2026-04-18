<script lang="ts" setup>
// Libraries
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Components
import IconVueLogo from '@/icons/IconVueLogo.vue'

// Stores
import { useUserStore } from '@/stores/user/user.js'

const router = useRouter()
const userStore = useUserStore()

const goToHome = () => {
  router.push('/home')
}

onMounted(async () => {
  await userStore.fetchUser()
})
</script>

<template>
  <main>
    <IconVueLogo />
    <div>First Name: {{ userStore.firstName }}</div>
    <div>Last Name: {{ userStore.lastName }}</div>
    <div>Full Name: {{ userStore.fullName }}</div>
    <button @click="goToHome">Go to Home</button>
  </main>
</template>

<style scoped></style>
