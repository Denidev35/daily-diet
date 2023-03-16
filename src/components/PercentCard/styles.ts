import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'

type Props = {
  percentType: "POSITIVE" | "NEGATIVE"
}

export const Container = styled.View<Props>`
  width: 100%;

  padding: 20px 0;
  margin-top: 36px;
  border-radius: 8px;

  background-color: ${({ percentType, theme }) => percentType === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };

  align-items: center;
  position: relative;
`

export const PercentNumber = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["3XL"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
` 

export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`

export const ButtonStatistic = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ percentType, theme }) => ({
  size: theme.FONT_SIZE["2XL"],
  color: percentType === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<Props>``