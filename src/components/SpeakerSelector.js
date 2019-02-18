import React, { useState } from "react";
import styled from "@emotion/styled";
import useSpeakersContext from "../hooks/useSpeakersContext";
import useOnClickOutside from "../hooks/useOnClickOutside";
import RoundPlusButton from "./RoundPlusButton";
import SpeakerEditor from "./SpeakerEditor";
import shortid from "shortid";
import Speaker from "./Speaker";

export default ({
  speakerId,
  onRequestClose,
  addingFirstSpeaker,
  onSpeakerSelected
}) => {
  const [addingSpeaker, setAddingSpeaker] = useState(false);
  const insideRef = useOnClickOutside(e => {
    onRequestClose(e.target.classList.contains("add-speaker"));
  });
  const [speakers, setGlobalSpeakers] = useSpeakersContext();

  const currentSpeaker = speakers.find(s => s.id === speakerId);
  const filteredSpeakers = speakers.filter(s => s.id !== speakerId);

  const toggleSpeakerAdd = override =>
    setAddingSpeaker(s => (override === undefined ? override : !s));

  const addNewSpeaker = speaker => {
    const newSpeaker = {
      ...speaker,
      id: shortid.generate()
    };
    setGlobalSpeakers([...speakers, newSpeaker]);
    onSpeakerSelected(newSpeaker.id);
    toggleSpeakerAdd()
    onRequestClose();
  };

  const editSpeaker = speaker => {
    const speakerIndex = speakers.findIndex(s => s.id === speakerId);
    setGlobalSpeakers([
      ...speakers.slice(0, speakerIndex),
      {
        ...speaker,
        id: speakerId
      },
      ...speakers.slice(speakerIndex + 1)
    ]);
    toggleSpeakerAdd();
  };

  return (
    <Wrapper ref={insideRef}>
      {currentSpeaker && (
        <SelectButtonWrapper
          onClick={() => {
            onSpeakerSelected(speakerId);
          }}
        >
          <Speaker interactive {...currentSpeaker} />
        </SelectButtonWrapper>
      )}
      {filteredSpeakers.map(speaker => (
        <SelectButtonWrapper
          onClick={() => {
            onSpeakerSelected(speaker.id);
          }}
          key={speaker.id}
        >
          <Speaker interactive {...speaker} />
        </SelectButtonWrapper>
      ))}
      <RoundPlusButton onClick={toggleSpeakerAdd} />
      {(addingSpeaker || addingFirstSpeaker) && (
        <SpeakerEditorWrapper>
          <SpeakerEditor
            onNewSubmit={addNewSpeaker}
            onSubmit={editSpeaker}
            isNew={addingFirstSpeaker || addingSpeaker}
          />
        </SpeakerEditorWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled("div")(
  {
    display: "flex",
    flexDirection: "column",
    borderRadius: 24,
    background: "#ffffff",
    position: "relative"
  },
  ({ theme }) => ({
    boxShadow: theme.shadows.high
  })
);

const SpeakerEditorWrapper = styled("div")({
  position: "absolute",
  left: 55,
  bottom: -159
});

const SelectButtonWrapper = styled("button")({
  padding: 0,
  margin: 0,
  border: "none",
  background: "none",
  outline: "none"
});
