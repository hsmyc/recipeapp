<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  fontWeight?: string
  type: StyledText
  color?: StyledTextColor
  textAlign?: 'left' | 'center' | 'right'
}>()

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
