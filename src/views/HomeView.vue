<script setup lang="ts">
import { ref, type Ref } from 'vue'
import RecipeCard from '@/components/Recipe/RecipeCard.vue'
import StyledText from '@/components/Styled/StyledText.vue'
import { getRandomRecipe, getRecipeById } from '@/api/functions'
import { extractRecipeData } from '@/utils/functions'
import RecipeSearch from '@/components/Recipe/RecipeSearch.vue'
import { useFavoritesStore } from '@/stores/favorites'
// Set up a ref to hold the random recipe data
const randomRecipe: Ref<Recipe | null> = ref(null)
// Set up a ref to hold the extracted ingredients and measures
const Matched: Ref<Array<any>> = ref([])

// Favorite recipes
const favoriteRecipes: Ref<Array<any>> = ref([])
// Get the favorites store
const favorites = useFavoritesStore()

//Fetch and process favorites recipes
const favoritesRecipes = async () => {
  const id = favorites.getFavorites
  for (let i = 0; i < id.length; i++) {
    const data = await getRecipeById(id[i])
    favoriteRecipes.value.push(data.meals[0])
  }
}
// Fetch and process the random recipe
const getRecipe = async () => {
  const recipe = await getRandomRecipe()
  randomRecipe.value = recipe
  const matched = extractRecipeData(randomRecipe.value!)
  Matched.value = matched
}
// Fetch the random recipe and favorite recipes when the component is mounted
getRecipe()
favoritesRecipes()

console.log(favoriteRecipes.value)
</script>
<template>
  <div class="recipe">
    <StyledText type="large"> Recipes </StyledText>
    <div class="recipe-body">
      <!-- Left part displays the RecipeCard component -->
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
      <!-- Right part displays the RecipeSearch component -->
      <div style="flex: 0.5">
        <RecipeSearch />
      </div>
    </div>
    <!-- Favorites -->
    <div class="favorites">
      <StyledText type="large"> Your Favorites </StyledText>
      <StyledText type="small" v-if="favoriteRecipes.length === 0">No favorites yet</StyledText>
      <div class="favorites-body">
        <RecipeCard
          v-for="(recipe, index) in favoriteRecipes"
          :key="index"
          :id="recipe.idMeal"
          width="300px"
          :image-src="recipe.strMealThumb"
          card-type="small"
        >
          <template v-slot:cardTitle> {{ recipe.strMeal }} </template>
          <template v-slot:prepare>
            <StyledText type="medium" color="light"> Preparation </StyledText>
            {{ recipe.strInstructions.substring(0, 400) }}...
          </template>
          <template v-slot:ingredients>
            <StyledText type="medium" color="light"> Ingredients</StyledText>
            <div v-for="(pair, index) in Matched.slice(0, 10)" :key="index">
              {{ pair[0] }} : {{ pair[1] }}
            </div>
          </template>
        </RecipeCard>
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
.favorites {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-small);
}
.favorites-body {
  display: flex;
  gap: var(--size-large);
  flex-wrap: wrap;
}
@media screen and (max-width: 1000px) {
  .recipe-body {
    flex-direction: column-reverse;
  }
}

@media screen and (max-width: 500px) {
  .favorites {
    width: 100%;
    flex-direction: column;
  }
}
</style>
