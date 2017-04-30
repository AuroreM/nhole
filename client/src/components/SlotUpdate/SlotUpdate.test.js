import React from 'react';
import { shallow } from 'enzyme';
import SlotUpdate from './SlotUpdate';
import CheckboxContainer from '../../containers/CheckboxContainer';

describe('<SlotUpdate />', () => {
  it('should render four Checkbox', () => {
    const renderedComponent = shallow(
      <SlotUpdate />
    );
    expect(renderedComponent.find(CheckboxContainer).length).toEqual(4);
  });
});
