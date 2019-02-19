import React from "react";
import styled from "@emotion/styled";
import EditorSpeakers from "../EditorSpeakers";

export const CodeNode = ({ attributes, children }) => (
  <pre {...attributes}>
    <code>{children}</code>
  </pre>
);

export const ParagraphNode = ({ attributes, children, node, editor }) => {
  const setSpeaker = speakerId => {
    editor.setNodeByKey(node.key, { data: { speakerId } });
  };
  const speakerId = node.data.get("speakerId");
  return (
    <Paragraph {...attributes}>
      {children}
      <EditorSpeakers
        contentEditable={false}
        speakerId={speakerId}
        onSpeakerSelected={setSpeaker}
      />
    </Paragraph>
  );
};

const Paragraph = styled.div({
  position: "relative",
  margin: "20px 0px"
});
