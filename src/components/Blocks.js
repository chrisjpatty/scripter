import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Block from "./Block";
import { getNewBlock } from "../templates";
import useKeyboardShortcut from "../hooks/useKeyboardShortcut";
import Editor from './Editor'

export default ({ blocks, onBlocksChanged }) => {
  const [editing, setEditing] = useState(false);
  const [editCache, setEditCache] = useState(null);
  const [editCoords, setEditCoords] = useState(null)
  const getBoxRect = useRef(null)

  useEffect(() => {
    if(editing === true){
      const box = getBoxRect.current()
      setEditCoords({from: {
        left: editCache.box.left,
        top: editCache.box.top,
        width: editCache.box.width,
        height: editCache.box.height
      }, to: {
        left: box.left,
        top: box.top,
        width: box.width,
        height: box.height
      }})
    }
  }, [editing])

  const addNode = () => {
    onBlocksChanged([...blocks, getNewBlock()]);
  };

  const startEditing = ({block, box}) => {
    setEditCache({block, box})
    setEditing(true)
  };

  const handleEditorClosed = () => {
    setEditing(false)
    setEditCache(null)
    setEditCoords(null)
  }

  const shortcuts = {};
  shortcuts.add = useKeyboardShortcut({ keyCode: 65, action: addNode });

  return (
    <Wrapper>
      {
        editing &&
        <Editor getBoxRect={getBoxRect} animationCoordinates={editCoords} onClosed={handleEditorClosed} />
      }
      {blocks.map(block => (
        <Block
          {...block}
          onEditRequested={startEditing}
          editing={editing ? editCache.block.id === block.id : false}
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
  alignItems: "center"
});

const AddButton = props => (
  <AddWrapper>
    <AddInnerButton {...props}>+ Add Block</AddInnerButton>
  </AddWrapper>
);

const AddWrapper = styled("div")({
  width: 400,
  padding: 20
});

const AddInnerButton = styled("button")(
  {
    width: '100%',
    padding: 20,
    background: "none",
    border: "3px dashed #000",
    borderRadius: 10,
    textTransform: "uppercase",
    fontWeight: 600,
    outline: 'none'
    // transition: 'color 100ms, border-color 100ms'
  },
  ({ theme }) => ({
    color: theme.gray.extraLight,
    borderColor: theme.gray.extraLight,
    "&:hover": {
      color: theme.gray.light,
      borderColor: theme.gray.light
    }
  })
);
