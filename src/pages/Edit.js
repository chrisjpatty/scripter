import React, { useState } from "react";
import styled from "@emotion/styled";
import Blocks from "../components/Blocks";
import Toolbar from "../components/Toolbar";
import RichEditor from '../components/RichEditor/RichEditor'

export const speakersContext = React.createContext([])
export const setSpeakersContext = React.createContext(null)
export const setShortcutsDisabledContext = React.createContext(false)

export default ({ file: { data: file }, onFileEdited }) => {
  const [titleFocused, setTitleFocused] = useState(false);
  const [shortcutsDisabled, setShortcutsDisabled] = useState(false)

  const updateBlocks = blocks => {
    onFileEdited(file => ({
      ...file.data,
      blocks
    }));
  };

  const setTitle = title => {
    onFileEdited(file => ({
      ...file.data,
      title
    }));
  };

  const setSpeakers = speakers => {
    onFileEdited(file => ({
      ...file.data,
      speakers
    }))
  }

  return (
    <PageWrapper>
      <Toolbar
        title={file.title}
        onChange={setTitle}
        onTitleFocus={() => {
          setTitleFocused(true);
        }}
        onTitleBlur={() => {
          setTitleFocused(false);
        }}
      />
      <speakersContext.Provider value={file.speakers || []}>
        <setSpeakersContext.Provider value={setSpeakers}>
          <setShortcutsDisabledContext.Provider value={setShortcutsDisabled}>
            {/* <Blocks
              shortcutsDisabled={titleFocused || shortcutsDisabled}
              blocks={file.blocks}
              onBlocksChanged={updateBlocks}
            /> */}
            <RichEditor />
          </setShortcutsDisabledContext.Provider>
        </setSpeakersContext.Provider>
      </speakersContext.Provider>
    </PageWrapper>
  );
};

const PageWrapper = styled("main")({
  width: "100%",
  display: "flex",
  flexDirection: "column"
});
