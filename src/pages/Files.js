import React from 'react'
import styled from '@emotion/styled'
import { FOB } from '@chrisjpatty/tang-ui'
import { Plus as PlusIcon } from '@chrisjpatty/tang-ui-icons'
import FileButton from '../components/FileButton'
import orderBy from 'lodash/orderBy'
import { objToArr } from '../utilities'

export default ({onNewFileRequested, files={}, history}) => {
  const orderedFiles = orderBy(objToArr(files), ['created'])
  console.log(orderedFiles);
  return (
    <Wrapper>
      {
        orderedFiles.map(file => (
          <FileButton key={file.id} onClick={() => {
            history.push(`/edit/${file.id}`)
          }} />
        ))
      }
      <FOB onClick={onNewFileRequested}>
        <PlusIcon/>
      </FOB>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
})
