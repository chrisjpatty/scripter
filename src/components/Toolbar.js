import React from "react";
import { css } from '@emotion/core'
import styled from "@emotion/styled";
import { Link } from 'react-router-dom'
import { Back as BackIcon } from '@chrisjpatty/tang-ui-icons'

export default ({ title, onChange, onTitleFocus, onTitleBlur }) => {
  return (
    <Wrapper>
      <LinkWrapper>
        <Link className={css(linkStyles).name} to='/files' >
          <IconWrapper>
            <BackIcon/>
          </IconWrapper>
        </Link>
      </LinkWrapper>
      <InputWrapper>
        <TitleInput
          type="text"
          value={title}
          placeholder='Untitled'
          onChange={e => {
            onChange(e.target.value);
          }}
          onFocus={onTitleFocus}
          onBlur={onTitleBlur}
        />
      </InputWrapper>
      {/* <SpeakerPicker /> */}
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  // background: '#ffffff',
  flexDirection: 'row'
}, ({theme}) => ({
  // boxShadow: theme.shadows.insetReverse.low,
  // borderBottom: `1px solid #ffffff`
}));

const InputWrapper = styled("div")({
  flex: '1 1 auto'
});

const TitleInput = styled("input")({
  width: '100%',
  height: 70,
  padding: 20,
  paddingLeft: 5,
  fontSize: 35,
  fontWeight: 300,
  background: 'none',
  border: 'none',
  outline: 'none'
}, ({theme}) => ({
  color: theme.gray.mediumDark,
  '&:focus': {
    color: theme.gray.mediumDark
    // background: 'rgba(0,0,0,.05)'
  },
  '&::placeholder': {
    color: theme.gray.extraLight
  }
}));

const LinkWrapper = styled('div')({
  height: 70,
  padding: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const IconWrapper = styled('div')({
  width: 46,
  height: 46,
  background: '#ffffff',
  fontSize: 40,
  padding: 7,
  fontWeight: 600,
  lineHeight: 0,
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  '& svg': {
    width: '100%'
  }
}, ({theme}) => ({
  color: theme.gray.medium,
  boxShadow: theme.shadows.low,
  '&:hover': {
    boxShadow: theme.shadows.mid
  }
}))

const linkStyles = {
  borderRadius: '100%'
}
