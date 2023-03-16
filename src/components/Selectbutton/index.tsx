import { TouchableOpacityProps } from "react-native";
import { Container, Status, Title } from "./styles";

interface SelectButtonProps extends TouchableOpacityProps{
  title: 'Sim' | 'Não'
  isActive: boolean
}

export function SelectButton({ title, isActive, ...rest }: SelectButtonProps) {
  return (
    <Container isActive={isActive} title={title} {...rest}>
      <Status 
        title={title}
      />
      <Title>{title}</Title>
    </Container>
  )
}