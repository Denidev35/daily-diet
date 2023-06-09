import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;

  background-color: #FAFAFA;

  align-items: center;
  justify-content: center;
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200
}))`

`