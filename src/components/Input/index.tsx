import { TextInputProps } from "react-native";
import { Container, InputText, Label } from "./styles";

interface InputProps extends TextInputProps{
  title: string
}

export function Input({ title, ...rest }: InputProps) {
  return (
    <Container >
      <Label>{title}</Label>
      <InputText {...rest}/>
    </Container>
  )
}