import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import Block from "./Block";
import { getNewBlock } from "../templates";
import useKeyboardShortcut from "../hooks/useKeyboardShortcut";
import { speakersContext } from '../pages/Edit'
import { Plus as PlusIcon } from '@chrisjpatty/tang-ui-icons'
import Editor from "./Editor";

export default ({ blocks, onBlocksChanged, shortcutsDisabled }) => {
  const [editing, setEditing] = useState(false);
  const [editCache, setEditCache] = useState(null);
  const [editCoords, setEditCoords] = useState(null);
  const getBoxRect = useRef(null);
  const getBlockRect = useRef(null);
  const prevBlocksLength = useRef(blocks.length)
  const speakers = useContext(speakersContext)

  useEffect(
    () => {
      if (editing === true) {
        const box = getBoxRect.current();
        shortcuts.add.disable()
        setEditCoords({
          from: {
            left: editCache.box.left,
            top: editCache.box.top,
            width: editCache.box.width,
            height: editCache.box.height
          },
          to: {
            left: box.left,
            top: box.top,
            width: box.width,
            height: box.height
          }
        });
      }else{
        shortcuts.add.enable()
      }
    },
    [editing]
  );

  useEffect(() => {
    if(blocks.length > prevBlocksLength.current){
      getBlockRect.current()
    }
    prevBlocksLength.current = blocks.length
  }, [blocks])

  const setBlockText = text => {
    const blockIndex = blocks.findIndex(b => b.id === editCache.block.id)
    onBlocksChanged([
      ...blocks.slice(0, blockIndex),
      {
        ...blocks[blockIndex],
        text
      },
      ...blocks.slice(blockIndex + 1)
    ])
  }

  const setBlockSpeaker = (speakerId, index) => {
    onBlocksChanged([
      ...blocks.slice(0,index),
      {...blocks[index], speakerId},
      ...blocks.slice(index + 1)
    ])
  }

  const addNode = () => {
    onBlocksChanged([...blocks, getNewBlock()]);
  };

  const startEditing = ({ block, box }) => {
    setEditCache({ block, box });
    setEditing(true);
  };

  const handleEditorClosed = () => {
    setEditing(false);
    setEditCache(null);
    setEditCoords(null);
  };

  const shortcuts = {};
  shortcuts.add = useKeyboardShortcut({ keyCode: 65, action: addNode, disabled: editing || shortcutsDisabled });

  return (
    <Wrapper>
      {editing && (
        <Editor
          getBoxRect={getBoxRect}
          animationCoordinates={editCoords}
          onClosed={handleEditorClosed}
          text={editCache.block.text}
          onChange={setBlockText}
        />
      )}
      {blocks.map((block, i) => (
        <Block
          {...block}
          speaker={speakers.find(s=>s.id===block.speakerId)}
          onEditRequested={startEditing}
          editing={editing ? editCache.block.id === block.id : false}
          getBlockRect={blocks.length - 1 === i ? getBlockRect : {}}
          onSpeakerSelected={speakerId=>{setBlockSpeaker(speakerId, i)}}
          key={block.id}
        />
      ))}
      <AddButton onClick={addNode} />
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  whiteSpace: 'pre-wrap',
  padding: 30
});

const AddButton = props => (
  <AddWrapper>
    <AddInnerButton {...props}>
      <PlusIcon/>
    </AddInnerButton>
  </AddWrapper>
);

const AddWrapper = styled("div")({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20
});

const AddInnerButton = styled("button")(
  {
    width: 70,
    height: 70,
    padding: 10,
    border: "none",
    borderRadius: '100%',
    textTransform: "uppercase",
    fontWeight: 600,
    outline: "none",
    background: '#ffffff'
    // transition: 'color 100ms, border-color 100ms'
  },
  ({ theme }) => ({
    color: theme.gray.extraLight,
    borderColor: theme.gray.extraLight,
    boxShadow: theme.shadows.low,
    "&:hover": {
      boxShadow: theme.shadows.mid,
      color: theme.gray.light,
      borderColor: theme.gray.light
    }
  })
);
