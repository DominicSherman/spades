import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Modal} from 'react-native';

import SettingsModal from '../../src/modals/SettingsModal';
import {createRandomProps} from '../model-factory';

jest.mock('../../src/services/style-service');

describe('SettingsModal', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<SettingsModal {...expectedProps} />);

        renderedComponent = shallowRenderer.getRenderOutput();
    };

    beforeEach(() => {
        expectedProps = createRandomProps();

        renderComponent();
    });

    it('should render a root Modal', () => {
        expect(renderedComponent.type).toBe(Modal);
    });
});
