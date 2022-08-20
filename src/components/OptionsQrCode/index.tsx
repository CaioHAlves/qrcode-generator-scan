import React from 'react'
import { useHooks } from '../../hooks/useHooks'
import { DivOptions, StyledButton } from './styles'

export function OptionsQrCode() {

  const { navigate } = useHooks()

  const goTo = (path: string) => {
    navigate(path)
  }

  return (
    <DivOptions>
      <StyledButton onClick={() => goTo("/")}>
        Gerar Qr Code
      </StyledButton>
      <StyledButton onClick={() => goTo("/scanner")}>
        Ler Qr Code 
      </StyledButton>
    </DivOptions>
  )
}