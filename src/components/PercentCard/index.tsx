import { TouchableOpacityProps } from "react-native";
import { ButtonStatistic, Container, Icon, PercentNumber, PercentText } from "./styles";

interface PercentProps extends TouchableOpacityProps {
  numberPercent: number
}

export function PercentCard({ numberPercent, ...rest }: PercentProps) {
  return (
    <Container percentType={ numberPercent >= 50 ? 'POSITIVE' : 'NEGATIVE' } >
      <ButtonStatistic {...rest}>
        <Icon  percentType={ numberPercent >= 50 ? 'POSITIVE' : 'NEGATIVE' }/>
      </ButtonStatistic>
      <PercentNumber>
        {numberPercent.toFixed(2).replace('.', ',').replace(',00', '') + '%'}
      </PercentNumber>
      <PercentText>das refeições dentro da dieta</PercentText>
    </Container>
  )
}