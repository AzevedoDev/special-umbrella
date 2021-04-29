import styled, { css } from 'styled-components'
import { TextProps } from '.'

export const TextComponent = styled.p<TextProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${color && theme.colors[color!]};
    font-weight: ${theme.font.normal};
    text-align: center;
    font-family: ${theme.font.family};
  `}
`
