export function extractRecipeData(data: Recipe) {
  const ingredients: Array<[string, string]> = []
  const measures: Array<[string, string]> = []

  for (const [key, value] of Object.entries(data)) {
    if (key.includes('strIngredient') && value && value !== ' ') {
      ingredients.push([key, value])
    }
    if (key.includes('strMeasure') && value && value !== ' ') {
      measures.push([key, value])
    }
  }
  const matched = ingredients.map((ingredient, index) => {
    const measure = measures[index]

    return [ingredient[1], measure[1]]
  })
  return matched
}
