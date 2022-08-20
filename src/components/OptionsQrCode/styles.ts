import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { StyledProps } from '../../theme/styledProps'
import { theme } from '../../theme/theme'

export const DivOptions = styled.div<StyledProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  height: 50px;
  justify-content: space-between;
  gap: 5px;
  margin: 20px 0px 0px 0px;
`

export const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    height: 50px;
    color: ${theme.palette.secondary.dark};
    background: ${theme.palette.primary.dark};
    border-radius: 8px;
  }

  &.MuiButtonBase-root:hover {
    background: ${theme.palette.primary.light};
  }
`