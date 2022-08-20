import styled from 'styled-components'
import { theme } from '../../theme/theme'
import {  StyledProps} from '../../theme/styledProps'

export const Footer = styled.footer<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: ${props => props.height};
  padding: ${props => props.padding};
  background: ${theme.palette.secondary.dark};
  box-shadow: inset 0 8px 32px 0 rgb(13 0 255 / 37%);
  margin: auto 0px 0px 0px;
`
export const Copyright = styled.h3`
  color: ${theme.palette.primary.light};
  margin: 10px 0px 0px 0px;
`
export const DivIconsSocialNetwork = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${theme.palette.primary.light};
  }
`