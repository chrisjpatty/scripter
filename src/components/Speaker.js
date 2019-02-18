import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../colors";
import { Center } from '@chrisjpatty/tang-ui'

export default ({
  name = "",
  colorId,
  transition,
  innerAs,
  innerCSS,
  interactive,
  ...props
}) => {
  const parseCharacter = () => {
    if (!name[0]) {
      return "";
    } else {
      const codePoint = name.codePointAt(0);
      const char = String.fromCodePoint(codePoint);
      return char;
    }
  };
  return (
    <Wrapper {...props}>
      <InnerWrapper
        interactive={interactive}
        extraStyles={innerCSS}
        as={innerAs}
        data-transition={transition}
        style={{
          background: COLORS[colorId].color
        }}
      >
        <Center>{parseCharacter().toUpperCase()}</Center>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  padding: 5
});

const InnerWrapper = styled("div")(
  {
    width: 38,
    height: 38,
    borderRadius: "100%",
    background: COLORS[18].color,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontSize: 24,
    border: 'none',
    outline: 'none',
    padding: 0,
    "&[data-transition=true]": {
      transition: "background 200ms"
    }
    // fontWeight: 600
  },
  ({ extraStyles, theme }) =>
    typeof extraStyles === "function" ? extraStyles(theme) : extraStyles,
  ({ interactive }) =>
    interactive && {
      "&:hover": {
        opacity: 0.8
      }
    }
);
