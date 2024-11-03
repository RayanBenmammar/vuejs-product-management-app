<script lang="ts">
interface LinkProps {
  title: string
  to?: string
  icon: string
}
</script>

<script setup lang="ts">
const props = defineProps<{
  links: LinkProps[]
}>()

const emits = defineEmits<{
  actionClicked: [string]
}>()

const emitActionClicked = (linkTitle: string) => {
  emits('actionClicked', linkTitle)
}
</script>

<template>
  <template v-for="link in props.links" :key="link.title">
    <RouterLink
      exact-active-class="text-primary bg-muted"
      v-if="link.to"
      :to="link.to"
      class="nav-link"
    >
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </RouterLink>
    <div
      class="nav-link cursor-pointer"
      v-else
      @click="emitActionClicked(link.title)"
    >
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </div>
  </template>
</template>

<style scoped>
.nav-link {
  @apply flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground;
}
</style>
