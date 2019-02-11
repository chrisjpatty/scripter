import React from 'react'
import styled from '@emotion/styled'

export default ({innerRef, visible}) => {

  return (
    <Wrapper style={{opacity: visible ? 1 : 0}}>
      <TextArea ref={innerRef} />
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  width: '100%',
  height: '100%',
  maxWidth: 600,
  maxHeight: 400,
  display: 'flex',
  transition: 'opacity 100ms'
})

const TextArea = styled('textarea')({
  width: '100%',
  height: '100%',
  background: '#ffffff',
  borderRadius: 5,
  border: 'none',
  borderTop: `1px solid rgb(228, 228, 228)`,
  zIndex: 10
}, ({theme}) => ({
  boxShadow: theme.shadows.high
}))
