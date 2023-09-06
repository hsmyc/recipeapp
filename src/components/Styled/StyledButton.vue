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
const divStyle = computed(() => ({
  width: props.width,
  height: props.height,
  border: props.isOutlined ? '1px solid black' : 'none',
  backgroundColor: props.isOutlined ? 'var(--color-primary)' : 'var(--color-secondary)',
  borderRadius: 'var(--size-small)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const textColor = computed(() => {
  return props.isOutlined ? 'var(--color-text)' : 'var(--color-text-light)'
})
</script>

<template>
  <div :style="divStyle">
    <StyledText :color="textColor" type="medium"><slot /></StyledText>
  </div>
</template>

<style scoped></style>
