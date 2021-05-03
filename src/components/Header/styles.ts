import styled, { css } from 'styled-components'
import { Colors } from 'styles/theme'

export const Wrapper = styled.main`
  ${({ theme, color }) => css`
    background-color: ${theme.colors[color as Colors]};
    width: 100%;
    min-height: 45rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 6.3rem;
    padding-bottom: 9.3rem;
    font-family: ${theme.font.family};
  `}
`
