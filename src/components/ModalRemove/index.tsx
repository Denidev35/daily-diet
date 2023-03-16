import { ModalProps } from "react-native";
import { Button } from "../Button";
import { Overlay, Container, ContentContainer, Title, WrapperButton } from "./styles";

interface ModalRemove extends ModalProps {
  onRemoveMeal: () => void
  onCancel: () => void
  onClose: () => void
}

export function ModalRemove({ onRemoveMeal, onCancel, onClose, ...rest }: ModalRemove) {
  return (
    <Container {...rest}>
      <Overlay onPress={onClose} />
        <ContentContainer>
          <Title>Deseja realmente excluir o registro da refeição?</Title>
          <WrapperButton>
            <Button
              title="Cancelar"
              type="SECONDARY"
              onPress={onCancel}
            />
            <Button
              title="Sim, excluir"
              onPress={onRemoveMeal}
            />
          </WrapperButton>
        </ContentContainer>
    </Container>
  )
}