import React from 'react';
import { shallow } from 'enzyme';
import ClientsDisplay from './ClientsDisplay';
import Client from '../Client';

describe('<ClientsDisplay />', () => {
  const props = {
    getClients: () => {},
    clientListLoading: () => {},
    getClientsFail: () => {},
    getClientsSuccess: clients => {},
    clients: [
      ('client': {
        firstname: 'Aurore',
        lastname: 'Ma',
        number: '01',
        morning: false,
        lunch: true,
        afternoon: false,
        evening: true,
      }),
      ('client': {
        firstname: 'Christine',
        lastname: 'Ma',
        number: '02',
        morning: true,
        lunch: false,
        afternoon: false,
        evening: true,
      }),
      ('client': {
        firstname: 'Elliot',
        lastname: 'Ma',
        number: '03',
        morning: false,
        lunch: false,
        afternoon: true,
        evening: true,
      }),
    ],
  };

  it('should render 3 Client Components', () => {
    const renderedComponent = shallow(<ClientsDisplay {...props} />);
    expect(renderedComponent.find(Client).length).toEqual(3);
  });
});
