<template>
  <div class="flex items-center justify-between w-28">
    <span class="rounded-full bg-blue-80 h-12 w-12 flex-center">
      <slot />
    </span>
    <NuxtLink :to="href" class="w-12 text-left link">
      <Text size="btn" color="text-blue-80">
        {{ props.label }}
      </Text>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ href: string; label: string }>();
</script>
