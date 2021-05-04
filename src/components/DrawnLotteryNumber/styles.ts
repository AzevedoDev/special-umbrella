import styled, { css } from 'styled-components'

export const SortedNumber = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.white};
    width: 7.6rem;
    height: 7.6rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    font-family: ${theme.font.family};
  `}
`
