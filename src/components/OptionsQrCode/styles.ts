import styled, { keyframes } from 'styled-components'
import { Button } from '@material-ui/core'
import { StyledProps } from '../../theme/styledProps'
import { cyberpunkColors } from '../../theme/theme'

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px ${cyberpunkColors.neonYellow},
                0 0 10px rgba(252, 238, 10, 0.3);
  }
  50% {
    box-shadow: 0 0 10px ${cyberpunkColors.neonYellow},
                0 0 20px rgba(252, 238, 10, 0.4),
                0 0 30px rgba(252, 238, 10, 0.2);
  }
`

export const DivOptions = styled.div<StyledProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  height: 50px;
  justify-content: space-between;
  gap: 16px;
  margin: 20px 0px 20px 0px;
`

export const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    height: 50px;
    color: ${cyberpunkColors.darkBg};
    background: ${cyberpunkColors.neonYellow};
    border-radius: 4px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s ease;
    }

    &:hover {
      background: transparent;
      color: ${cyberpunkColors.neonYellow};
      border-color: ${cyberpunkColors.neonYellow};
      animation: ${glowPulse} 1.5s ease-in-out infinite;

      &::before {
        left: 100%;
      }
    }
  }
`
