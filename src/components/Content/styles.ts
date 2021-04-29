import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    padding-top: 3rem;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    clip-path: ellipse(180% 100% at bottom);
    margin-top: -6.3rem;
    padding: 3.8rem;
    font-family: ${theme.font.family};
  `}
`
export const DrawnLotteryNumbersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding-bottom: 8.4rem;
`

export const TextWrapper = styled.div`
  width: 31.5rem;
`
