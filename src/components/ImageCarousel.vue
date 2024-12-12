<script setup lang="ts">
import { ref, onMounted } from "vue";

const images = ref([
	new URL("../assets/image1.jpg", import.meta.url).href,
	new URL("../assets/image2.jpg", import.meta.url).href,
	new URL("../assets/image3.jpg", import.meta.url).href,
	new URL("../assets/image4.jpg", import.meta.url).href,
	new URL("../assets/image5.jpg", import.meta.url).href,
	new URL("../assets/image6.jpg", import.meta.url).href,
	new URL("../assets/image7.jpg", import.meta.url).href,
	new URL("../assets/image8.jpg", import.meta.url).href,
]);

const currentImage = ref(0);

onMounted(() => {
	setInterval(() => {
		currentImage.value = (currentImage.value + 1) % images.value.length;
	}, 5000);
});
</script>

<template>  
  <div class="relative h-[50vh] overflow-hidden">
    <div v-for="(src, index) in images" :key="src">
      <img
        :src="src"
        :alt="`Hero image ${index + 1}`"
        class="absolute inset-0 w-full h-full object-cover"
        :style="{
          opacity: index === currentImage ? 1 : 0,
          transition: 'opacity 1s ease-in-out'
        }"
      />
    </div>
    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
          Hacemos más cortos tus links para que compartas más
        </h1>
        <p class="text-xl text-white">
          Simplifica tus enlaces y aumenta tu alcance
        </p>
      </div>
    </div>
  </div>
</template>