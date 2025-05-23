<script setup>
import { useUserStore } from "@/stores/user.js";

const userStore = useUserStore();
</script>

<template>
  <main>
    <div>{{userStore.firstName}}</div>
    <div>{{userStore.lastName}}</div>
    <div>{{userStore.fullName()}}</div>
  </main>
</template>

<style scoped>

</style>
