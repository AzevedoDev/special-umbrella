import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
  ${media.greaterThan('medium')`
    flex-direction:row;
    justify-content: center;
    align-items: center;
  `}
`
