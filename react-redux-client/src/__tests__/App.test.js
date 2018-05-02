import React from 'react';
import App from '../App';
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders App component', () => {
    const app = shallow(<App />);
    expect(app);
  })
});