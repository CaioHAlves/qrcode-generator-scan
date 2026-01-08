import styled from 'styled-components'
import { StyledProps } from '../theme/styledProps'
import { cyberpunkColors } from '../theme/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${cyberpunkColors.darkBg};
`

export const Content = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${props => props.padding};
  overflow: auto;
  position: relative;

  /* Scan lines overlay */
  &::before {
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
      rgba(0, 240, 255, 0.02) 2px,
      rgba(0, 240, 255, 0.02) 4px
    );
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  .qrcode-scann {
    margin: 30px 0px 0px 0px;
  }
`
