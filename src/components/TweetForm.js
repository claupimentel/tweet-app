import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled.textarea`
  border: 1px solid #dcdcdc;
  border-radius: 7px;
  color: #595959;
  font-size: 1.5rem;
  padding: 1rem;
  resize: none;
  margin-botton: 1rem;
`;

const StyledButton = styled.button`
  background: #0099ff;
  color: #fdfdfd;
  border-radius: 50px;
  border: none;
  padding .25rem .5rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledRow = styled.div`
  text-align: rigth;
`;

const TweetForm = ({ onSubmit }) => {
  const [tweet, updateTweet] = useState('');

  const handleChange = event => updateTweet(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if(tweet.trim()) {
      onSubmit({ tweet });
      updateTweet('');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledTextArea onChange={handleChange}/>
      <StyledRow>
        <StyledButton>Tweet</StyledButton>
      </StyledRow>
    </StyledForm>
  )
};

export default TweetForm;
