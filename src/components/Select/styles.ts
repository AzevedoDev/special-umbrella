import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 23rem;
    height: 5rem;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    border-radius: 0.6rem;
    box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.05);

    &:hover {
      box-shadow: #848484 0 0 0.1rem 0.1rem;
    }
    &:focus {
      box-shadow: #848484 0 0 0.1rem 0.1rem;
    }
    select {
      width: 100%;
      height: 100%;
      padding: 0 3.3rem;
      color: ${theme.colors.black};
      background-color: transparent;
      border: 0;
      appearance: none;
      outline: none;
      cursor: pointer;
      font-family: ${theme.font.family};
    }
    &::after {
      position: absolute;
      top: 2.2rem;
      right: 2rem;
      width: 1.1rem;
      height: 0.6rem;
      pointer-events: none;
      content: '';
      background-color: #848484;
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
  `}
`
