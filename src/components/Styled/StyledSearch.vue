<script setup lang="ts">
import searchicon from '@/components/icons/searchicon.svg'

// Define properties with their types for the search input component
const props = withDefaults(
  defineProps<{
    width?: string // Optional width for the container
    height?: string // Optional height for the container
    withIcon?: boolean // Boolean to determine if the search icon should be displayed
    inputText: string // Input text value
    onChange?: (value: string) => void // Optional callback to trigger on input value change
  }>(),
  {
    width: '100px', // Default width
    height: '48px', // Default height
    withIcon: true // Show icon by default
  }
)

// Function to handle input change and trigger the optional onChange callback
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  props.onChange && props.onChange(target.value) // If onChange is provided, call it with new input value
}
</script>

<template>
  <div class="container" :style="{ width: props.width, height: props.height }">
    <img v-if="props.withIcon" :src="searchicon" />
    <input class="input" type="text" @input="handleChange" :placeholder="props.inputText" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--size-small);
  background-color: white;
  padding: var(--size-small);
}
.input {
  border: none;
  outline: none;
  flex: 1;
  min-width: fit-content;
}
</style>
