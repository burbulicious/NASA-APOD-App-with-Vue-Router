<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <header class="container px-5 py-6 md:py-8 lg:py-10 flex w-full items-center justify-center">
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="nav-btn">Home</RouterLink>
        <RouterLink to="/favourites" class="nav-btn">My favourites</RouterLink>
      </nav>
    </div>
  </header>
</template>
