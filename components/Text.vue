<template>
  <h1 v-if="size == 'h1'" :class="getTextStyle(size, color)"><slot /></h1>
  <h2 v-if="size == 'h2'" :class="getTextStyle(size, color)"><slot /></h2>
  <h3 v-if="size == 'h3'" :class="getTextStyle(size, color)"><slot /></h3>
  <h4 v-if="size == 'h4'" :class="getTextStyle(size, color)"><slot /></h4>
  <h5 v-if="size == 'h5'" :class="getTextStyle(size, color)"><slot /></h5>
  <span v-if="size == 'btn'" :class="getTextStyle(size, color)"><slot /></span>
  <p v-if="size == 'lg'" :class="getTextStyle(size, color)"><slot /></p>
  <p v-if="size == 'md'" :class="getTextStyle(size, color)"><slot /></p>
  <p v-if="size == 'sm'" :class="getTextStyle(size, color)"><slot /></p>
</template>

<script lang="ts">
const sizes = ["h1", "h2", "h3", "h4", "h5", "btn", "lg", "md", "sm"];

function getTextStyle(size: string, color: string): string {
  const textColor = "text".concat("-", color);

  const textStyles = {
    h1: "text-3xl leading-10 font-bold",
    h2: "text-2xl leading-9 font-bold",
    h3: "text-xl leading-8 font-bold",
    h4: "text-lg leading-7 font-medium",
    h5: "text-base leading-4 font-medium",
    btn: "text-base leading-4 font-medium",
    lg: "text-lg leading-6 font-regular",
    md: "text-sm leading-5 font-regular",
    sm: "text-xs leading-4 font-regular",
  };

  return textColor.concat(" ", textStyles[size]);
}

export default defineComponent({
  props: {
    size: {
      type: String,
      required: true,
      validator(value) {
        return sizes.includes(value);
      },
    },
    color: {
      type: String,
      default(_prop) {
        return "black-80";
      },
    },
  },
  methods: {
    getTextStyle,
  },
});
</script>
