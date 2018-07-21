import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import spadesScore from './app/reducers/combine-reducers';
import Home from './app/components/Home';

const store = createStore(spadesScore, applyMiddleware(thunk));

export default class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}
