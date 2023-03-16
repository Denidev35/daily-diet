import { MealStorageDTO } from "../storage/meal/MealStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newOrUp: {
        type: "add" | "edit",
        meal?: MealStorageDTO
      };
      feedback: {
        status: 'sim' | 'não'
      },
      statistic: {
        diet: 'in' | 'out'
      }
      meal: {
        diet: 'in' | 'out',
        meal: MealStorageDTO
      }
    }
  }
}