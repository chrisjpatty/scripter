import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ColorSelector from "./ColorSelector";
import Button from "./Button";
import Speaker from "./Speaker";

export default ({ isNew, onSubmit, onNewSubmit }) => {
  const [name, setName] = useState("");
  const [colorId, setColorId] = useState(1);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Wrapper>
      <PreviewWrapper>
        <Speaker name={name} colorId={colorId} transition />
      </PreviewWrapper>
      <NameInput
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
        ref={inputRef}
        type="text"
        placeholder="Speaker Name"
        contentEditable={false}
      />
      <ColorSelectorWrapper>
        <ColorSelector
          onSelect={colorId => setColorId(colorId)}
          selectedColorId={colorId}
        />
      </ColorSelectorWrapper>
      <ButtonwWrapper>
        <Button
          disabled={name === ""}
          onClick={() => {
            if(isNew){
              onNewSubmit({
                colorId,
                name
              });
            }else{
              onSubmit({
                colorId,
                name
              })
            }
          }}
        >
          {isNew ? "Add Speaker" : "Edit Speaker"}
        </Button>
      </ButtonwWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")(
  {
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
    borderRadius: 5,
    padding: 5
  },
  ({ theme }) => ({
    boxShadow: theme.shadows.high,
    borderTop: `1px solid ${theme.gray.extraExtraLight}`
  })
);

const NameInput = styled("input")(
  {
    width: "100%",
    height: 35,
    background: "#ffffff",
    borderRadius: 3,
    border: `2px solid`,
    padding: 4,
    outline: "none"
  },
  ({ theme }) => ({
    borderColor: theme.gray.extraLight,
    "&:focus": {
      borderColor: theme.primary.color
    }
  })
);

const ColorSelectorWrapper = styled("div")({
  paddingTop: 4
});

const ButtonwWrapper = styled("div")({
  paddingTop: 3,
  display: "flex",
  flexDirection: "column"
});

const PreviewWrapper = styled("div")({
  position: "absolute",
  left: -55,
  top: 10
});
