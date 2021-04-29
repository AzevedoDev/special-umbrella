import Content from 'components/Content'
import Header from 'components/Header'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  )
}
