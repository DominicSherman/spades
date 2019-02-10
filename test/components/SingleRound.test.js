import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {View} from 'react-native';

import SingleRound from '../../src/components/SingleRound';
import {createRandomRound} from '../model-factory';

describe('SingleRound', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<SingleRound {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = {
            item: createRandomRound()
        };

        renderComponent();
    });

    it('should render a root View', () => {
        expect(renderedComponent.type).toBe(View);
    });
});
