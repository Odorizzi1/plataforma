<template>
  <div class="profile-menu-link">
    <span class="flex items-center justify-center bg-white-100 h-12 w-12">
      <slot />
    </span>
    <Button type="link" class="whitespace-nowrap">
      <Text size="btn" color="text-blue-80">
        {{ label }}
      </Text>
    </Button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
</script>
