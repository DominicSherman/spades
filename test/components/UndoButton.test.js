import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Touchable from 'react-native-platform-touchable';

import UndoButton from '../../src/components/UndoButton';

describe('UndoButton', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<UndoButton {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = {};

        renderComponent();
    });

    it('should render a root Touchable', () => {
        expect(renderedComponent.type).toBe(Touchable);
    });
});
