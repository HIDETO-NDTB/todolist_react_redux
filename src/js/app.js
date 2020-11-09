import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import TodoApp from './components/TodoApp';
import rootReducer from "./reducers";
import { Provider } from 'react-redux';

let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store} >
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);