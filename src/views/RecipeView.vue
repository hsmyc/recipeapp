<script setup lang="ts">
// Importing required modules and components
import { useRoute } from 'vue-router'
import { ref, type Ref, computed } from 'vue'
import { getRecipeById } from '@/api/functions'
import { extractRecipeData } from '@/utils/functions'
import StyledText from '@/components/Styled/StyledText.vue'
import StyledButton from '@/components/Styled/StyledButton.vue'
import { useFavoritesStore } from '@/stores/favorites'
import favorite from '@/components/icons/favorite.svg'
import unfavorite from '@/components/icons/unfavorite.svg'

// Getting the current route
const route = useRoute()
// Getting the favorites store
const favorites = useFavoritesStore()
// Setting up reactive references
const recipeData: Ref<Recipe> = ref({} as Recipe)
const ingredients: Ref<string[][]> = ref([])

// Function to fetch a recipe by its ID and extract its ingredients
const recipeById = async () => {
  const data = await getRecipeById(route.params.id as string)
  recipeData.value = data.meals[0]
  const matched = extractRecipeData(recipeData.value)
  ingredients.value = matched
}
recipeById()

// Function to add a recipe to favorites
const addToFavorites = () => {
  if (favorites.getFavorites.includes(recipeData.value.idMeal)) {
    favorites.removeFavorite(recipeData.value.idMeal)
  } else favorites.addFavorite(recipeData.value.idMeal)
}

// Computed property to determine the favorite icon based on whether the recipe is in favorites
const favoriteicon = computed(() => {
  if (favorites.getFavorites.includes(recipeData.value.idMeal)) {
    return favorite
  } else {
    return unfavorite
  }
})
</script>

<template>
  <!-- Recipe container -->
  <div class="recipe">
    <div class="recipe-header">
      <!-- Recipe title -->
      <StyledText type="large" font-weight="bold" text-align="left">{{
        recipeData.strMeal
      }}</StyledText>
      <StyledButton @click="addToFavorites" :icon-url="favoriteicon" type="icon"></StyledButton>
    </div>

    <!-- Recipe image -->
    <img :src="recipeData.strMealThumb" :alt="recipeData.strMeal" />

    <!-- Recipe info: Category, Area and Source link -->
    <div class="info">
      <div class="info-field">
        <StyledText type="small" font-weight="bold">Category:</StyledText>
        <StyledText type="small">{{ recipeData.strCategory }}</StyledText>
      </div>
      <div class="info-field">
        <StyledText type="small" font-weight="bold">Area:</StyledText>
        <StyledText type="small">{{ recipeData.strArea }}</StyledText>
      </div>
      <!-- Button leading to the original source of the recipe -->
      <StyledButton type="outlined">
        <a v-if="recipeData.strSource" :href="recipeData.strSource" target="_blank">Source</a>
      </StyledButton>
    </div>

    <!-- Recipe instructions -->
    <StyledText type="small">{{ recipeData.strInstructions }}</StyledText>

    <!-- List of ingredients with their measurements -->
    <ul>
      <li v-for="(ingredient, index) in ingredients" :key="index">
        <StyledText font-weight="bold" type="small">{{ ingredient[0] }}</StyledText>
        <StyledText type="small">{{ ingredient[1] }}</StyledText>
      </li>
    </ul>

    <!-- YouTube video for the recipe, if available -->
    <div v-if="recipeData.strYoutube !== ''" class="video-wrapper">
      <iframe
        width="560"
        height="315"
        :src="recipeData.strYoutube?.replace('watch?v=', 'embed/')"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.recipe {
  max-width: 800px;
  margin: 2rem auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: #ffffff;
}

.recipe img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 1rem;
}
.recipe-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.info {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  gap: var(--size-small);
}

.info-field {
  width: 100%;
  display: flex;
  padding: var(--size-small);
  gap: var(--size-small);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.5rem 0;
  font-size: 1rem;
}
a {
  text-decoration: none;
  color: inherit;
}
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 600px) {
  .info-field {
    display: none;
  }
}
</style>
