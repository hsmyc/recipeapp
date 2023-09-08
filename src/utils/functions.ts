/**
 * Extracts and matches the ingredients and their measures from a given recipe data.
 *
 * This function takes in a recipe object which contains multiple properties
 * that start with "strIngredient" and "strMeasure". These properties are not
 * structured as an array but rather as separate properties in the object.
 * The function extracts these properties, matches each ingredient with its
 * respective measure, and returns them as an array.
 *
 * @param data - The recipe data object.
 * @returns {Array<[string, string]>} An array of pairs where the first item is the ingredient and the second is its measure.
 */

export function extractRecipeData(data: Recipe) {
  // Arrays to hold extracted ingredients and their measures
  const ingredients: Array<[string, string]> = []
  const measures: Array<[string, string]> = []

  // Loop through all properties of the recipe object
  for (const [key, value] of Object.entries(data)) {
    // If a property is an ingredient and is not empty, add it to the ingredients array
    if (key.includes('strIngredient') && value && value !== ' ') {
      ingredients.push([key, value])
    }

    // If a property is a measure for an ingredient and is not empty, add it to the measures array
    if (key.includes('strMeasure') && value && value !== ' ') {
      measures.push([key, value])
    }
  }

  // Match each ingredient with its measure
  const matched = ingredients.map((ingredient, index) => {
    const measure = measures[index]
    return [ingredient[1], measure[1]]
  })

  // Return the array of matched ingredients and their measures
  return matched
}
