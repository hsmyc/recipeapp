<script setup lang="ts">
import { computed } from 'vue'
import StyledText from './StyledText.vue'

type BaseProps = {
  width?: string
  height?: string
  type?: 'outlined' | 'filled' | 'text'
  textType?: StyledText
  textColor?: StyledTextColor
  iconUrl?: string | undefined
}

const props = withDefaults(defineProps<BaseProps>(), {
  width: '96px',
  height: '48px',
  type: 'filled',
  textType: 'medium'
})
const buttonStyle = computed(() => ({
  width: props.width,
  height: props.height,
  border: props.type === 'outlined' ? '1px solid black' : props.type === 'filled' ? 'none' : 'none',
  backgroundColor:
    props.type === 'outlined'
      ? 'var(--color-primary)'
      : props.type === 'filled'
      ? 'var(--color-secondary)'
      : 'transparent',
  justifyContent: props.iconUrl !== 'undefined' ? 'space-between' : 'center'
}))

const textColor = computed(() => {
  if (props.textColor) return props.textColor
  return props.type === 'text' ? 'dark' : 'light'
})
</script>

<template>
  <div class="button-container" :style="buttonStyle">
    <img v-if="props.iconUrl" :src="props.iconUrl" />
    <StyledText :color="textColor" type="medium"><slot /> </StyledText>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  align-items: center;
  min-width: fit-content;
  padding: var(--size-small);
  cursor: pointer;
  border-radius: var(--size-small);
}
</style>
