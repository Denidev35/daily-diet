import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string
  icon?: keyof typeof MaterialIcons.glyphMap
  type?: ButtonTypeStyleProps
}

export function Button({ title, icon, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <Container {...rest} type={type}>
     { icon && 
        <Icon 
          name={icon}
          style={type === 'SECONDARY' && { color: '#1B1D1E' }}
        />
      }
      <Title 
        style={type === "SECONDARY" && { color: '#1B1D1E' }} 
      >
        {title}
      </Title>
    </Container>
  )
}