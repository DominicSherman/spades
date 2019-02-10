import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {View} from 'react-native';

import CurrentRound from '../../src/components/CurrentRound';
import {createRandomProps} from '../model-factory';

describe('CurrentRound', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<CurrentRound {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = createRandomProps();

        renderComponent();
    });

    it('should render a root View', () => {
        expect(renderedComponent.type).toBe(View);
    });
});
