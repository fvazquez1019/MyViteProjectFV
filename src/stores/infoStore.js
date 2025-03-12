import { defineStore } from 'pinia';

export const useInfoStore = defineStore('info', {
  state: () => ({
    webInfo: "Francisco's Website (c) 2025"
  }),
  persist: true //local storage support 
});
