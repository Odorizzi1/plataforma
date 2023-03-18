<template>
  <div class="toast" :class="applyBorderStyle(type)">
    <CheckCircle2 v-if="type == 'success'" fill="#00b464" color="#fff" />
    <Info v-if="type == 'warning'" fill="#ffc832" color="#fff" />
    <XCircle v-if="type == 'error'" fill="#fa3232" color="#fff" />
    <Text size="lg" color="text-black-80">
      {{ message }}
    </Text>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle2, Info, XCircle } from 'lucide-vue-next';

type Toast = 'success' | 'error' | 'warning';

interface Props {
  type: Toast;
  message: string;
}

defineProps<Props>();

function applyBorderStyle(type: Toast): string {
  if (type == 'success') return 'border-green-40';
  if (type == 'warning') return 'border-yellow-40';

  return 'border-red-40';
}
</script>

<style lang="scss">
.toast {
  @apply flex justify-evenly items-center;
  @apply border-2;
  padding: 0.75rem;
  width: 18rem;
  height: 3rem;
  border-radius: 0.25rem;
  position: absolute;
  top: 7rem;
  right: 0.4rem;
  transform: translateX(calc(100% + 0.4rem));
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35);
}

.toast-active {
  transform: translateX(0);
}
</style>
