<script setup lang="ts">
import { computed } from 'vue'

// Define properties with their types for the text styling component
const props = defineProps<{
  fontWeight?: string // Optional font weight (e.g., 'bold')
  type: StyledText // Define the size of the text: 'small', 'medium', or 'large'
  color?: StyledTextColor // Optional text color: 'dark' or 'light'
  textAlign?: 'left' | 'center' | 'right' // Optional text alignment
}>()

// Computed property to determine font size based on the type prop
const fontSize = computed(() => {
  switch (props.type) {
    case 'small':
      return '1rem'
    case 'medium':
      return '1.5rem'
    case 'large':
      return '2rem'
    default:
      return '1rem'
  }
})

// Computed property to determine the text color based on the color prop
const textColor = computed(() => {
  switch (props.color) {
    case 'dark':
      return 'var(--color-text)'
    case 'light':
      return 'var(--color-text-light)'
    default:
      return 'var(--color-text)'
  }
})

// Computed property to determine alignment for the flex container, matching the textAlign prop
const alignItem = computed(() => {
  switch (props.textAlign) {
    case 'left':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'right':
      return 'flex-end'
    default:
      return 'flex-start'
  }
})
</script>

<template>
  <div
    class="text"
    :style="{
      fontSize: fontSize,
      color: textColor,
      alignItems: alignItem,
      fontWeight: props.fontWeight
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.text {
  display: flex;
  flex-direction: column;
  font-size: large;
}
</style>
