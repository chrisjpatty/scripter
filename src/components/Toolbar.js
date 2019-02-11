import React from "react";
import styled from "@emotion/styled";
import { Link } from 'react-router-dom'
import { Back as BackIcon } from '@chrisjpatty/tang-ui-icons'

export default ({ title, onChange, onTitleFocus, onTitleBlur }) => {
  return (
    <Wrapper>
      <Link to='/files' >
        <IconWrapper>
          <BackIcon/>
        </IconWrapper>
      </Link>
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
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  background: '#ffffff',
  flexDirection: 'row'
}, ({theme}) => ({
  // boxShadow: theme.shadows.insetReverse.low,
  borderBottom: `1px solid #ffffff`
}));

const InputWrapper = styled("div")({
  flex: '1 1 auto'
});

const TitleInput = styled("input")({
  width: '100%',
  height: 70,
  padding: 20,
  paddingLeft: 5,
  fontSize: '4vw',
  fontWeight: 300,
  background: 'none',
  border: 'none',
  outline: 'none'
}, ({theme}) => ({
  color: theme.gray.medium,
  '&:focus': {
    color: theme.gray.mediumDark
    // background: 'rgba(0,0,0,.05)'
  },
  '&::placeholder': {
    color: theme.gray.extraLight
  }
}));

const IconWrapper = styled('span')({
  height: 70,
  width: 60,
  fontSize: 40,
  padding: 10,
  fontWeight: 600,
  lineHeight: 0,
  background: 'none',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& svg': {
    width: '100%'
  }
}, ({theme}) => ({
  color: theme.gray.light,
  '&:hover': {
    color: theme.gray.medium
  }
}))
