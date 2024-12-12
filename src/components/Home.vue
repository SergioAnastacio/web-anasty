// filepath: /E:/source/proyects/web-anasty/src/components/Home.vue
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import PromoBar from "./PromoBar.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import ImageCarousel from "./ImageCarousel.vue";
import LinkShortener from "./LinkShortener.vue";

const route = useRoute();
const shortURL = ref(route.params.shorturl || '');

const fetchShortUrl = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/${shortURL.value}`);
    if (response.status === 200) {
      const originalUrl = response.data.originalUrl;
      window.location.href = originalUrl;
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  if (shortURL.value) {
    fetchShortUrl();
  }
});

watch(() => route.params.shorturl, (newShortUrl) => {
  shortURL.value = newShortUrl || '';
  if (shortURL.value) {
    fetchShortUrl();
  }
});
</script>

<template>
  <PromoBar/>
  <Header/>
  <ImageCarousel />
  <main>
    <LinkShortener />
  </main>
  <Footer/>
</template>

<style scoped>
</style>