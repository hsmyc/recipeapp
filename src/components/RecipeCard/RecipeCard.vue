<script setup lang="ts">
import { ref, type Ref } from 'vue'
import placeholder from '@/components/icons/placeholder.jpg'
import { computed } from 'vue'
import StyledText from '@/components/Styled/StyledText.vue'

const showMeasures: Ref<boolean> = ref(false)
const props = withDefaults(
  defineProps<{
    width?: string
    imageSrc?: string
  }>(),
  {
    width: '20vw',
    imageSrc: placeholder
  }
)

const recipeCardStyle = computed(() => ({
  width: props.width
}))
</script>

<template>
  <div class="recipe-card" :style="recipeCardStyle">
    <div class="image-container">
      <img class="recipe-image" :src="imageSrc" alt="placeholder" />
    </div>
    <div style="padding: var(--size-small)">
      <StyledText type="large" color="light">
        <slot name="cardTitle" />
      </StyledText>
      <div class="card-text">
        <div style="flex: 0.8">
          <StyledText type="medium" color="light"> Prepare </StyledText>
          <StyledText type="small" color="light">
            <slot name="prepare" />
          </StyledText>
        </div>
        <div style="flex: 0.2">
          <StyledText type="medium" color="light"> Ingredients </StyledText>
          <StyledText type="small" color="light">
            <slot name="ingredients" />
          </StyledText>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipe-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--size-small);
  background-color: var(--color-secondary);
  color: var(--color-text-light);
  box-shadow: 0 0 var(--size-small) rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: auto;
  min-width: 300px;
  &:hover {
    transform: scale(1.015);
  }
  overflow: hidden;
}
.image-container {
  display: flex;
  height: 300px;
}
.recipe-image {
  transition: all 0.3s ease-in-out;
  object-fit: cover;
}

.card-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--size-small);
  padding: var(--size-small);
}
</style>
