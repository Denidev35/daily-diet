import styled, { css } from "styled-components/native";

type Props = {
  status: 'sim' | 'não'
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;

  justify-content: center;
  align-items: center;
`

export const Title = styled.Text<Props>`
  ${({ theme, status }) => css`
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  color: ${({ status, theme }) => status === 'sim' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} ;
`
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top: 8px;
  margin-bottom: 40px;
  text-align: center;
`
export const Bold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`