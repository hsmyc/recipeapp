import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore({
  id: 'favorites',
  state: () => ({
    favorites: [] as string[]
  }),
  getters: {
    getFavorites(): string[] {
      return this.favorites
    }
  },
  actions: {
    addFavorite(recipeId: string) {
      this.favorites.push(recipeId)
    },
    removeFavorite(recipeId: string) {
      const index = this.favorites.indexOf(recipeId)
      this.favorites.splice(index, 1)
    }
  }
})
