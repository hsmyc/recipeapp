<script setup lang="ts">
import searchicon from '@/components/icons/searchicon.svg'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    withIcon?: boolean
    onChange?: (value: string) => void
  }>(),
  {
    width: '100px',
    height: '48px',
    withIcon: true
  }
)

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  props.onChange && props.onChange(target.value)
}
</script>

<template>
  <div class="container" :style="{ width: props.width, height: props.height }">
    <img v-if="props.withIcon" :src="searchicon" />
    <input class="input" type="text" @input="handleChange" />
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
