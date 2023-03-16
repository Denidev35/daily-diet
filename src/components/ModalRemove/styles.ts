import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.Modal``;

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ContentContainer = styled.View`
  width: 327px;
  height: 192px;
  padding: 40px 24px 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  align-self: center;
  position: absolute;
  top: ${Dimensions.get("window").height * 0.5 - 96}px;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}

  text-align: center;
  width: 229px;
`;

export const WrapperButton = styled.View`
  flex-direction: row;
  margin-top: 32px;
  gap: 12px;
`;