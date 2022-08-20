import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const TextArea = styled.textarea`
  margin: 10px 0px 0px 0px;
  border-radius: 8px;
  background: ${theme.palette.secondary.light};
  box-shadow: inset 0 8px 32px 0 rgb(13 0 255 / 37%);
  border: 1px solid ${theme.palette.secondary.dark};
  resize: none;
  padding: 10px;
  color: ${theme.palette.primary.light};
  font-size: 16px;
  width: 300px;
`