import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";

import { Button } from "../../components/Button";

import { Bold, Container, Subtitle, Title } from "./styles";

import ilustrationPositive from '../../assets/ilustrationPositive.png'
import ilustrationNegative from '../../assets/ilustrationNegative.png'

interface ParamsProps {
  status: 'sim' | 'não'
}

export function Feedback() {
  const route = useRoute()
  const { status } = route.params as ParamsProps

  const navigation = useNavigation()


  function handleGoToHome() {
    navigation.navigate('home')
  }


  return (
    <Container>
      <Title status={status}>
        { status === 'sim' ? 'Continue assim!' : 'Que pena!' }
      </Title>
      {status === 'sim' ? (
        <Subtitle>
        Você continua <Bold>dentro da dieta.</Bold> Muito bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você <Bold>saiu da dieta</Bold> dessa vez, mas continue se esforçando e não desista!
        </Subtitle>
      )}
      <Image source={status === 'sim' ? ilustrationPositive : ilustrationNegative} />
      <Button 
        title="Ir para a página inicial"
        style={{ marginTop: 32 }}
        onPress={handleGoToHome}
      />
    </Container>
  )
}