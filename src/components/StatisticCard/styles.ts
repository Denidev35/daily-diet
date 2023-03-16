import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex-shrink: 1;
`

export const NumberStatistic = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE["2XL"]}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`

export const TextStatistic = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-top: 8px;
  text-align: center;
`