import React from 'react';
import { mount } from 'enzyme';
import Client from './Client';

describe('<Client />', () => {
  const props = {
    client: {
      firstname: 'Aurore',
      lastname: 'Ma',
      number: '01',
      morning: false,
      lunch: true,
      afternoon: false,
      evening: true,
    },
  };

  it("should render client's name", () => {
    const renderedComponent = mount(<Client {...props} />);
    expect(renderedComponent.text()).toContain('Aurore Ma');
  });

  it("should render client's number", () => {
    const renderedComponent = mount(<Client {...props} />);
    expect(renderedComponent.text()).toContain('01');
  });

  it("should render client's timeslots", () => {
    const renderedComponent = mount(<Client {...props} />);
    expect(renderedComponent.text()).toContain('Midi, Soirée,');
  });
});
