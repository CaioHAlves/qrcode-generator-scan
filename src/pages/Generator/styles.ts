import styled, { keyframes } from 'styled-components'
import { Typography, TextField, Button } from '@material-ui/core'
import { GetApp } from '@material-ui/icons'
import { cyberpunkColors } from '../../theme/theme'
import { StyledProps } from '../../theme/styledProps'

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px ${cyberpunkColors.neonCyan},
                0 0 20px rgba(0, 240, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 20px ${cyberpunkColors.neonCyan},
                0 0 40px rgba(0, 240, 255, 0.4);
  }
`

export const StyledTypography = styled(Typography)`
  &.MuiTypography-root {
    color: ${cyberpunkColors.neonYellow};
    text-align: center;
    text-shadow: 0 0 10px ${cyberpunkColors.neonYellow};
    letter-spacing: 1px;
  }
`

export const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    width: 300px;
    height: 48px;
    margin: 5px 0px 40px 0px;
  }

  .MuiOutlinedInput-input {
    color: ${cyberpunkColors.textPrimary};
  }

  .MuiInputLabel-outlined {
    color: ${cyberpunkColors.neonCyan};
  }

  legend {
    color: ${cyberpunkColors.neonCyan};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${cyberpunkColors.neonCyan};
    border-width: 2px;
    transition: all 0.3s ease;
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${cyberpunkColors.neonYellow};
    box-shadow: 0 0 10px ${cyberpunkColors.neonYellow};
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${cyberpunkColors.neonYellow};
    box-shadow: 0 0 15px ${cyberpunkColors.neonYellow};
  }

  .MuiInputLabel-outlined.Mui-focused {
    color: ${cyberpunkColors.neonYellow};
  }
`

export const StyledIconDownload = styled(GetApp)`
  &.MuiSvgIcon-root {
    color: ${cyberpunkColors.darkBg};
  }
`

export const ButtonDownload = styled(Button)<StyledProps>`
  &.MuiButton-root {
    width: ${props => props.width};
    margin: 20px 0px 20px 0px;
    color: ${cyberpunkColors.darkBg};
    background: ${cyberpunkColors.neonYellow};
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 4px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  &.MuiButton-root:hover {
    background: transparent;
    color: ${cyberpunkColors.neonYellow};
    border-color: ${cyberpunkColors.neonYellow};
    box-shadow: 0 0 15px ${cyberpunkColors.neonYellow};
  }
`

export const QRCodeWrapper = styled.div`
  padding: 20px;
  background: ${cyberpunkColors.textPrimary};
  border-radius: 8px;
  border: 2px solid ${cyberpunkColors.neonCyan};
  animation: ${glowPulse} 3s ease-in-out infinite;

  canvas {
    display: block;
  }
`
