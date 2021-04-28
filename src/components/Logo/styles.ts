import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 6rem;
    height: 6rem;
  `,
  small: () => css`
    width: 3.5rem;
    height: 3.5rem;
  `
}

export const WrapperSvg = styled.div<LogoProps>`
  ${({ theme, color, size, isMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]};
    ${!isMobile && `margin-right: ${theme.spacings.small}`}
  `}
`
export const Wrapper = styled.div<LogoProps>`
  ${({ isMobile, theme, color }) => css`
    display: flex;
    color: ${theme.colors[color!]};
    flex-direction: ${isMobile ? 'column' : 'row'};
    justify-content: center;
    align-items: center;
  `}
`
export const Text = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `}
`
