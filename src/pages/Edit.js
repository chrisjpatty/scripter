import React from 'react'
import styled from '@emotion/styled'
import Blocks from '../components/Blocks'

export default ({ file: {data: file}, onFileEdited }) => {
  const updateBlocks = blocks => {
    onFileEdited({
      ...file,
      blocks
    })
  }

  return (
    <PageWrapper>
      <Blocks blocks={file.blocks} onBlocksChanged={updateBlocks} />
    </PageWrapper>
  )
}

const PageWrapper = styled('main')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
})
