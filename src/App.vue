<template>
  <n-layout>
      <n-layout-header class="app-header">
        <div class="website_name">Francisco's Website</div>
        <div class="nav-buttons">
          <n-button quaternary @click="currentView = Home">Home</n-button>
          <n-button quaternary @click="currentView = ProjectSection">Projects</n-button>
          <n-button quaternary @click="currentView = Contact">Contact</n-button>
        </div>
      </n-layout-header>
  <n-layout-content class="content">
       
        <component :is="currentView"></component>
        <SMAssignment1 :message="parentMessage" @buttonClicked="handleButtonClick" />
      </n-layout-content>
    </n-layout>
  <n-layout-footer class="website_footer">    
   <p>Button Clicks: {{ counter }}</p>
   <n-button type="primary" @click="counter++">Click Here!</n-button>
  </n-layout-footer>
  
</template>

<script setup>
import { ref } from 'vue';
import Home from './components/Home.vue';
import ProjectSection from './components/ProjectSection.vue';
import Contact from './components/Contact.vue';
import SMAssignment1 from './components/SMAssignment1.vue';
const currentView = ref(Home);
const counter = ref(0);


const parentMessage = ref("Click for surprise");
const handleButtonClick = () => {
  alert("SURPRISE!!!!");
}; 
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #08211E;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.website_name {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-buttons {
  display: flex;
  gap: 15px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items:center; 
  justify-content: flex-start; 
  padding: 6rem 2rem 2rem;
  width: 100%;
}

.counter-section {
  margin-bottom: 2rem;
}


.page-content {
  max-width: 1200px;
  width: 100%;
  display: flex-start;
  justify-content: center; 
}


.website_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #08211E;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
}
.content {
  padding-bottom: 5rem;
}

</style>
