import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {View} from 'react-native';

import Footer from '../../src/components/Footer';
import {createRandomProps} from '../model-factory';

jest.mock('../../src/services/style-service');

describe('Footer', () => {
    let expectedProps,

        renderedComponent,
        renderedSubmitText;

    const cacheChildren = () => {
        const renderedSubmitTouchable = renderedComponent.props.children[1];
        const renderedSubmitView = renderedSubmitTouchable.props.children;

        renderedSubmitText = renderedSubmitView.props.children[3];
    };

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<Footer {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
        cacheChildren();
    };

    beforeEach(() => {
        expectedProps = createRandomProps();

        renderComponent();
    });

    it('should render a root View', () => {
        expect(renderedComponent.type).toBe(View);
    });

    it('should render the text as SUBMIT BIDS when isBids', () => {
        expectedProps.isBids = true;
        renderComponent();

        expect(renderedSubmitText.props.children).toBe('SUBMIT BIDS');
    });

    it('should render the text as SUBMIT RESULTS when not isBids', () => {
        expectedProps.isBids = false;
        renderComponent();

        expect(renderedSubmitText.props.children).toBe('SUBMIT RESULTS');
    });
});
