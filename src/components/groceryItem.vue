<script setup>
defineProps({
  item: {
    type: Object,
    default: null
  }
});
</script>

<template>
  <li class="pb-3">
    <p>{{ item.name }}</p>
  </li>
</template>
