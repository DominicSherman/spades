import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import reducer from './redux/reducer';
import Home from './Home';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react'
import thunk from 'redux-thunk';

console.disableYellowBox = true;

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Home/>
                </PersistGate>
            </Provider>
        );
    }
}
