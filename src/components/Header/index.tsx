import React from 'react'
import { ArrowForwardIos } from '@material-ui/icons'
import { HeaderComponent, OptionsDiv, StyledButton, MyName } from './styles'

export function Header() {

  const returnToSite = () => {
    window.open("https://caiohalves.netlify.app")
  }

  return (
    <HeaderComponent>
      <MyName>
        Caio
        <div className='rotate-words'>
          <span>Alves</span>
        </div>
      </MyName>
      <OptionsDiv>
        <StyledButton onClick={() => returnToSite()}>
          <p>Site principal</p>
          <ArrowForwardIos />
        </StyledButton>
      </OptionsDiv>
    </HeaderComponent>
  )
}