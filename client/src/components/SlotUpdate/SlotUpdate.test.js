import React from 'react';
import { shallow } from 'enzyme';
import SlotUpdate from './SlotUpdate';
import Checkbox from '../Checkbox';

describe('<SlotUpdate />', () => {
  it('should render four Checkbox', () => {
    const renderedComponent = shallow(
      <SlotUpdate />
    );
    expect(renderedComponent.find(Checkbox).length).toEqual(4);
  });
});
