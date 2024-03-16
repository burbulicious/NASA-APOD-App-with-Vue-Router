<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <header class="w-full h-fit fixed top-0 left-0 z-20 bg-black bg-opacity-50">
    <div class="container px-5 py-6 md:py-8 lg:py-10 flex w-full items-center justify-center">
      <nav>
        <RouterLink to="/" class="nav-btn">Home</RouterLink>
        <RouterLink to="/favourites" class="nav-btn">My favourites</RouterLink>
      </nav>
    </div>
  </header>
</template>
