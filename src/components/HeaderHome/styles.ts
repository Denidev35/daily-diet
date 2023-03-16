import styled from "styled-components/native"

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`
export const Avatar = styled.View`
  border: 2px solid ${({theme}) => theme.COLORS.GRAY_200};
  border-radius: 999px;
  overflow: hidden;
`

export const Photo = styled.Image`
  width: 40px;
  height: 40px; 
`