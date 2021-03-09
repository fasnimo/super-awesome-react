import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { BrowserRouter as Router} from "react-router-dom"
import { heroReducer } from "./reducers/heroReducer"
import thunk from "redux-thunk"
// import reportWebVitals from './reportWebVitals';
import App from './App';

const store = createStore(heroReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f ))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
          <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
