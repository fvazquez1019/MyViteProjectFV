<template>
  <h2>Contact Me Here!</h2>
  <form @submit.prevent="submitForm">
    <input v-model="name" placeholder="Name" />
    <input v-model="email" type="email" placeholder="Email" />
    <button type="submit">Submit</button>
  </form>
  <p v-if="submitted">Thank you, {{ name }}!</p>
</template>

<script setup>
import { ref } from 'vue';

const name = ref("");
const email = ref("");
const submitted = ref(false);

const submitForm = () => {
  if (name.value && email.value) {
    submitted.value = true;
  }
};
</script>

<style scoped>
input {
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input:focus {
  border-color: #007bff;
  outline: none;
}
</style>
