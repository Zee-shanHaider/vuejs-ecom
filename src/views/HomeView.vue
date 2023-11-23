<script setup lang="ts">
import { defineComponent } from 'vue';
import TheNavbar from '../components/UI/TheNavbar.vue';
import TheTopBar from '@/components/UI/TheTopBar.vue';

defineComponent({
  TheNavbar,
  TheTopBar
})
</script>

<template>
  <main>
    <TheTopBar />
  </main>
</template>
