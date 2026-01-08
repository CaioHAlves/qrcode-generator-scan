import styled, { keyframes } from 'styled-components'
import { Button } from '@material-ui/core'
import { cyberpunkColors } from '../../theme/theme'

const textGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px ${cyberpunkColors.neonYellow},
                 0 0 10px ${cyberpunkColors.neonYellow};
  }
  50% {
    text-shadow: 0 0 10px ${cyberpunkColors.neonYellow},
                 0 0 20px ${cyberpunkColors.neonYellow},
                 0 0 30px ${cyberpunkColors.neonYellow};
  }
`

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 60px;
  padding: 0px 24px;
  background: ${cyberpunkColors.darkBg};
  border-bottom: 1px solid ${cyberpunkColors.neonCyan};
  box-shadow: 0 4px 20px rgba(0, 240, 255, 0.3),
              inset 0 -1px 0 ${cyberpunkColors.neonCyan};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      transparent,
      ${cyberpunkColors.neonCyan},
      ${cyberpunkColors.neonYellow},
      ${cyberpunkColors.neonCyan},
      transparent
    );
  }
`

export const OptionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 12px;
`

export const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    color: ${cyberpunkColors.neonCyan};
    border: 1px solid ${cyberpunkColors.neonCyan};
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 8px 16px;
    transition: all 0.3s ease;
    background: transparent;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.2), transparent);
      transition: left 0.5s ease;
    }

    &:hover {
      background: rgba(0, 240, 255, 0.1);
      box-shadow: 0 0 15px ${cyberpunkColors.neonCyan},
                  inset 0 0 15px rgba(0, 240, 255, 0.1);

      &::before {
        left: 100%;
      }
    }
  }

  p {
    margin: 0px 5px 0px 0px;
  }

  svg, p {
    color: ${cyberpunkColors.neonCyan};
  }
`

export const MyName = styled.h4`
  position: relative;
  font-weight: 700;
  letter-spacing: 3px;
  color: ${cyberpunkColors.neonYellow};
  text-align: center;
  text-transform: uppercase;
  animation: ${textGlow} 2s ease-in-out infinite;

  .rotate-words {
    display: inline;
    margin-left: 5px;
  }

  span {
    color: ${cyberpunkColors.darkBg};
  }

  .rotate-words span {
    width: max-content;
    position: absolute;
    background: linear-gradient(135deg, ${cyberpunkColors.neonCyan}, ${cyberpunkColors.neonPink});
    padding-inline: 10px;
    opacity: 0;
    transform-origin: 10% 75%;
    animation: rotateWords 8s linear;
    border-radius: 2px;
    font-weight: 600;

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
