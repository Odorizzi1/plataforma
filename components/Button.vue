<template>
  <button
    :type="submit ? 'submit' : 'button'"
    class="btn"
    :class="btnClass(type)">
    <slot />
  </button>
</template>

<script setup lang="ts">
type Style = 'primary' | 'secondary' | 'link';

defineProps<{ type: Style; submit?: boolean }>();

function btnClass(style: Style): string {
  return 'btn'.concat('-', style);
}
</script>

<style lang="scss">
.btn {
  @apply py-6 px-4;
  @apply flex justify-center items-center;

  height: 3rem;
  gap: 0.5rem;
  border-radius: 0.25rem;
}

.btn-primary {
  @apply bg-blue-100;
  @apply text-white-100;

  &:hover {
    @apply bg-blue-60;
  }

  &:disabled {
    @apply bg-blue-20;
  }
}

.btn-secondary {
  @apply bg-white-100;
  @apply text-blue-80;
  @apply border-blue-80;

  border-width: 1.5px;

  &:hover {
    @apply border-blue-60;
    @apply text-blue-60;
  }

  &:disabled {
    @apply border-blue-20;
    @apply text-blue-20;
  }
}

.btn-link {
  @apply text-blue-80 hover:underline decoration-blue-80;
}
</style>
