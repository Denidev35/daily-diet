import dayjs from "dayjs";
import { MealStorageDTO } from "../storage/meal/MealStorageDTO";

export function showMealInSection(meals: MealStorageDTO[]) {
  let days: string[] = []

  for (let meal of meals) {
    const day = dayjs(meal.date).format('DD.MM.YYYY')


    if(!days.includes(day)) {
      days.push(day)
    }
  }

  const mealsByDay = days.map(day => {
    const mealsSection = meals
      .filter(meal => dayjs(meal.date).format('DD.MM.YYYY') === day)
      .map(meal => meal)

    return {
      title: day,
      data: mealsSection.reverse()
    }
  })

  return mealsByDay.reverse()
}