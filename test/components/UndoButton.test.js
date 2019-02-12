import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Touchable from 'react-native-platform-touchable';

import HeaderIcon from '../../src/components/HeaderIcon';

describe('HeaderIcon', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<HeaderIcon {...expectedProps} />);

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
