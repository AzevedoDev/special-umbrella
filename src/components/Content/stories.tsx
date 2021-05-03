import { Story, Meta } from '@storybook/react/types-6-0'
import Content, { ContentProps } from '.'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6.3rem;
`

export default {
  title: 'Content',
  component: Content,
  args: {
    concurso: {
      id: '1',
      numeros: ['01', '01', '01', '01', '01', '01']
    }
  }
} as Meta

export const Default: Story<ContentProps> = (args) => (
  <Wrapper>
    <Content {...args} />
  </Wrapper>
)
