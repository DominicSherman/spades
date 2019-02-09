import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {SafeAreaView, View} from 'react-native';

import Home from '../src/Home';

describe('Home', () => {
    let expectedProps,

        renderedComponent;

    const cacheChildren = () => {};

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<Home {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();

        cacheChildren();
    };

    beforeEach(() => {
        expectedProps = {};

        renderComponent();
    });

    it('should render a root SafeAreaView', () => {
        expect(renderedComponent.type).toBe(SafeAreaView);
    });
});
