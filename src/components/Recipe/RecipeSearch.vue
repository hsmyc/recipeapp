<script setup lang="ts">
import StyledSearch from '@/components/Styled/StyledSearch.vue'
import searchicon from '@/components/icons/searchicon.svg'
import { recipeSearch } from '@/api/functions'
import RecipeCard from '@/components/Recipe/RecipeCard.vue'
import { ref, type Ref } from 'vue'

const searchResult: Ref<Recipe[] | null | undefined> = ref()

const searchModal: Ref<Boolean> = ref(false)

// Function to handle search requests. When called, it queries the recipeSearch API.
const handleSearch = async (e: string) => {
  const value = await recipeSearch(e)
  searchResult.value = value.meals
  searchModal.value = true
}

// Function to close the search modal
const closeSearchModal = () => {
  searchModal.value = false
}
</script>

<template>
  <div class="recipe-search">
    <!-- Render the StyledSearch component with the handleSearch function as the onChange event handler -->
    <StyledSearch
      :on-change="handleSearch"
      width="60vw"
      height="48px"
      :with-icon="true"
      :icon-url="searchicon"
      input-text="Search for recipes"
      @click="closeSearchModal"
    />

    <!-- Modal to display search results -->
    <div v-if="searchModal" class="search-modal">
      <!-- Loop through search results and display a recipe card for each item -->
      <RecipeCard
        :id="item.idMeal"
        width="100px"
        height="200px"
        imageHeight="100px"
        v-for="item in searchResult"
        :key="item.idMeal"
        :recipe="item"
        :image-src="item.strMealThumb"
        card-type="small"
      >
        <template v-slot:cardTitle> {{ item.strMeal.substring(0, 20) }} </template>
      </RecipeCard>
    </div>
  </div>
</template>

<style scoped>
.recipe-search {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--size-small);
}

.search-modal {
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-small);
}

@media (min-width: 800px) {
  .search-modal {
    justify-content: center;
  }
}
</style>
