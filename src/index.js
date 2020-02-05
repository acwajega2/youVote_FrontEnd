import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//---IMporting the youVote provider to wrap around the whole application.
import {YouVoteProvider} from './components/Context'

ReactDOM.render(
  <YouVoteProvider>
    <App />

  </YouVoteProvider>
  ,
  document.getElementById('root')
);
