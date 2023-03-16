import { TouchableOpacityProps } from "react-native";
import { Container, Hours, MealTitle, Status } from "./styles";

interface MealProps extends TouchableOpacityProps {
  time: string
  name: string
  inDiet: boolean
}

export function Meal({ time, name, inDiet, ...rest }: MealProps) {
  return (
    <Container {...rest}>
      <Hours>{time}</Hours>
      <MealTitle>{name}</MealTitle>
      <Status inDiet={inDiet}/>
    </Container>
  )
}