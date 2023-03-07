<template>
  <input
    :class="{
      'input-error': !!errorMessage,
      'input-default': isEmpty(inputvalue),
      'input-sucess': meta.valid,
      'input-warning': !meta.valid,
    }"
    class="input"
    v-bind="props"
    @input="handleChange"
    @blur="handleBlur"
    :name="name"
    :value="inputvalue"
  />
  <!-- <span class="dot" v-if="!isEmpty(inputvalue.value)">
       <Info v-if="!meta.valid" />
       <CheckCircle2 v-else-if="meta.valid" />
       <XCircle v-else-if="!!errorMessage" />
       </span> -->
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { CheckCircle2, Info, XCircle } from "lucide-vue-next";
// import { vMaska } from "maska";

interface Props {
  type: string;
  placeholder?: string;
  value?: string;
  name: string;
  mask?: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: "",
});

const name = toRef(props, "name");

const {
  value: inputvalue,
  errorMessage,
  meta,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<style lang="scss">
.input {
  @apply text-black-80 border-black-10;

  border-radius: 0.25rem;
  border-width: 1px;
  gap: 0.75rem;
  padding: 0.75rem;

  &::placeholder {
    @apply text-black-40;
  }
}

.input:disabled {
  @apply text-black-20 bg-black-5;
  @apply border-black-20 focus:border-black-20;
}

.input-default {
  @apply border-black-10 focus:border-black-10;
}

.input-sucess {
  @apply text-green-100;
  @apply border-green-40 focus:border-green-40;
}

.input-error {
  @apply text-red-100;
  @apply border-red-40 focus:border-red-40;
}

.input-warning {
  @apply border-black-10;
}

.dot {
  @apply h-4 w-4;

  right: 43%;
  top: 49.6%;
  position: absolute;
  display: inline-block;
  border-radius: 50%;
}
</style>
