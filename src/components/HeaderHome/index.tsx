import { Avatar, Container, Logo, Photo } from "./styles";

import logoImg from '../../assets/logo.png'

export function HeaderHome() {
  return (
    <Container>
      <Logo source={logoImg}/>
      <Avatar>
        <Photo source={{uri: 'https://github.com/denidev35.png'}} />
      </Avatar>
    </Container>
  )
}