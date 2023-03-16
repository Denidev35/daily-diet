import { ViewProps } from "react-native";
import { Container, NumberStatistic, TextStatistic } from "./styles";

interface StatisticCardProps extends ViewProps {
  numberStatistic: number
  textEstatistic: string
}

export function StatisticCard({numberStatistic, textEstatistic, ...rest}: StatisticCardProps) {
  return (
    <Container {...rest}>
      <NumberStatistic>{numberStatistic}</NumberStatistic>
      <TextStatistic>{textEstatistic}</TextStatistic>
    </Container>
  )
}