<script setup lang="ts">
import placeholder from '@/components/icons/placeholder.jpg'
import { computed } from 'vue'
import router from '@/router'
import StyledText from '@/components/Styled/StyledText.vue'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    imageSrc?: string
    imageHeight?: string
    id?: string
    cardType?: 'small' | 'large'
  }>(),
  {
    imageSrc: placeholder,
    imageHeight: '300px'
  }
)

const recipeCardStyle = computed(() => {
  const isSmallScreen = window.matchMedia('(max-width: 800px)').matches

  return {
    width: isSmallScreen ? '100%' : props.width,
    height: isSmallScreen ? 'auto' : props.height
  }
})
const handleClick = () => {
  if (props.id) {
    router.push({ name: 'recipe', params: { id: props.id } })
  }
}

const titleType = computed(() => {
  return props.cardType === 'small' ? 'small' : 'large'
})
</script>

<template>
  <div class="recipe-card" :style="recipeCardStyle" @click="handleClick">
    <div class="image-container" :style="{ height: props.imageHeight }">
      <img class="recipe-image" :src="imageSrc" alt="placeholder" />
    </div>
    <div style="padding: var(--size-small)">
      <StyledText textAlign="center" :type="titleType" color="light">
        <slot name="cardTitle" />
      </StyledText>
      <div class="card-text">
        <div class="card-prepare" style="flex: 1">
          <StyledText type="small" color="light">
            <slot name="prepare" />
          </StyledText>
        </div>
        <div>
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
  max-height: 800px;
  width: 80%; /* Updated from fixed width to percentage */
  margin: 0 auto; /* Center the card */
  overflow: hidden;

  &:hover {
    transform: scale(1.015);
  }
}

.image-container {
  width: 100%;
  display: flex;
}

.recipe-image {
  width: 100%; /* Added for responsiveness */
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

/* Updated Media Queries */
@media (max-width: 1024px) {
  .recipe-card {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .recipe-card {
    width: 95%;
  }
}

@media (max-width: 600px) {
  .recipe-card {
    width: 100%;
    padding: var(--size-small);
  }

  .card-text {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .recipe-card {
    width: 100%;
    padding: var(--size-small) 0;
  }

  .image-container {
    height: 100px;
  }

  .card-text {
    flex-direction: column;
    gap: var(--size-regular);
    align-items: center;
  }
  .card-prepare {
    display: none;
  }
}
</style>
