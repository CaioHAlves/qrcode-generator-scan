import styled from 'styled-components'
import { Typography, TextField, Button } from '@material-ui/core'
import { GetApp } from '@material-ui/icons'
import { theme } from '../../theme/theme'
import { StyledProps } from '../../theme/styledProps'

export const StyledTypography = styled(Typography)`
  &.MuiTypography-root {
    color: ${theme.palette.primary.dark}
  }
`
export const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    width: 300px;
    height: 48px;
    margin: 40px 0px 40px 0px;
  }
  .MuiOutlinedInput-input, .MuiInputLabel-outlined, legend {
    color: ${theme.palette.primary.dark};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.palette.primary.dark};
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.palette.primary.dark};
  }
`
export const StyledIconDownload = styled(GetApp)`
  &.MuiSvgIcon-root {

  }
`
export const ButtonDownload = styled(Button)<StyledProps>`
  &.MuiButton-root {
    width: ${props => props.width};
    margin: 20px 0px 20px 0px;
    color: ${theme.palette.secondary.dark};
    background-color: ${theme.palette.primary.dark};
  }
  &.MuiButton-root:hover {
    background-color: ${theme.palette.primary.light};
  }
`