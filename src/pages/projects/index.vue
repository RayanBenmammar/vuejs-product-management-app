<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'

let projects = ref()
;(async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('id, name, slug, status, collaborators')
    .order('created_at', { ascending: false })

  if (error) return console.error(error)

  projects.value = data
})()
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Go to Home Page</RouterLink>
  </div>
</template>

<style scoped></style>
