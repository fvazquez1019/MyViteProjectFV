<template>
  <h2>Projects</h2>
  <p v-if="projects.length === 0">No projects available currently.</p>
  <ul>
    <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([

]);
</script>
