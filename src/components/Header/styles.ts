import styled, { css } from 'styled-components'
import { Colors } from 'styles/theme'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme, color }) => css`
    background-color: ${theme.colors[color as Colors]};
    height: 100%;
    width: 100%;
    font-family: ${theme.font.family};
    z-index: ${theme.layers.base};
    ${media.greaterThan('medium')`
     max-width: 61.5rem;
    `}
  `}
`
export const MobileGroup = styled.div`
  display: none;
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 6.3rem;
    min-height: 45rem;

    padding-bottom: 4.1rem;
  `};
`
export const DesktopGroup = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 6.3rem;
    padding-left: 9.4rem;
    min-height: 100%;
    max-width: 61.5rem;
    padding-bottom: 9.3rem;
  `}
`
export const TextWrapper = styled.div``
