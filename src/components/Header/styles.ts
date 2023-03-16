import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  diet: 'in' | 'out' | 'default'
}

export const Container = styled.View<Props>`
  height: 132px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ diet, theme }) => diet === 'in' ? theme.COLORS.GREEN_LIGHT : diet === 'out' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_500};

  padding: 24px;

`

export const BackButton = styled.TouchableOpacity`
`

export const TextHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: theme.FONT_SIZE["2XL"]
}))``