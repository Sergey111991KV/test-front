import React from 'react';
import ReactDOM from 'react-dom';
import state from './state'
import App from '../App'
import {addComment, updateNewComment, stateModal} from './state'




export let rerenderEntireTree = (state) => {
    console.log(state)
    ReactDOM.render(
        <React.StrictMode>
          <App  appState={state}
          addComment={addComment} 
          updateNewComment={updateNewComment}
          stateModal={stateModal}
    />
        </React.StrictMode>,
        document.getElementById('root'))
};

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();