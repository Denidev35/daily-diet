import { useState } from "react";
import { Alert } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import uuid from 'react-native-uuid'
import dayjs from 'dayjs'


import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { SelectButton } from "../../components/Selectbutton";

import { mealCreate } from "../../storage/meal/mealCreate";
import { mealEdit } from '../../storage/meal/mealEdit'
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealStorageDTO } from "../../storage/meal/MealStorageDTO";

import { formatTime } from '../../utils/formatTime'

import { Container, Content, DateAndTime, Form, Label, SelectWrapper } from "./styles";

interface ParamsProps {
  type: 'add' | 'edit'
  meal?: MealStorageDTO
}

export function NewOrEditMeal() {
  const route = useRoute()
  const { type, meal } = route.params as ParamsProps

  const [name, setName] = useState(meal?.name || '')
  const [description, setDescription] = useState(meal?.description || '')
  const [inDiet, setInDiet] = useState(true)
  const [date, setDate] = useState(meal?.date || new Date())
  const [time, setTime] = useState(meal?.time || new Date())
  const [selectButtonStatus, setSelectButtonStatus] = useState(meal?.inDiet === true ? 'sim' : meal?.inDiet === false ? 'não' : 'sim')
  const [showDate, setShowDate] = useState(false)
  const [showHours, setShowHors] = useState(false)

  const navigation = useNavigation()


  function handleSelectButtonStatus(status: 'sim' | 'não') {
    setSelectButtonStatus(status)
    if (status === 'sim') {
      setInDiet(true)
    } else {
      setInDiet(false)
    }
  }

  const formattedDate = dayjs(date).format('DD/MM/YYYY')

  const formattedHours = formatTime(time)

  async function handleAddOrEditMeal() {
    try {

      if (type === 'add') {
        if (name.trim().length === 0 || description.trim().length === 0) {
          return Alert.alert('Nova refeição', 'Informe todos os dados.')
        }

        const newMeal = {
          id: String(uuid.v4()),
          date,
          name,
          description,
          inDiet,
          time
        }
        await mealCreate(newMeal)
        navigation.navigate('feedback', inDiet === true ? { status: 'sim' } : { status: 'não' })
      } else {
        if (meal) {
          const mealUpdate = {
            id: meal.id,
            date,
            name,
            description,
            inDiet,
            time
          }

          await mealEdit(meal.id, mealUpdate)
        }

        navigation.navigate('home')
      }

    } catch (error) {
      console.log(error)
      if (type === 'add') {
        Alert.alert("Nova refeição", "Não foi possível cadastrar a refeição")
      } else {
        Alert.alert("Alterar refeição", "Não foi possível editar a refeição")
      }
    }

  }

  return (
    <Container>
      <Header
        textHeader={type === 'add' ? "Nova refeição" : "Editar refeição"}
        diet="default"
      />
      <Content>
        <Form>
          <Input
            title="Nome"
            value={name}
            onChangeText={setName}
          />

          <Input
            title="Descrição"
            multiline
            numberOfLines={7}
            value={description}
            onChangeText={setDescription}
          />

          <DateAndTime>
            <Input
              title="Data"
              value={formattedDate}
              onPressIn={() => setShowDate(true)}
            />
            <Input
              title="Hora"
              value={formattedHours}
              onPressIn={() => setShowHors(true)}
            />
          </DateAndTime>
          <Label>Está dentro da dieta ?</Label>
          <SelectWrapper>
            <SelectButton
              title="Sim"
              onPress={() => handleSelectButtonStatus('sim')}
              isActive={selectButtonStatus === 'sim'}
            />
            <SelectButton
              title="Não"
              onPress={() => handleSelectButtonStatus('não')}
              isActive={selectButtonStatus === 'não'}
            />
          </SelectWrapper>

          {showDate && (
            <DateTimePicker
            value={new Date(date)}
            mode={'date'}
            is24Hour
            display="default"
            onChange={(event, selectDate) => {
              setShowDate(false)
              setDate(selectDate as Date)
            }}
            locale="pt-BR"
            />
          )}

          {showHours && (
            <DateTimePicker
              mode="time"
              value={new Date(time)}
              display="default"
              onChange={(event, selectTime) => {
                setShowHors(false)
                setTime(selectTime as Date)
              }}
              locale="pt-BR"
            />
          )}

        </Form>

        <Button
          title={type === 'add' ? "Cadastrar refeição" : 'Salvar alterações'}
          style={{ marginTop: 'auto' }}
          onPress={handleAddOrEditMeal}
        />
      </Content>
    </Container>
  )
}