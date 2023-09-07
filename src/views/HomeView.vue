<script setup lang="ts">
import { ref, type Ref } from 'vue'
import RecipeCard from '@/components/Recipe/RecipeCard.vue'
import StyledText from '@/components/Styled/StyledText.vue'
import { getRandomRecipe } from '@/api/functions'
import { extractRecipeData } from '@/utils/functions'
import RecipeSearch from '@/components/Recipe/RecipeSearch.vue'
const randomRecipe: Ref<Recipe | null> = ref(null)
const Matched: Ref<Array<any>> = ref([])
const getRecipe = async () => {
  const recipe = await getRandomRecipe()
  randomRecipe.value = recipe
  const matched = extractRecipeData(randomRecipe.value!)
  Matched.value = matched
}

getRecipe()
</script>

<template>
  <div class="recipe">
    <StyledText type="large"> Recipes </StyledText>
    <div class="recipe-body">
      <div style="flex: 0.5">
        <RecipeCard
          :id="randomRecipe?.idMeal"
          width="500px"
          :image-src="randomRecipe?.strMealThumb"
        >
          <template v-slot:cardTitle> {{ randomRecipe?.strMeal }} </template>
          <template v-slot:prepare>
            <StyledText type="medium" color="light"> Preparation </StyledText>
            {{ randomRecipe?.strInstructions.substring(0, 400) }}...
          </template>
          <template v-slot:ingredients>
            <StyledText type="medium" color="light"> Ingredients</StyledText>
            <div v-for="(pair, index) in Matched.slice(0, 10)" :key="index">
              {{ pair[0] }} : {{ pair[1] }}
            </div>
          </template>
        </RecipeCard>
      </div>
      <div style="flex: 0.5">
        <RecipeSearch />
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-small);
}
.recipe-body {
  display: flex;
  gap: var(--size-large);
}
@media screen and (max-width: 1000px) {
  .recipe-body {
    flex-direction: column-reverse;
  }
}
</style>
