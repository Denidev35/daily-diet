import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  diet: 'in' | 'out'
}

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View<Props>`
  background-color: ${({ diet, theme }) => diet === 'in' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  height: 200px;
  padding: 0px 24px;

  justify-content: center;
`

export const ButtonBack = styled.TouchableOpacity`
`

export const PercentNumber = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["3XL"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}

  text-align: center;
`
export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  text-align: center;
`

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 20px;

  margin-top: -28px;

  padding: 40px 24px 24px;

`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-bottom: 23px;
  text-align: center;
`

export const InfoStatistics = styled.View`
  flex-direction: row;
`


export const Icon = styled(ArrowLeft).attrs<Props>(({ diet, theme }) => ({
  size: 24,
  color: diet === 'in' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))<Props>``