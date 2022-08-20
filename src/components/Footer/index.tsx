import React from 'react'
import { useHooks } from '../../hooks/useHooks'
import { IconButton } from '@material-ui/core'
import { Footer, DivIconsSocialNetwork, Copyright } from './styles'
import { Instagram, GitHub, WhatsApp, LinkedIn } from '@material-ui/icons'

interface Props {
  height: string
  iconSize: "small" | "inherit" | "default" | "large" | "medium" | undefined
  padding?: string
}

export function FooterComponent({ iconSize, height, padding }: Props) {

  const { useAppSelect } = useHooks()
  
  const { linkedinUrl, githubUrl, instagramUrl, whatsappUrl } = useAppSelect.myData

  const socialNetworkData = [
    { social: "LinkedIn", icon: <LinkedIn fontSize={iconSize} />, url: linkedinUrl },
    { social: "GitHub", icon: <GitHub fontSize={iconSize} />, url: githubUrl },
    { social: "Instagram", icon: <Instagram fontSize={iconSize}/>, url: instagramUrl },
    { social: "WhatsApp", icon: <WhatsApp fontSize={iconSize} />, url: whatsappUrl },
  ]

  const goTo = (link: string) => {
    window.open(link)
  }

  return (
    <Footer
      height={height}
      padding={padding}
    >
      <DivIconsSocialNetwork>
        {socialNetworkData.map((item, index) => (
          <IconButton key={index} onClick={() => goTo(item.url)} color="primary">
            {item.icon}
          </IconButton>
        ))}
      </DivIconsSocialNetwork>
      <Copyright>&copy; 2022 Caio Alves</Copyright>
    </Footer>
  )
}