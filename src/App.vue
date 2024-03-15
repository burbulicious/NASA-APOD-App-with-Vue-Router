<script setup>
import { ref } from 'vue';

const message = ref('Hello');
</script>

<template>
  <main>
    <div class="section">
      <div class="container mx-auto">
        <h1 class="h1 pb-12 text-center">{{ message }}</h1>
        <div class="flex flex-row items-center justify-center">
          <button type="button" class="btn btn__yellow mx-4">btn</button>
        </div>
      </div>
    </div>
  </main>
</template>
