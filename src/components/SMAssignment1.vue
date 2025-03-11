<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['message']);
const emit = defineEmits(['buttonClicked']);

const handleClick = () => {
  emit('buttonClicked');
};
</script>

<template>
  <div class="child-container">
    <p>{{ message }}</p>
    <button @click="handleClick">click...</button>
    
  </div>
  
</template>

<style scoped>
.child-container {
  text-align: center;
  padding: 20px;
}

button {
  padding: 10px 20px;
  background-color: #1D9A4D;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

