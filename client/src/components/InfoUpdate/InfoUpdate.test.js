import React from 'react';
import { mount, shallow } from 'enzyme';
import InfoUpdate from './InfoUpdate';

describe('<InfoUpdate />', () => {
  const props = { updateClientInfo: (firstname, lastname, number) => {} };

  it('should render three inputs', () => {
    const renderedComponent = mount(
      <InfoUpdate {...props} />
    );
    expect(renderedComponent.find('input').length).toEqual(3);
  });

  it('should render an input with "Prénom"', () => {
    const renderedComponent = mount(
      <InfoUpdate {...props} />
    );
    expect(renderedComponent.text()).toContain('Prénom');
  });

  it('should render an input with "Nom"', () => {
    const renderedComponent = mount(
      <InfoUpdate {...props} />
    );
    expect(renderedComponent.text()).toContain('Nom');
  });

  it('should render an input with "Numéro de téléphone"', () => {
    const renderedComponent = mount(
      <InfoUpdate {...props} />
    );
    expect(renderedComponent.text()).toContain('Numéro de téléphone');
  });

   it('should dispatch UPDATE_CLIENT_INFO when typing firstname', () => {
     let updateClientInfoArg = null;
     const updateClientInfo = (arg) => {
       updateClientInfoArg = arg;
       return {};
     };
     const renderedComponent = mount(
       <InfoUpdate updateClientInfo={updateClientInfo} />
     );
     renderedComponent.find('input').at(0).simulate('change', {target: {value: 'Léon'}});
     expect(updateClientInfoArg).toEqual({
       type: 'STORE_FIRSTNAME',
       firstname: "Léon",
     });
   });
});
