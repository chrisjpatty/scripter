import React, { useState } from "react";
import { StyledEditor, Wrapper } from "./RichEditor.styles.js";
import { BoldMark, ItalicMark, UnderlineMark } from './Marks'
import { CodeNode, ParagraphNode } from './Nodes'
import plugins from './plugins'
import { Value } from "slate";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: ""
              }
            ]
          }
        ]
      }
    ]
  }
});

export default () => {
  const [value, setValue] = useState(initialValue);

  const handleChange = v => {
    setValue(v.value);
  };

  const handleKeyDown = (event, editor, next) => {
    if (!event.ctrlKey) return next();

    switch (event.key) {
      case "b":
        event.preventDefault();
        editor.toggleMark("bold");
        break;
      case "`":
        event.preventDefault();
        const isCode = editor.value.blocks.some(block => block.type === "code");
        editor.setBlocks(isCode ? "paragraph" : "code");
        break;
      default:
        return next();
    }
  };

  const renderNode = (props, editor, next) => {
    switch (props.node.type) {
      case "code":
        return <CodeNode {...props} />;
      case "paragraph":
        return <ParagraphNode {...props} />;
      default:
        return next();
    }
  };

  const renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case "bold":
        return <BoldMark {...props} />;
      case "italic":
        return <ItalicMark {...props} />;
      case "underline":
        return <UnderlineMark {...props} />;
      default:
        return next();
    }
  };

  return (
    <Wrapper>
      <StyledEditor
        placeholder="Start typing to create your script"
        plugins={plugins}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        renderNode={renderNode}
        renderMark={renderMark}
      />
    </Wrapper>
  );
};
