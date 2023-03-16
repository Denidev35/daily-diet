import { useNavigation, useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ModalRemove } from "../../components/ModalRemove";
import { mealRemove } from "../../storage/meal/mealRemove";
import { MealStorageDTO } from "../../storage/meal/MealStorageDTO";
import { formatTime } from "../../utils/formatTime";

import { 
  Container, 
  Content, 
  Label, 
  Status, 
  Subtitle, 
  TextDateAndHour, 
  TextLabel, 
  Title 
} from "./styles";


interface ParamsProps {
  meal: MealStorageDTO,
  diet: 'in' | 'out'
}

export function Meal() {
  const [modalVisible, setModalVisible] = useState(false)

  const route = useRoute()
  const navigation = useNavigation()

  const { meal, diet } = route.params as ParamsProps

  function handleGoToEdit() {
    navigation.navigate('newOrUp', {type: 'edit', meal})
  }

  async function handleRemoveMeal() {
    await mealRemove(meal.id)
    navigation.navigate('home')
  }


  const formattedDate = dayjs(meal.date).format('DD/MM/YYYY')

  const formatedHours = formatTime(meal.time)


  return (
    <Container>
      <Header 
        textHeader="Refeição"
        diet={diet}
      />
      <Content>
        <Title>{meal.name}</Title>
        <Subtitle>{meal.description}</Subtitle>

        <TextDateAndHour>Data e hora</TextDateAndHour>
        <Subtitle>{`${formattedDate} às ${formatedHours}`}</Subtitle>

        <Label>
          <Status 
            diet={diet}
          />
          <TextLabel>{ diet === 'in' ? 'dentro da dieta' : 'fora da dieta' }</TextLabel>
        </Label>
        
        <Button 
          style={{ marginTop: 'auto' }}
          title="Editar refeição"
          icon="drive-file-rename-outline"
          onPress={handleGoToEdit}
        />
        <Button 
          style={{ marginTop: 9 }}
          title="Excluir refeição"
          icon="delete-outline"
          type="SECONDARY"
          onPress={() => setModalVisible(true)}
        />

        
      </Content>
      <ModalRemove 
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          onRemoveMeal={handleRemoveMeal}
          transparent={true}
          onCancel={() => setModalVisible(false)}
          style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 }}
          onClose={() => setModalVisible(false)}
        />
    </Container>
  ) 
}