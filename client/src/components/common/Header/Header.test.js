import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('should render "NHOLE"', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.contains('NHOLE'));
  });
});
