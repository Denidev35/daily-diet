import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  border-radius: 20px;
  padding: 40px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-top: -28px;  

  flex: 1;
`

export const Form = styled.View`
`

export const DateAndTime = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 14px;
`

export const SelectWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}

  margin-bottom: 8px;
`

