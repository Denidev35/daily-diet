import styled, { css } from "styled-components/native";

export const Conatainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const EmptyText = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`