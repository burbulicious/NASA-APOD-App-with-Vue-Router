<script setup>
defineProps({
  msg: {
    type: String,
    default: 'Hello'
  }
});
</script>

<template>
  <header class="section">
    <div class="container mx-auto">
      <h1 class="h1 pb-12">{{ msg }}</h1>
      <div class="flex flex-row items-center justify-center">
        <button type="button" class="btn btn__yellow mx-4">Reverse</button>
        <button type="button" class="btn btn__yellow__outlined mx-4">Add !</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  text-align: center;
}
</style>
