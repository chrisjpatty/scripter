import React from 'react'
import styled from '@emotion/styled'

export default ({css, children, ...props}) => (
  <Button extraStyles={css} style={props.style} {...props}>{children}</Button>
)

const Button = styled('button')({
  textTransform: 'uppercase',
  padding: '10px 25px',
  borderRadius: 4,
  fontWeight: 600,
  border: 'none',
  outline: 'none'
}, ({theme, extraStyles}) => ({
  background: theme.primary.color,
  color: theme.primary.textOn,
  '&:hover': {
    background: theme.primary.light
  },
  ...extraStyles
}))
