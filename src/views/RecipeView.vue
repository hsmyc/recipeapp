<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue'
import StyledButton from '@/components/Styled/StyledButton.vue'
import StyledSearch from '@/components/Styled/StyledSearch.vue'
import StyledText from '@/components/Styled/StyledText.vue'
</script>

<template>
  <div class="recipe">
    <StyledText type="large"> Recipes </StyledText>
    <StyledSearch width="60vw" height="48px" />
    <StyledButton :isOutlined="false"> Search</StyledButton>
    <RecipeCard />
  </div>
</template>

<style scoped>
.recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-small);
}
</style>
