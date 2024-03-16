<!-- eslint-disable no-console  -->
<script setup>
import { ref, watch } from 'vue';
import fetchImageData from '../api/fetchPictures';
import getToday from '../helpers/getDate';
import ImageCard from '../components/ImageCard.vue';

const today = ref(getToday());
const date = ref(getToday());
const imgData = ref({
  date: '',
  imgUrl: '',
  title: '',
  desc: ''
});

const displayImage = async newDate => {
  imgData.value.date = '';
  imgData.value.imgUrl = '';
  imgData.value.title = '';
  imgData.value.desc = '';
  try {
    const data = await fetchImageData(newDate);
    imgData.value.date = data.date;
    imgData.value.imgUrl = data.url;
    imgData.value.title = data.title;
    imgData.value.desc = data.explanation;
  } catch (error) {
    console.error('Error:', error);
  }
};

displayImage(date.value);

watch(date, async newDate => {
  await displayImage(newDate);
});
</script>

<template>
  <div class="container pt-36 pb-20 xl:h-[100vh]">
    <div class="flex flex-col md:flex-row justify-between items-center pb-10 md:pb-14">
      <h1 class="h1 grow-0 md:pr-8 pb-8 md:pb-0 text-center md:text-left">Astronomy picture of the day</h1>
      <label class="date-picker flex-none">
        <span>Select a date</span>
        <input v-model="date" type="date" :max="today" />
      </label>
    </div>
    <p v-if="!imgData.imgUrl" class="text-center h3">Loading image...</p>
    <ImageCard :imgData="imgData" v-else />
  </div>
</template>
<style scoped>
.date-picker {
  @apply flex flex-col md:flex-row items-center;

  span {
    @apply pr-4 text-sm pb-3 md:pb-0;
  }
}

input {
  @apply text-white py-3 px-6 min-w-60 bg-white bg-opacity-10 rounded text-opacity-70;

  &[type='date']::-webkit-calendar-picker-indicator {
    @apply bg-white rounded bg-opacity-70;
  }
}
</style>
