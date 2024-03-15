<script setup>
import { RouterView } from 'vue-router';
import HeaderNav from './components/HeaderNav.vue';
</script>

<template>
  <HeaderNav />
  <div class="section">
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>
