import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/common/Button';
import ClientAddition from './ClientAddition';
import InfoUpdate from '../../components/ClientAddition/InfoUpdate';
import SlotUpdate from '../../components/ClientAddition/SlotUpdate';

describe('<ClientAddition />', () => {
  const props = {
    addClient: client => {},
  };

  it('should render an InfoUpdate', () => {
    const renderedComponent = shallow(<ClientAddition {...props} />);
    expect(renderedComponent.find(InfoUpdate).length).toEqual(1);
  });

  it('should render an SlotUpdate', () => {
    const renderedComponent = shallow(<ClientAddition {...props} />);
    expect(renderedComponent.find(SlotUpdate).length).toEqual(1);
  });

  it('should render a Button', () => {
    const renderedComponent = shallow(<ClientAddition {...props} />);
    expect(renderedComponent.find(Button).length).toEqual(1);
  });

  // it('should dispatch REGISTER_CLIENT action when clicking on register button', () => {
  // });

  it('should render a message if any', () => {
    const renderedComponent = shallow(<ClientAddition {...props} toast={'Client ajouté'} />);
    expect(renderedComponent.contains('Client ajouté')).toBe(true);
  });
});
