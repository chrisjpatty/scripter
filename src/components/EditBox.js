import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Button from "./Button";

export default ({ innerRef, visible, text, onChange }) => {
  const [value, setValue] = useState(text);

  useEffect(
    () => {
      setValue(text);
    },
    [text]
  );

  const checkSubmit = e => {
    if(e.keyCode === 13){
      const meta = e.getModifierState("Meta");
      const ctrl = e.getModifierState("Control")
      if(meta || ctrl){
        onChange(value)
      }
    }
  }

  return (
    <Wrapper>
      <TextArea
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        onKeyDown={checkSubmit}
        style={{ opacity: visible ? 1 : 0 }}
        ref={innerRef}
      />
      <ButtonWrapper>
        <Button
          onClick={() => {
            onChange(value)
          }}
          css={{
            transition: "opacity 200ms 200ms",
            opacity: 0
          }}
          style={{ opacity: visible ? 1 : 0, ...(!visible ? {transitionDelay: '0ms'} : {}) }}
        >
          Save
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  width: "100%",
  height: "100%",
  maxWidth: 600,
  maxHeight: 400,
  display: "flex",
  transition: "opacity 100ms",
  position: "relative"
});

const TextArea = styled("textarea")(
  {
    width: "100%",
    height: "100%",
    background: "#ffffff",
    borderRadius: 5,
    border: "none",
    borderTop: `1px solid rgb(228, 228, 228)`,
    zIndex: 10,
    outline: "none",
    padding: 20,
    resize: "none"
  },
  ({ theme }) => ({
    boxShadow: theme.shadows.high
  })
);

const ButtonWrapper = styled("div")({
  position: "absolute",
  zIndex: 10,
  right: 0,
  bottom: -50
});
