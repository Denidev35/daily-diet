import styled, { css } from "styled-components/native"

type Props = {
  inDiet: boolean
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 14px 16px 14px 12px; 
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
`

export const Hours = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}

  padding-right: 12px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-right-width: 1px ;
`

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  flex: 1;
  margin-left: 12px;
`

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${ ({ theme, inDiet }) => inDiet === true ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID }
`