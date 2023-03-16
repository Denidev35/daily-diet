import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { BackButton, Container, Icon, TextHeader } from "./styles";

interface HeaderProps {
  textHeader: string
  diet: 'in' | 'out' | 'default'
}

export function Header({textHeader, diet}: HeaderProps){
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }
  return (
    <Container diet={diet}>
      <BackButton onPress={handleGoBack}>
        <Icon />
      </BackButton>
      <TextHeader>{textHeader}</TextHeader>
      <View />
    </Container>
  )
} 