import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import EditBox from "./EditBox";
import Animator from "./Animator";
import { Spring } from 'react-spring/renderprops'

export default ({ getBoxRect, animationCoordinates, onClosed, text, onChange }) => {
  const [animatingIn, setAnimatingIn] = useState(false);
  const [animatedIn, setAnimatedIn] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);
  const editBoxRef = useRef(null);

  const getEditBoxRect = () => editBoxRef.current.getBoundingClientRect();

  useEffect(
    () => {
      setAnimatingIn(true);
    },
    animationCoordinates === null ? false : true
  );

  useEffect(() => {
    editBoxRef.current.focus()
  }, [])

  const handleAnimatedIn = () => {
    setAnimatedIn(true);
    setAnimatingIn(false);
  };

  const startAnimateOut = () => {
    setAnimatingOut(true);
  };

  const handleAnimatedOut = () => {
    setAnimatingOut(true);
    onClosed();
  };

  getBoxRect.current = getEditBoxRect;
  return (
    <PageWrapper>
      {animationCoordinates && (
        <Animator
          onAnimatedIn={handleAnimatedIn}
          onAnimatedOut={handleAnimatedOut}
          animatingOut={animatingOut}
          animatingIn={animatingIn}
          coordinates={animationCoordinates}
          visible={animatingIn || animatingOut}
        />
      )}
      <EditBox visible={animatedIn && !animatingOut} text={text} onChange={value => {
        onChange(value)
        startAnimateOut()
      }} innerRef={editBoxRef} />
      <Spring from={{opacity: 0}} to={{opacity: animatingOut ? 0 : 1}}>
        {
          style => (
            <Shade style={style} onClick={startAnimateOut} />
          )
        }
      </Spring>
    </PageWrapper>
  );
};

const PageWrapper = styled("div")({
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: 9,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

const Shade = styled("div")({
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  background: 'rgba(255,255,255,.5)',
  opacity: 0
});
