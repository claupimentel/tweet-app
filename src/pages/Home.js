import React, { useState } from 'react';
import App from '../containers/App';
import TweetForm from '../components/TweetForm';

const Home = () => {
  const [ tweets, updateTweets] = useState([])
  const handleSubmit = ({ tweet }) => {
    updateTweets([ ...tweets, tweet ])
  }
  return (
    <App>
      <TweetForm onSubmit={handleSubmit}/>
      <ul>
        { tweets.map((tweet, index) => (
            <li key={index}> { tweet } </li>
        ))}
      </ul>
    </App>
  )
};

export default Home;
