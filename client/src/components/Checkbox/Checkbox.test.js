import React from 'react';
import { mount, shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  const props = {
    updateSloteChoice: () => {},
    slot: 'morning',
    label: 'Cours du matin'
  };

  it('should render four inputs', () => {
    const renderedComponent = mount(
      <Checkbox {...props} />
    );
    expect(renderedComponent.find('input').length).toEqual(1);
  });

  it('should render an input with "Cours du matin"', () => {
    const renderedComponent = mount(
      <Checkbox {...props} />
    );
    expect(renderedComponent.text()).toContain('Cours du matin');
  });

  // it('should dispatch UPDATE_CLIENT_INFO when typing firstname', () => {
  //   let updateSlotArg = null;
  //   const updateSloteChoice = (arg) => {
  //     console.log('toto')
  //     console.log(arg)
  //     updateSlotArg = arg;
  //     return {};
  //   };
  //   const renderedComponent = mount(
  //     <Checkbox updateSloteChoice={updateSloteChoice} slot={'morning'} label={'Cours du matin'} />
  //   );
  //   renderedComponent.find('input').at(0).simulate('click');
  //   expect(updateSlotArg).toEqual({
  //     type: 'UPDATE_SLOT_CHOICES',
  //     slot: "morning",
  //     label: "Cours du matin",
  //   });
  // });
});
