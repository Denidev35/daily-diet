import styled, { css } from "styled-components/native";

type Props = {
  diet: 'in' | 'out'
}

export const Container = styled.View`
  flex: 1;
`
export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  padding: 40px 24px 24px;

  margin-top: -28px;

  border-radius: 20px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  font-size: 20px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-top: 8px;
`

export const TextDateAndHour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-top: 24px;
`

export const Label = styled.View`
  padding: 8px 16px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 32px;
  width: 144px;
`
export const Status = styled.View<Props>`
  height: 8px;
  width: 8px;

  border-radius: 999px;
  background-color: ${({ diet, theme }) => diet === 'in' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
`
export const TextLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`
