<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const originalUrl = ref("");
const shortUrl = ref("");

const handleSubmit = async (e: Event) => {
	e.preventDefault();
	try {
    const {data} = await axios.post('http://localhost:3000/shorten', {
      originalUrl: originalUrl.value
    });
    shortUrl.value = data.url.shortUrl;
    //shortUrl.value = response.data.url.originalUrl;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <section class="py-16 px-4">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Acorta tu enlace</h2>
      <form @submit="handleSubmit" class="space-y-4 w-full">
        <input
          type="url"
          placeholder="Ingresa el enlace largo"
          v-model="originalUrl"
          required
          class="input w-full text-center py-3"
        />
        <button type="submit" class="button w-full">Acortar Enlace</button>
      </form>
      <div v-if="shortUrl" class="mt-8 p-4 bg-secondary rounded">
        <p class="text-sm font-medium mb-2">Enlace acortado:</p>
        <a :href="shortUrl" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline break-all">
          {{ shortUrl }}
        </a>
      </div>
    </div>
  </section>
</template>