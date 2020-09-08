import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk' // Вызывать диспатч в экшенах
import createSagaMiddleware from 'redux-saga' // Позволяет использовать sagи, создаем сагу
import {sagaWatcher} from './redux/sagas'

import {rootReducer} from './redux/rootReducer'
import {spambidderWordsMiddleware} from './redux/middleware'
import App from './App';
import * as serviceWorker from './serviceWorker';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose (
    applyMiddleware(
      thunk,
      spambidderWordsMiddleware,
      saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher) 

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
              <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
