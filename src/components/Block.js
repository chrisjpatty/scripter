import React, { useRef } from 'react'
import styled from '@emotion/styled'

export default ({text, id, onEditRequested, editing}) => {
  const innerWrapperRef = useRef(null)

  const startEdit = () => {
    onEditRequested({
      block: {text, id},
      box: innerWrapperRef.current.getBoundingClientRect()
    })
  }

  return (
    <Wrapper style={{opacity: editing ? 0 : 1}}>
      <InnerWrapper ref={innerWrapperRef} onClick={startEdit}>
        {text}
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  width: 400,
  padding: 20,
  paddingBottom: 0,
  paddingTop: 5
})

const InnerWrapper = styled('div')({
  padding: 20,
  background: '#ffffff',
  borderRadius: 5,
}, ({theme}) => ({
  borderTop: `1px solid ${theme.gray.extraExtraLight}`,
  boxShadow: theme.shadows.high
}))
