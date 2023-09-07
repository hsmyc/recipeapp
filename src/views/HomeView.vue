<script setup lang="ts">
import { ref, type Ref } from 'vue'
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue'
import StyledButton from '@/components/Styled/StyledButton.vue'
import StyledSearch from '@/components/Styled/StyledSearch.vue'
import StyledText from '@/components/Styled/StyledText.vue'
import { getRandomRecipe } from '@/api/functions'

const randomRecipe: Ref<Recipe | null> = ref(null)
const Ingredients: Ref<Array<[string, null]>> = ref([])

const getRecipe = async () => {
  const recipe = await getRandomRecipe()
  randomRecipe.value = recipe.meals[0]
  Ingredients.value = Object.entries(recipe.meals[0]).filter(([key, value]) => {
    return key.includes('strIngredient') && value
  }) as Array<[string, null]>
  console.log(randomRecipe.value?.strInstructions)
  console.log(Ingredients.value)
}
getRecipe()
</script>

<template>
  <div class="recipe">
    <StyledText type="large"> Recipes </StyledText>
    <StyledSearch width="60vw" height="48px" />
    <StyledButton :isOutlined="false"> Search</StyledButton>
    <RecipeCard :imageSrc="randomRecipe?.strMealThumb">
      <template v-slot:cardTitle> {{ randomRecipe?.strMeal }} </template>
      <template v-slot:prepare>
        {{ randomRecipe?.strInstructions }}
      </template>
      <template v-slot:ingredients>
        {{ Ingredients.map(([key, value]) => value).join(', ') }}
      </template>
    </RecipeCard>
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
