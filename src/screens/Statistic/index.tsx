import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { StatisticCard } from "../../components/StatisticCard";
import { calculatePercentage } from "../../utils/calculatePercentage";
import { ButtonBack, Container, Content, Header, Icon, InfoStatistics, PercentNumber, PercentText, Title } from "./styles";

interface ParamsProps {
  diet: 'in' | 'out'
}

export function Statistic() {
  const [percent, setPercent] = useState(0)
  const [total, setTotal] = useState(0)
  const [inDiet, setIndiet] = useState(0)
  const [outDiet, setOutDiet] = useState(0)
  const [bestSequel, setBestSequel] = useState(0)

  const route = useRoute()
  const { diet } = route.params as ParamsProps

  const navigation = useNavigation()

  async function loadStatistic() {
    const {percent, mealsInDiet, mealsOutDiet, totalMeals, bestSequenceInDiet} = await calculatePercentage()

    setPercent(percent)
    setIndiet(mealsInDiet)
    setOutDiet(mealsOutDiet)
    setTotal(totalMeals)
    setBestSequel(bestSequenceInDiet)
  }

  function handleGoToHome() {
    navigation.navigate('home')
  }

  useFocusEffect(useCallback(() => {
    loadStatistic();
  }, []));

  return(
    <Container>
      <Header
        diet={diet}
      >
        <ButtonBack onPress={handleGoToHome}>
          <Icon diet={diet}/>
        </ButtonBack>
        <PercentNumber>{percent ? percent.toFixed(2).replace(".", ",").replace(",00", "") : 0}%</PercentNumber>
        <PercentText>das refeições dentro da dieta</PercentText>
      </Header>
      <Content>
        <Title>Estatísticas gerais</Title>
        <StatisticCard 
          numberStatistic={bestSequel}
          textEstatistic="melhor sequência de pratos dentro da dieta"
        />
        <StatisticCard 
          numberStatistic={total}
          textEstatistic="refeições registradas"
        />
        <InfoStatistics>
          <StatisticCard 
            numberStatistic={inDiet}
            textEstatistic="refeições dentro da dieta"
            style={{ marginRight: 12, backgroundColor: '#E5F0DB' }}
          />
          <StatisticCard 
            numberStatistic={outDiet}
            textEstatistic={`refeições fora da \n dieta`}
            style={{  backgroundColor: '#F4E6E7' }}
          />
        </InfoStatistics>

      </Content>
    </Container>
  )
}