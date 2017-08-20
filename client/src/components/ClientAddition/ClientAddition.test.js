import React from 'react';
import { shallow } from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import ClientAddition from './ClientAddition';
import InfoUpdate from '../InfoUpdate';
import SlotUpdate from '../SlotUpdate/SlotUpdate';

describe('<ClientAddition />', () => {
  const props = {
    addClient: client => {},
  };

  // Should add a store to connect the component
  it('should render an InfoUpdate', () => {
    const renderedComponent = shallow(<ClientAddition {...props} />);
    expect(renderedComponent.find(InfoUpdate).length).toEqual(1);
  });

  it('should render an SlotUpdateContainer', () => {
    const renderedComponent = shallow(<ClientAddition {...props} />);
    expect(renderedComponent.find(SlotUpdate).length).toEqual(1);
  });

  it('should render a Button', () => {
    const renderedComponent = shallow(<ClientAddition {...props} />);
    expect(renderedComponent.find(RaisedButton).length).toEqual(1);
  });

  // it('should dispatch REGISTER_CLIENT action when clicking on register button', () => {
  // });

  it('should render a message if any', () => {
    const renderedComponent = shallow(<ClientAddition {...props} message={'Client ajouté'} />);
    expect(renderedComponent.contains('Client ajouté')).toBe(true);
  });
});
