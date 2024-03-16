<script setup>
defineProps({
  imgUrl: {
    type: String,
    default: ''
  },
  altText: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="">
    <img :src="imgUrl" :alt="altText" class="max-w-full max-h-full h-full w-full object-contain" />
  </div>
</template>
