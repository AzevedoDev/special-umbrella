import styled, { css } from 'styled-components'
import { LogoProps } from '.'

export const WrapperSvg = styled.div<LogoProps>`
  ${({ theme, isMobile }) => css`
    width: 6rem;
    height: 6rem;
    color: ${theme.colors.white};
    ${!isMobile && `margin-right: ${theme.spacings.small}`}
  `}
`
export const Wrapper = styled.div<LogoProps>`
  ${({ isMobile }) => css`
    display: flex;
    flex-direction: ${isMobile ? 'column' : 'row'};
    justify-content: center;
    align-items: center;
  `}
`
export const Text = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`
