import React, { useState, useContext } from 'react'
import styled from '@emotion/styled'
import { speakersContext } from '../pages/Edit'
import SpeakerSelector from './SpeakerSelector'
import Speaker from './Speaker'
import RoundPlusButton from './RoundPlusButton'

export default ({onSpeakerSelected, speakerId}) => {
  const [isEditingSpeakers, setIsEditingSpeakers] = useState(false);
  const speakers = useContext(speakersContext);
  const numSpeakers = speakers.length;

  const startSpeakerEdit = () => {
    setIsEditingSpeakers(true);
  };

  const endSpeakerEdit = () => {
    setIsEditingSpeakers(false);
  };

  const speaker = speakers.find(s=>s.id === speakerId)

  return (
    <SpeakerWrapper
      // ref={boxRef}
      onClick={startSpeakerEdit}
      contentEditable={false}
    >
      {speaker ? (
        <Speaker
          {...speaker}
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
        />
      )}
      {isEditingSpeakers && (
        <SpeakerSelectorWrapper contentEditable={false}>
          <SpeakerSelector
            addingFirstSpeaker={numSpeakers === 0}
            onRequestClose={endSpeakerEdit}
            onSpeakerSelected={onSpeakerSelected}
            speakerId={speakerId}
          />
        </SpeakerSelectorWrapper>
      )}
    </SpeakerWrapper>
  )
}

const SpeakerWrapper = styled("div")({
  position: "absolute",
  left: -60,
  top: -10
});

const SpeakerSelectorWrapper = styled("div")({
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 9
});
