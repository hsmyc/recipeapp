<script setup lang="ts">
import { computed } from 'vue'
import StyledText from './StyledText.vue'

const props = withDefaults(
  defineProps<{
    isOutlined: boolean
    textType?: StyledText
    textColor: StyledTextColor
  }>(),
  {
    isOutlined: false,
    textType: 'medium',
    textColor: 'light'
  }
)

const buttonStyle = computed(() => ({
  border: props.isOutlined ? '1px solid black' : 'none'
}))
</script>

<template>
  <StyledText :type="textType" :style="buttonStyle" :color="props.textColor"><slot /></StyledText>
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
