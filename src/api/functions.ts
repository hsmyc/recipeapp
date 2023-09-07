import axios from 'axios'

export async function getRandomRecipe() {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
  const data = response.data.meals[0]
  return data
}

export async function recipeSearch(e: string) {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`)
  return response.data
}

export async function getRecipeById(id: string) {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  return response.data
}
