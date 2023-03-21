<template>
    <div class="checkbox-container">
      <input type="checkbox" :checked="checked" :disabled="disabled" @change="onInputChange">
      <label>{{ label }}</label>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      label: {
        type: String,
        required: true
      },
      checked: {
        type: Boolean,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onInputChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.$emit('update:checked', target.checked);
      }
    }
  });
  </script>
  
  <style scoped>
  .checkbox-container input[type="checkbox"] {
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    padding: 0;
    margin: 0;
    width: 1.2em;
    height: 1.2em;
    vertical-align: middle;
    border: 1px solid #E7E7E7;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease-in-out;
  }
  
  .checkbox-container input[type="checkbox"]:checked {
    border: 1px solid #99C1E9;
    background-color: #0064C8;
  }
  
  .checkbox-container input[type="checkbox"]:focus {
    outline: none;
    box-shadow: none;
  }
  
  .checkbox-container input[type="checkbox"]:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  