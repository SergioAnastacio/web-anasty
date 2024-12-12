<script setup lang="ts">
//Obtener el año actual
const currentYear = new Date().getFullYear();
</script>
<template>
   <footer class="bg-gray-100 py-12 px-4">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Empresa</h3>
          <ul class="space-y-2">
            <li><a href="/about" class="hover:underline">Sobre Nosotros</a></li>
            <li><a href="/careers" class="hover:underline">Carreras</a></li>
            <li><a href="/press" class="hover:underline">Prensa</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Recursos</h3>
          <ul class="space-y-2">
            <li><a href="/blog" class="hover:underline">Blog</a></li>
            <li><a href="/developers" class="hover:underline">Desarrolladores</a></li>
            <li><a href="/support" class="hover:underline">Soporte</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Preguntas Frecuentes</h3>
          <ul class="space-y-2">
            <li><a href="/faq" class="hover:underline">¿Cómo funciona?</a></li>
            <li><a href="/pricing" class="hover:underline">Precios</a></li>
            <li><a href="/terms" class="hover:underline">Términos de Servicio</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; {{currentYear}} Anasty. Todos los derechos reservados.</p>
      </div>
    </footer>
</template>
