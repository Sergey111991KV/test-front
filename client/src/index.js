import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import state from './redux/state'
import {addComment, updateNewComment, stateModal} from './redux/state'





ReactDOM.render(
  <React.StrictMode>
    <App  appState={state}
          addComment={addComment} 
          updateNewComment={updateNewComment}
          stateModal={stateModal}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
