import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { theme } from '../../theme/theme'

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  padding: 0px 24px;
  background: ${theme.palette.secondary.dark};
  box-shadow: 0 8px 32px 0 rgb(13 0 255 / 37%);
`
export const OptionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
export const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    color: ${theme.palette.primary.light};
    border-radius: 16px;
    text-transform: none;
  }

  p {
    margin: 0px 5px 0px 0px;
  }

  svg, p {
    color: ${theme.palette.primary.light};
  }
`
export const MyName = styled.h4`
  position: relative;
  /* font-size: 24px; */
  font-weight: 600;
  letter-spacing: 2px;
  color: #F2CE1B;
  text-align: center;

  .rotate-words {
    display: inline;
    margin-left: 5px;
  }

  span {
    color: #000000;
  }

  .rotate-words span {
    width: max-content;
    position: absolute;
    background-color: #F2DBAE;
    padding-inline: 10px;
    opacity: 0;
    transform-origin: 10% 75%;
    animation: rotateWords 8s linear infinite;

    @keyframes rotateWords {
      5% {
        opacity: 1;
      }

      10%,
      20% {
        opacity: 1;
        transform: rotate(3deg);
      }
      15% {
        transform: rotate(-1deg);
      }
      25% {
        opacity: 0;
        transform: translateY(90px) rotate(10deg);
      }
    }
  }
`