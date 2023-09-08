<script setup lang="ts">
import { computed } from 'vue'
import StyledText from './StyledText.vue'

// Defining a type for the basic properties of the component
type BaseProps = {
  width?: string // Optional width for the button
  height?: string // Optional height for the button
  type?: 'outlined' | 'filled' | 'text' | 'icon' // The appearance style/type of the button
  textType?: StyledText // The type of the text content in the button
  textColor?: StyledTextColor // The color of the text content in the button
  iconUrl?: string | undefined // Optional URL for the icon to display in the button
  iconColor?: string // Optional color for the icon
}

// Setting default properties for the component
const props = withDefaults(defineProps<BaseProps>(), {
  type: 'filled',
  textType: 'medium'
})

// Computed property for the styles based on the type and other properties of the button
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
  justifyContent: props.iconUrl !== 'undefined' ? 'space-between' : 'center',
  padding: props.type === 'icon' ? '0' : 'var(--size-small)'
}))

// Computed property to determine the text color based on the provided properties or the button type
const textColor = computed(() => {
  if (props.textColor) return props.textColor
  return props.type === 'text' ? 'dark' : 'light'
})
</script>

<template>
  <div class="button-container" :style="buttonStyle">
    <img v-if="props.iconUrl" :src="props.iconUrl" />
    <StyledText v-if="props.type !== 'icon'" :color="textColor" type="medium"><slot /> </StyledText>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  align-items: center;
  min-width: fit-content;
  cursor: pointer;
  border-radius: var(--size-small);
}
</style>
