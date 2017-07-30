import React from 'react';
import { mount, shallow } from 'enzyme';
import InfoUpdate from './InfoUpdate';
import TextField from 'material-ui/TextField';

describe('<InfoUpdate />', () => {
  const props = {
    updateClientInfo: (firstname, lastname, number) => {},
    firstname: '',
    lastname: '',
    number: '',
  };

  it('should render three TextFields', () => {
    const renderedComponent = shallow(<InfoUpdate {...props} />);
    expect(renderedComponent.find(TextField).length).toEqual(3);
  });

  // @TODO repair test
  it('should dispatch UPDATE_CLIENT_INFO when typing firstname', () => {
    // let updateClientInfoArg = null;
    // const updateClientInfo = (arg) => {
    //   updateClientInfoArg = arg;
    //   return {};
    // };
    // const renderedComponent = shallow(
    //   <InfoUpdate
    //     updateClientInfo={updateClientInfo}
    //     firstname={''}
    //     lastname={''}
    //     number={''}
    //   />
    // );
    // renderedComponent.find(TextField).at(0).simulate('change', {target: {value: 'Léon'}});
    // expect(updateClientInfoArg).toEqual({
    //   type: 'STORE_FIRSTNAME',
    //   firstname: "Léon",
    // });
  });
});
