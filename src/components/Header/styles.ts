import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme, color }) => css`
    background-color: ${theme.colors[color]};
    width: 100%;
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
