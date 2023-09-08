import axios from 'axios'

/**
 * Fetches a random recipe from TheMealDB API.
 *
 * @returns {Promise<Object>} An object containing details of the random recipe.
 */
export async function getRandomRecipe() {
  // Make an API call to fetch a random recipe
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)

  // Extract the meal object from the returned data
  const data = response.data.meals[0]

  // Return the extracted meal data
  return data
}

/**
 * Searches for recipes based on a provided query string.
 *
 * @param m - The query string used to search for recipes.
 * @returns {Promise<Object>} An object containing the search results.
 */
export async function recipeSearch(m: string) {
  // Make an API call to search for recipes based on the provided query string
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${m}`)

  // Return the full response data, which includes an array of matching meals
  return response.data
}

/**
 * Fetches recipe details based on a provided recipe ID.
 *
 * @param id - The ID of the recipe to retrieve details for.
 * @returns {Promise<Object>} An object containing details of the recipe with the provided ID.
 */
export async function getRecipeById(id: string) {
  // Make an API call to fetch details of a recipe by its ID
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

  // Return the full response data, which includes details of the specified meal
  return response.data
}
