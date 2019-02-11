import React, { useState } from "react";
import styled from "@emotion/styled";
import Blocks from "../components/Blocks";
import Toolbar from "../components/Toolbar";

export default ({ file: { data: file }, onFileEdited }) => {
  const [titleFocused, setTitleFocused] = useState(false);

  const updateBlocks = blocks => {
    onFileEdited({
      ...file,
      blocks
    });
  };

  const setTitle = title => {
    onFileEdited({
      ...file,
      title
    });
  };

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
      <Blocks
        shortcutsDisabled={titleFocused}
        blocks={file.blocks}
        onBlocksChanged={updateBlocks}
      />
    </PageWrapper>
  );
};

const PageWrapper = styled("main")({
  width: "100%",
  display: "flex",
  flexDirection: "column"
});
