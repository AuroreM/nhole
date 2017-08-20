import React from 'react';
import { shallow } from 'enzyme';
import SlotUpdate from './SlotUpdate';
import Chip from 'material-ui/Chip';

describe('<SlotUpdate />', () => {
  it('should render 4 Chip', () => {
    const renderedComponent = shallow(<SlotUpdate />);
    expect(renderedComponent.find(Chip).length).toEqual(4);
  });
});
