import styled, { css } from "styled-components/native";

type ContainerProps = {
  isActive: boolean
  title: 'Sim' | 'Não'
}

type StatusProps = {
  title: 'Sim' | 'Não'
}



export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 16px;

  ${({ isActive, title }) => isActive && title === 'Sim' && css`
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    border: 1px solid ${({ theme }) => theme.COLORS.GREEN_DARK};
  `}

  ${({ isActive, title }) => isActive && title === 'Não' && css`
    background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    border: 1px solid ${({ theme }) => theme.COLORS.RED_DARK};
  `}

`

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;

  ${({ title }) => title === 'Sim' && css`
    background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  `}

  ${({ title }) =>  title === 'Não' && css`
    background-color: ${({ theme }) => theme.COLORS.RED_DARK};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`