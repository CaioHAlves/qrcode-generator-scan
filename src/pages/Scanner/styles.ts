import styled, { keyframes } from 'styled-components'
import { cyberpunkColors } from '../../theme/theme'

const scanAnimation = keyframes`
  0% {
    border-color: ${cyberpunkColors.neonCyan};
    box-shadow: 0 0 10px ${cyberpunkColors.neonCyan},
                inset 0 0 20px rgba(0, 240, 255, 0.1);
  }
  50% {
    border-color: ${cyberpunkColors.neonYellow};
    box-shadow: 0 0 20px ${cyberpunkColors.neonYellow},
                inset 0 0 30px rgba(252, 238, 10, 0.1);
  }
  100% {
    border-color: ${cyberpunkColors.neonCyan};
    box-shadow: 0 0 10px ${cyberpunkColors.neonCyan},
                inset 0 0 20px rgba(0, 240, 255, 0.1);
  }
`

export const TextArea = styled.textarea`
  margin: 10px 0px 0px 0px;
  border-radius: 8px;
  background: ${cyberpunkColors.darkBgCard};
  border: 2px solid ${cyberpunkColors.neonCyan};
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.2),
              inset 0 0 20px rgba(0, 240, 255, 0.05);
  resize: none;
  padding: 15px;
  color: ${cyberpunkColors.neonCyan};
  font-size: 16px;
  font-family: 'Roboto', monospace;
  width: 300px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${cyberpunkColors.neonYellow};
    box-shadow: 0 0 20px ${cyberpunkColors.neonYellow},
                inset 0 0 30px rgba(252, 238, 10, 0.05);
    color: ${cyberpunkColors.neonYellow};
  }

  &::placeholder {
    color: ${cyberpunkColors.textSecondary};
  }
`

export const ScannerWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  border: 3px solid ${cyberpunkColors.neonCyan};
  animation: ${scanAnimation} 2s ease-in-out infinite;

  section {
    padding: 0 !important;

    div {
      box-shadow: none !important;
      border: none !important;
    }
  }
`

export const ScannerLabel = styled.p`
  color: ${cyberpunkColors.neonYellow};
  text-align: center;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 15px;
  text-shadow: 0 0 10px ${cyberpunkColors.neonYellow};
`
