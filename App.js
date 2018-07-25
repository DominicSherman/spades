import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import Home from './components/Home';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}
