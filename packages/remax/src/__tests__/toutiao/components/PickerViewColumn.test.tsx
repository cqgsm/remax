import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import PickerViewColumn from '../../../adapters/toutiao/components/PickerViewColumn';

describe('PickerViewColumn', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<PickerViewColumn />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
