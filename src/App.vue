<script setup lang="ts">
import TopNavbard from '@/components/layout/TopNavbard.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
</script>

<template>
  <Sidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbard />
    <main>
      <RouterView />
    </main>
  </div>
</template>
