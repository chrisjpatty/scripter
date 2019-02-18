import React from 'react'
import styled from '@emotion/styled'
import { Center } from '@chrisjpatty/tang-ui'
import { Plus as PlusIcon } from '@chrisjpatty/tang-ui-icons'

export default props => (
  <Wrapper {...props}>
    <Center>
      <PlusIcon />
    </Center>
  </Wrapper>
)

const Wrapper = styled('button')({
  width: 38,
  height: 38,
  borderRadius: '100%',
  border: '3px solid',
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
