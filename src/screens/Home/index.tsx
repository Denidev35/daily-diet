import { useFocusEffect, useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { useCallback, useState } from "react";
import { Alert, SectionList } from "react-native";

import { Button } from "../../components/Button";
import { EmptyMealList } from "../../components/EmptyMealList";
import { HeaderHome } from "../../components/HeaderHome";
import { Loading } from "../../components/Loading";
import { Meal } from "../../components/Meal";
import {  PercentCard } from "../../components/PercentCard";

import { mealsGetAll } from "../../storage/meal/mealsGetAll";
import { MealStorageDTO } from "../../storage/meal/MealStorageDTO";

import { calculatePercentage } from "../../utils/calculatePercentage";
import { formatTime } from "../../utils/formatTime";
import { showMealInSection } from "../../utils/showMealInSection";

import { Container, Date, MealText} from "./styles";

export interface MealsData {
  title: string
  data: MealStorageDTO[]
}

export function Home() {
  const [mealsSection, setMealsSection] = useState<MealsData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [percent, setPecent] = useState(0)
 
  const navigation = useNavigation()

  async function fetchMeals() {
    try {
      setIsLoading(true)

      const mealData = await mealsGetAll()

      const mealsByDay = showMealInSection(mealData)

      setMealsSection(mealsByDay)

      const { percent } = await calculatePercentage()
      setPecent(percent)


    } catch (error) {
      console.log(error)
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.')
    } finally {
      setIsLoading(false)
    }
  }

  function handleNewMeal() {
    navigation.navigate('newOrUp', { type: 'add' })
  }


  function handleGoToStatistic() {
    navigation.navigate('statistic', percent >= 50 ? {diet: 'in'} : {diet: 'out'})
  }


  function handleGoToMeal(meal: MealStorageDTO) {
    navigation.navigate('meal', meal.inDiet === true ? { diet: 'in', meal } : { diet: 'out', meal })
  }

  
  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );
   

  return (
    <Container>
      <HeaderHome />
      <PercentCard 
        numberPercent={percent ? percent : 0}
        onPress={handleGoToStatistic}
      />
      <MealText>Refeições</MealText>
      <Button 
        title="Nova refeição"
        icon="add"
        onPress={handleNewMeal}
      />
      { isLoading ? <Loading /> :
        <SectionList 
          sections={mealsSection}
          keyExtractor={item  => item.id}
          renderItem={({ item }) => (
            <Meal 
              time={formatTime(item.time)}
              name={item.name}
              inDiet={item.inDiet}
              onPress={() => handleGoToMeal(item)}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Date>{title}</Date>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={mealsSection.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => <EmptyMealList />}
        />
      }
    </Container>
  )
}