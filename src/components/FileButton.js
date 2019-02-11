import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../colors";

export default ({ title, onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      <ButtonWrapper>
        <Button
          className="icon-button"
          style={{
            background:
              COLORS[18].color
          }}
        >
          {title ? title[0].toUpperCase() : 'U'}
        </Button>
      </ButtonWrapper>
      <TitleWrapper>
        <Title>{title || "Untitled"}</Title>
      </TitleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  cursor: 'pointer'
}, ({theme}) => ({
  '&:hover': {
    '& .icon-button': {
      boxShadow: theme.shadows.highDark,
      transform: 'scale(1.05)'
    }
  }
}));

const ButtonWrapper = styled("div")({
  width: "16.2666666vw",
  height: "16.2666666vw",
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
    color: "#fff",
    transition: 'box-shadow 400ms, transform 400ms'
  },
  ({ theme }) => ({
    boxShadow: theme.shadows.high,
  })
);

const Title = styled("label")({
  fontSize: "1.vw",
  fontWeight: 300,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  textAlign: 'center'
});

const TitleWrapper = styled('div')({
  overflow: 'hidden',
  width: '100%',
  maxWidth: '14vw',
  textOverflow: 'ellipsis',
  textAlign: 'center'
})
