import { defineStore } from 'pinia'

// Define a new store for managing the user's favorite recipes
export const useFavoritesStore = defineStore({
  // Set the ID of the store to 'favorites'
  id: 'favorites',
  // Define the initial state of the store
  state: () => ({
    favorites: [] as string[]
  }),
  // Define a getter to retrieve the user's favorite recipes
  getters: {
    getFavorites(): string[] {
      return this.favorites
    }
  },
  // Define actions to add and remove recipes from the user's favorites
  actions: {
    addFavorite(recipeId: string) {
      // Add the recipe ID to the favorites array
      this.favorites.push(recipeId)
    },
    removeFavorite(recipeId: string) {
      // Find the index of the recipe ID in the favorites array
      const index = this.favorites.indexOf(recipeId)
      // Remove the recipe ID from the favorites array
      this.favorites.splice(index, 1)
    }
  }
})
