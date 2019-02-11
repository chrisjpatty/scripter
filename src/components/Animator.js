import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { Spring } from "react-spring/renderprops";

const SPRING_CONFIG = {
  mass: 1,
  tension: 250,
  friction: 29
}

export default ({ coordinates: { from, to }, animatingOut, onAnimatedOut, animatingIn, onAnimatedIn, visible }) => {
  const leftThreshold = to.left + 3
  const rested = useRef(false)

  // const handleRest = () => {
  //   if(animatingOut){
  //     onAnimatedOut()
  //   }else{
  //     onAnimatedIn()
  //   }
  // }

  useEffect(() => {
    rested.current = false
  }, [animatingOut, animatingIn])

  const handleFrame = style => {
    if(!animatingOut){
      if(!rested.current && style.left <= leftThreshold){
        onAnimatedIn()
        rested.current = true
      }
    }else{
      // console.log(rested.current, style.left, from.left);
      if(!rested.current && style.left >= (from.left - 2)){
        onAnimatedOut()
        rested.current = true
      }
    }
  }

  return (
    <Spring
      config={SPRING_CONFIG}
      from={animatingOut ? to : from}
      to={animatingOut ? from : to}
      // onRest={handleRest}
      onFrame={handleFrame}
    >
      {style => (
        <Box
          style={{
            left: style.left,
            top: style.top,
            width: style.width,
            height: style.height,
            opacity: visible ? 1 : 0
          }}
        />
      )}
    </Spring>
  );
};

const Box = styled("div")(
  {
    position: "fixed",
    left: 0,
    top: 0,
    background: "#ffffff",
    borderRadius: 5,
    zIndex: 5,
    transition: 'opacity 200ms'
  },
  ({ theme }) => ({
    borderTop: `1px solid rgb(228, 228, 228)`,
    boxShadow: theme.shadows.high
  })
);
