<!-- eslint-disable no-console  -->
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ImageCard from '../components/ImageCard.vue';
import LikedImages from '../helpers/handleLikedImages';

const likedImages = ref(new LikedImages());
const createKey = str => {
  return str.match(/[a-zA-Z]/g).join('');
};

const handleDataFromCard = data => {
  likedImages.value = data;
};
</script>

<template>
  <div class="container pt-36 pb-20">
    <h1 class="h1 text-center pb-10 md:pb-14">Your favourite pictures</h1>
    <ul v-if="likedImages.all.length" class="grid grod-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <li
        v-for="(imgData, index) in likedImages.all"
        v-bind:key="createKey(imgData.title) + index"
        class="max-w-full mb- col-span-1"
      >
        <ImageCard :imgData="imgData" :largeCard="false" @likedImageUpdate="handleDataFromCard" />
      </li>
    </ul>
    <div
      v-else
      class="flex flex-col items-center justify-center p-16 rounded-xl bg-white bg-opacity-10 max-w-5xl mx-auto"
    >
      <h2 class="h2 text-center pb-16">You haven't liked any images yet</h2>
      <RouterLink to="/" class="btn btn__yellow">Browse images</RouterLink>
    </div>
  </div>
</template>
