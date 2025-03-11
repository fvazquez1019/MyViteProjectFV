<template>
  <h1 v-if="showWelcome"> Welcome to Francisco's Vue Website</h1>
  <button @click="showWelcome = !showWelcome">Show/Hide Message</button>
</template>

<script setup>
import { ref } from 'vue';
const showWelcome = ref(true);
</script>

