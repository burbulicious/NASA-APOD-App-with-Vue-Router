<!-- eslint-disable no-console  -->
<script setup>
import { ref } from 'vue';
import RenderImage from './RenderImage.vue';
import LikeBtn from './LikeBtn.vue';
import LikedImages from '../helpers/handleLikedImages';

const { imgData, largeCard } = defineProps({
  imgData: {
    type: Object,
    default: () => ({
      date: '',
      imgUrl: '',
      title: '',
      desc: ''
    })
  },
  largeCard: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(['likedImageUpdate']);

const likedImages = new LikedImages();
const isLiked = ref(!likedImages.all.length ? false : likedImages.all.some(item => item.date === imgData.date));
const showDescription = ref(true);
const isVideo = ref(imgData.imgUrl.startsWith('https://www.youtube.com/' || 'http://www.youtube.com/') || false);

if (!largeCard) {
  showDescription.value = false;
}

const toggleDesc = () => {
  showDescription.value = !showDescription.value;
};

function isDateFound(dateToFind, data) {
  return data.some(obj => obj.date === dateToFind);
}

const toggleIsLiked = event => {
  const clickedDate = event.currentTarget.getAttribute('date');
  isLiked.value = !isLiked.value;
  if (isLiked.value && !isDateFound(clickedDate, likedImages.all)) {
    likedImages.addImage(imgData);
  } else {
    likedImages.removeImage(clickedDate);
  }
  emit('likedImageUpdate', likedImages);
};
</script>

<template>
  <div :class="largeCard ? 'large-card' : 'small-card'">
    <div v-if="imgData.imgUrl" class="img-wrap relative rounded-xl overflow-hidden">
      <RenderImage
        v-if="!isVideo"
        :imgUrl="imgData.imgUrl"
        :altText="imgData.title"
        class="max-h-full max-w-full h-full w-full bg-white bg-opacity-10"
      />
      <iframe
        v-else
        :title="imgData.title"
        :src="imgData.imgUrl"
        width="100%"
        height="100%"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <LikeBtn @click="toggleIsLiked" :isLiked="isLiked" class="absolute z-10" :date="imgData.date" />
    </div>
    <div class="xl:col-span-5 card-content">
      <p class="pb-4 opacity-70">{{ imgData.date }}</p>
      <h2 v-if="largeCard" class="h2 pb-6">{{ imgData.title }}</h2>
      <h2 v-else class="h4 pb-6">{{ imgData.title }}</h2>
      <p v-show="showDescription" class="description">{{ imgData.desc }}</p>
      <button v-show="!largeCard" @click="toggleDesc" type="button" class="btn-inline btn-inline__yellow pt-4">
        {{ showDescription ? 'Hide description' : 'Read description' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.large-card {
  @apply flex flex-col xl:grid xl:gap-8 xl:grid-cols-12 mx-auto p-0  pb-12 xl:p-12 bg-white bg-opacity-10 rounded-2xl items-center h-auto xl:h-[700px];

  .img-wrap {
    @apply xl:col-span-7 xl:h-full h-[320px] md:h-[400px] w-full xl:mb-0 mb-8;

    .like-icon {
      @apply top-8 left-8;
    }
  }

  .card-content {
    @apply px-6;
  }
}

.small-card {
  @apply flex flex-col pb-12 bg-white bg-opacity-10 rounded-2xl items-center max-w-[400px] md:max-w-full mx-auto md:h-full;

  .img-wrap {
    @apply h-auto w-full mb-6 min-h-[200px];

    .like-icon {
      @apply top-4 left-4;
    }
  }

  .card-content {
    @apply px-6 w-full;
  }
}
</style>
