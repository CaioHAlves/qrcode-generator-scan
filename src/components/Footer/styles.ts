import styled from 'styled-components'
import { cyberpunkColors } from '../../theme/theme'
import { StyledProps } from '../../theme/styledProps'

export const Footer = styled.footer<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${props => props.height};
  padding: ${props => props.padding};
  background: ${cyberpunkColors.darkBg};
  border-top: 1px solid ${cyberpunkColors.neonCyan};
  box-shadow: 0 -4px 20px rgba(0, 240, 255, 0.2),
              inset 0 1px 0 ${cyberpunkColors.neonCyan};
  margin: auto 0px 0px 0px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      transparent,
      ${cyberpunkColors.neonPink},
      ${cyberpunkColors.neonYellow},
      ${cyberpunkColors.neonPink},
      transparent
    );
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 240, 255, 0.03) 2px,
      rgba(0, 240, 255, 0.03) 4px
    );
    pointer-events: none;
  }
`

export const Copyright = styled.h3`
  color: ${cyberpunkColors.textSecondary};
  margin: 10px 0px 0px 0px;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  z-index: 1;

  span {
    color: ${cyberpunkColors.neonYellow};
    text-shadow: 0 0 10px ${cyberpunkColors.neonYellow};
  }
`

export const DivIconsSocialNetwork = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  z-index: 1;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid ${cyberpunkColors.neonCyan};
    border-radius: 4px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${cyberpunkColors.neonCyan};
      transform: translateY(100%);
      transition: transform 0.3s ease;
      z-index: -1;
    }

    &:hover {
      box-shadow: 0 0 15px ${cyberpunkColors.neonCyan};

      &::before {
        transform: translateY(0);
      }

      svg {
        color: ${cyberpunkColors.darkBg} !important;
      }
    }
  }

  svg {
    color: ${cyberpunkColors.neonCyan};
    font-size: 20px;
    transition: all 0.3s ease;
  }
`
