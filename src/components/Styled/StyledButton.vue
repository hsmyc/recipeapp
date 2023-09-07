<script setup lang="ts">
import { computed } from 'vue'
import StyledText from './StyledText.vue'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    isOutlined: boolean
  }>(),
  {
    width: '96px',
    height: '48px',
    isOutlined: false
  }
)
const buttonStyle = computed(() => ({
  width: props.width,
  height: props.height,
  border: props.isOutlined ? '1px solid black' : 'none',
  backgroundColor: props.isOutlined ? 'var(--color-primary)' : 'var(--color-secondary)'
}))

const textColor = computed(() => {
  return props.isOutlined ? 'dark' : 'light'
})
</script>

<template>
  <div class="button-container" :style="buttonStyle">
    <StyledText :color="textColor" type="medium"><slot /></StyledText>
  </div>
</template>

<style scoped>
.button-container {
  cursor: pointer;
  border-radius: var(--size-small);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
