import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './redux/redux-store'
import store from './redux/store'






let rerenderEntireTree = (state) => {
   
    ReactDOM.render(
        <React.StrictMode>
          <App  appState={state}
          dispatch={store.dispatch.bind(store)} 
    />
        </React.StrictMode>,
        document.getElementById('root'))
};

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// ReactDOM.render(
//   <React.StrictMode>
//     <App  appState={state}
//           addComment={addComment} 
//           updateNewComment={updateNewComment}
//           stateModal={stateModal}
//     />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
