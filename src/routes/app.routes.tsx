import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Feedback } from '../screens/FeedBack'
import { Home } from '../screens/Home'
import { Meal } from '../screens/Meal'
import { NewOrEditMeal } from '../screens/NewOrEditMeal'
import { Statistic } from '../screens/Statistic'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='home'
        component={Home}
      />
      <Screen 
        name='newOrUp'
        component={NewOrEditMeal}
      />
      <Screen 
        name='feedback'
        component={Feedback}
      />
      <Screen 
        name='statistic'
        component={Statistic}
      />
      <Screen 
        name='meal'
        component={Meal}
      />
    </Navigator>
  )
}