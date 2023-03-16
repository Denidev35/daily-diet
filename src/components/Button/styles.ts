import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' 

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_200 : 'transparent' };
  border: ${({ theme, type }) => type === 'PRIMARY' ? 0 : `1px solid ${theme.COLORS.GRAY_100}` };

  max-height: 50px;
  min-height: 50px;

  border-radius: 6px;
  padding: 0 24px;


  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.WHITE
}))``