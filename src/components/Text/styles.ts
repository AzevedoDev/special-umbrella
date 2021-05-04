import styled, { css } from 'styled-components'
import { TextProps } from '.'

export const TextComponent = styled.p<TextProps>`
  ${({ theme, color, size, weight }) => css`
    font-size: ${theme.font.sizes[size!]};
    color: ${color && theme.colors[color!]};
    font-weight: ${theme.font[weight!]};
    font-family: ${theme.font.family};
  `}
`
