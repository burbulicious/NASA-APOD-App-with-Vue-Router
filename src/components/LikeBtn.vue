<!-- eslint-disable no-console  -->
<script setup>
const { isLiked } = defineProps({
  isLiked: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="like-icon" :class="{ active: isLiked }" :title="isLiked ? 'Remove from favourites' : 'Add to favourites'">
    <v-icon name="bi-suit-heart-fill" class="w-7 h-7" />
  </div>
</template>

<style scoped>
.like-icon {
  @apply p-2 bg-white rounded-lg bg-opacity-20 flex items-center justify-center cursor-pointer transition-all duration-300;

  &.active,
  &:hover {
    @apply bg-opacity-100 text-yellow;
  }
}
</style>
