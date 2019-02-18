import React from "react";
import styled from "@emotion/styled";
import { ORDERED_COLORS } from "../colors";

export default ({ selectedColorId, onSelect }) => (
  <Wrapper>
    {ORDERED_COLORS.map(c => (
      <ColorBlock
        onClick={() => {
          onSelect(c.id);
        }}
        color={c.color}
        selected={selectedColorId === c.id}
        key={c.id}
      />
    ))}
  </Wrapper>
);

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: 216
});

const ColorBlock = ({ color, onClick, selected }) => (
  <ColorWrapper>
    <Color
      onClick={onClick}
      style={{ background: color }}
      data-selected={selected}
    />
  </ColorWrapper>
);

const ColorWrapper = styled("div")({
  padding: 3
});

const Color = styled("button")(
  {
    background: "#000000",
    border: "none",
    width: 30,
    height: 30,
    borderRadius: 2,
    outline: "none",
    transition: "transform 100ms",
    "&:focus": {
      opacity: 0.8
      // transform: 'scale(1.1)'
    }
    // '&[data-selected=true]': {
    //   transform: 'scale(1.1)'
    // }
  },
  ({ theme, selected }) => ({
    boxShadow: theme.shadows.low
  })
);
