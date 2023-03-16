import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEAL_COLLECTION } from "../storageConfig"
import { mealsGetAll } from "./mealsGetAll"
import { MealStorageDTO } from "./MealStorageDTO"

export async function mealEdit(id: string, mealEdit: MealStorageDTO) {
  try {
    const storedMeal = await mealsGetAll()

    const updateMeal = storedMeal.map(meal => meal.id === id ? {
      ...meal, 
      name: mealEdit.name, 
      description: mealEdit.description,
      inDiet: mealEdit.inDiet,
      date: mealEdit.date,
      time: mealEdit.time
    } : meal)


    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updateMeal))

  } catch (error) {
    throw error
  }
}