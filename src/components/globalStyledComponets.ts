import styled from 'styled-components'
import { StyledProps } from '../theme/styledProps'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const Content = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${props => props.padding};
  overflow: auto;

  .qrcode-scann {
    margin: 30px 0px 0px 0px;
  }
`