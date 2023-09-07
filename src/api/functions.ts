import axios from 'axios'

export async function getRandomRecipe() {
  const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
  return response.data
}
