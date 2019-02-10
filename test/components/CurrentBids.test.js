import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {TouchableWithoutFeedback} from 'react-native';

import CurrentBids from '../../src/components/CurrentBids';
import {createRandomProps} from '../model-factory';

describe('CurrentBids', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<CurrentBids {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = createRandomProps();

        renderComponent();
    });

    it('should render a root TouchableWithoutFeedback', () => {
        expect(renderedComponent.type).toBe(TouchableWithoutFeedback);
    });
});
