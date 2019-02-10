import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Modal} from 'react-native';

import HistoryModal from '../../src/modals/HistoryModal';
import {createRandomProps} from '../model-factory';

describe('HistoryModal', () => {
    let expectedProps,

        renderedComponent;

    const renderComponent = () => {
        const shallowRenderer = ShallowRenderer.createRenderer();

        shallowRenderer.render(<HistoryModal {...expectedProps} />);

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
