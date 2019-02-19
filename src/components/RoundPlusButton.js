import React from 'react'
import styled from '@emotion/styled'
import { Center } from '@chrisjpatty/tang-ui'
import { Plus as PlusIcon } from '@chrisjpatty/tang-ui-icons'

export default props => (
  <Wrapper {...props} contentEditable={false}>
    <Center contentEditable={false}>
      <PlusIcon contentEditable={false} />
    </Center>
  </Wrapper>
)

const Wrapper = styled('button')({
  width: 34,
  height: 34,
  borderRadius: '100%',
  border: '1px solid',
  margin: 5,
  background: 'none',
  outline: 'none',
  '& svg': {
    width: '100%',
    pointerEvents: 'none'
  },
  '& *': {
    pointerEvents: 'none'
  }
}, ({theme}) => ({
  borderColor: theme.gray.extraLight,
  color: theme.gray.extraLight
}))
