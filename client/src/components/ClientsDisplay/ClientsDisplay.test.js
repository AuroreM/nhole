import React from 'react';
import { shallow } from 'enzyme';
import ClientsDisplay from './ClientsDisplay';
import Client from '../Client/Client';

describe('<ClientsDisplay />', () => {
  const props = {
    getClients: () => {},
    clientListLoading: () => {},
    getClientsFail: () => {},
    getClientsSuccess: (clients) => {},
    clients: [
      'client': {
        firstname: 'Aurore',
        lastname: 'Ma',
        number: '01',
        morning: false,
        lunch: true,
        afternoon: false,
        evening: true,
      },
      'client': {
        firstname: 'Christine',
        lastname: 'Ma',
        number: '02',
        morning: true,
        lunch: false,
        afternoon: false,
        evening: true,
      },
    ]
  };

  it('should render an InfoUpdateContainer', () => {
    const renderedComponent = shallow(
      <ClientsDisplay {...props} />
    );
    expect(renderedComponent.find(Client).length).toEqual(2);
  });
});
