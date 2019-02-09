import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Provider} from 'react-redux';

import App from '../src/App';

describe('App.js', () => {
    let renderedComponent;

    const cacheChildren = () => {};

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<App />);

        renderedComponent = shallowRenderer.getRenderOutput();

        cacheChildren();
    };

    beforeEach(() => {
        renderComponent();
    });

    it('should create the store and the persistor', () => {
        expect(reduxPersist.persistReducer).toHaveBeenCalledTimes(1);
        expect(redux.createStore).toHaveBeenCalledTimes(1);
        expect(reduxPersist.persistStore).toHaveBeenCalledTimes(1);
    });

    it('should render a root Provider', () => {
        expect(renderedComponent.type).toBe(Provider);
    });
});
