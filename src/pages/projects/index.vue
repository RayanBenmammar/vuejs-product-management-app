<script setup lang="ts">
import { projectsQuery } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/projectsColumns'
import type { Projects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader
await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

<style scoped></style>
