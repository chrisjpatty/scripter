import React, { useRef, useState, useContext } from "react";
import styled from "@emotion/styled";
import Speaker from "./Speaker";
// import useClientRect from "../hooks/useClientRect";
// import { Portal } from "react-portal";
import SpeakerSelector from "./SpeakerSelector";
import RoundPlusButton from "./RoundPlusButton";
import { setShortcutsDisabledContext, speakersContext } from "../pages/Edit";

export default ({
  text,
  id,
  onEditRequested,
  editing,
  getBlockRect,
  speakerId,
  onSpeakerSelected,
  speaker
}) => {
  const innerWrapperRef = useRef(null);
  const [isEditingSpeakers, setIsEditingSpeakers] = useState(false);
  // const [box, boxRef] = useClientRect([isEditingSpeakers !== null]);
  const setShortcutsDisabled = useContext(setShortcutsDisabledContext);
  const numSpeakers = useContext(speakersContext).length;

  const startSpeakerEdit = () => {
    setIsEditingSpeakers(true);
    setShortcutsDisabled(true);
  };

  const endSpeakerEdit = skipDisable => {
    setIsEditingSpeakers(false);
    if (!skipDisable) {
      setShortcutsDisabled(false);
    }
  };

  const startEdit = () => {
    onEditRequested({
      block: { text, id },
      box: innerWrapperRef.current.getBoundingClientRect()
    });
  };

  getBlockRect.current = startEdit;
  return (
    <Wrapper>
      <InnerWrapper
        ref={innerWrapperRef}
        onClick={startEdit}
        style={{ opacity: editing ? 0 : 1 }}
      >
        {text}
      </InnerWrapper>
      <SpeakerWrapper
        // ref={boxRef}
        onClick={startSpeakerEdit}
      >
        {speaker ? (
          <Speaker
            {...speaker}
            style={{ opacity: editing ? 0 : 1, transition: "opacity 200ms" }}
            innerCSS={{
              transition: "opacity 200ms",
              cursor: 'default'
            }}
            interactive
            innerAs='button'
          />
        ) : (
          <RoundPlusButton
            className="add-speaker"
            style={{ opacity: editing ? 0 : 1, transition: "opacity 200ms" }}
          />
        )}
        {isEditingSpeakers && (
          <SpeakerSelectorWrapper>
            <SpeakerSelector
              addingFirstSpeaker={numSpeakers === 0}
              onRequestClose={endSpeakerEdit}
              onSpeakerSelected={onSpeakerSelected}
              speakerId={speakerId}
            />
          </SpeakerSelectorWrapper>
        )}
      </SpeakerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  width: 400,
  padding: 20,
  paddingBottom: 0,
  paddingTop: 3,
  position: "relative"
});

const InnerWrapper = styled("div")(
  {
    padding: 20,
    background: "#ffffff",
    borderRadius: 5,
    minHeight: 58
  },
  ({ theme }) => ({
    borderTop: `1px solid ${theme.gray.extraExtraLight}`,
    boxShadow: theme.shadows.low
  })
);

const SpeakerWrapper = styled("div")({
  position: "absolute",
  right: 390,
  top: 11
});

const SpeakerSelectorWrapper = styled("div")({
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 9
});
