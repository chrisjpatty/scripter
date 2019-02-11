import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../colors";

export default ({ title = "Untitled", onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      <ButtonWrapper>
        <Button
          style={{
            background:
              COLORS[18].color
          }}
        >
          U
        </Button>
      </ButtonWrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
});

const ButtonWrapper = styled("div")({
  width: "16.66666666vw",
  height: "16.66666666vw",
  padding: "1.5vw"
});

const Button = styled("button")(
  {
    width: "100%",
    height: "100%",
    background: "none",
    border: "none",
    borderRadius: 10,
    borderTop: "1px solid rgb(237, 237, 237)",
    fontSize: "7vw",
    fontWeight: 600,
    color: "#fff"
  },
  ({ theme }) => ({
    boxShadow: theme.shadows.high
  })
);

const Title = styled("label")({
  fontSize: "1.vw",
  fontWeight: 300
});
