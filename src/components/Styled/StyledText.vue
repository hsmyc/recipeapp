<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  fontWeight?: string
  type: 'large' | 'medium' | 'small'
  color?: string
}>()

const fontSize = computed(() => {
  switch (props.type) {
    case 'small':
      return '0.5rem'
    case 'medium':
      return '1rem'
    case 'large':
      return '1.5rem'
    default:
      return '1rem'
  }
})
</script>

<template>
  <div class="text" :style="{ fontSize: fontSize, color: props.color }">
    <slot />
  </div>
</template>

<style scoped>
.text {
  font-size: large;
  color: var(--color-text);
}
</style>
