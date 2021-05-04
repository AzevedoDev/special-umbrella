import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    height: 100%;
    width: 100%;
    font-family: ${theme.font.family};
    z-index: ${theme.layers.menu};
    ${media.lessThan('medium')`
      background-color: ${theme.colors.mainBg};
      margin-top: -6.3rem;
      clip-path: ellipse(180% 100% at bottom);
    `}
    ${media.greaterThan('medium')`
      background-color: ${theme.colors.mainBg};
      margin-left: -9.3rem;
      clip-path: ellipse(100% 150% at right);
      display:flex;
      flex-direction: column;
      justify-content:flex-end;
      align-items: center;
      padding-bottom: 9.7rem;
    `}
    ${media.greaterThan('large')`
      background-color: ${theme.colors.mainBg};
      margin-left: -9.3rem;
      clip-path: ellipse(100% 160% at right);
      display:flex;
      flex-direction: column;
      justify-content:flex-end;
      align-items: center;
      padding-bottom: 9.7rem;
    `}
  `}
`
export const DrawnLotteryNumbersWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 10rem;
  ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-height: 20rem;
    padding: 0 2.3rem 0 5rem;
  `}
  ${media.lessThan('medium')`
    padding-bottom: 8.4rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `}
`

export const TextWrapper = styled.div`
  ${media.greaterThan('medium')`
    width: 100%;
    display: flex;
    padding: 0 2.3rem 0 5rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  `}

  ${media.lessThan('medium')`
    width: 31.5rem;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  `}
`
export const MobileGroup = styled.div`
  display: none;
  ${({ theme }) => css`
    ${media.lessThan('medium')`
      background-color: ${theme.colors.mainBg};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 3.8rem;
      width: 100%;
    `}
  `}
`
export const DesktopGroup = styled.div`
  display: none;
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      background-color: ${theme.colors.mainBg};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 60%;
    `}
  `}
`
