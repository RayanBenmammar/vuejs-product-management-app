<script setup lang="ts">
import TopNavbard from '@/components/layout/TopNavbard.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<template>
  <Sidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbard />
    <main class="felx flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
      <div class="flex items-center">
        <h1 class="text-lg font-semibold md-text-2xl">Page Title</h1>
      </div>
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
