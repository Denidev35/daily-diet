import { mealsGetAll } from "../storage/meal/mealsGetAll";

export async function calculatePercentage() {
  const meals = await mealsGetAll()
  const totalMeals = meals.length

  const filteredMealsInDiet = meals.filter(meal => meal.inDiet === true)
  const mealsInDiet = filteredMealsInDiet.length

  const filteredMealsOutDiet = meals.filter(meal => meal.inDiet !== true)
  const mealsOutDiet = filteredMealsOutDiet.length

  const percent = filteredMealsInDiet.length / totalMeals * 100

  const mealsReverse = meals.reverse()
  let bestMealSequence = []
  for(let i = 0; i < mealsReverse.length; i++) {
    if(mealsReverse[i].inDiet) {
      bestMealSequence.push(mealsReverse[i])
    } else {
      break
    }
  }
  const bestSequenceInDiet = bestMealSequence.length

  return { percent, mealsInDiet, totalMeals, mealsOutDiet, bestSequenceInDiet }
}