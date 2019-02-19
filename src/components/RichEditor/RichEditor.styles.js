import styled from '@emotion/styled'
import { Editor } from 'slate-react'

export const StyledEditor = styled(Editor)({
  width: '100%',
  maxWidth: 1000,
  padding: '10px 15px',
  fontSize: 20,
  color: 'rgb(40, 40, 40)',
  fontWeight: 300,
  minHeight: '88vh'
})

export const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '0px 15px 15px 80px'
})
