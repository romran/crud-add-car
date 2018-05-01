import React from 'react';
import App from '../App';
import Cars from '../components/Cars';
import AppComponent from '../components/AppComponent';
import { shallow, mount, render } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarForm from '../components/CarForm';
configure({ adapter: new Adapter() });

//Enzyme.configure({ Adapter: new Adapter() })


describe('App', () => {

  it('renders App component', () => {
    const app = shallow(<App />);
    expect(app);
  })

  it('renders CarForm component', () => {
    const component = shallow(<CarForm />);
    // const Provider = component.find(<Provider/>)
    // console.log(component);
    expect(component);
    //const button = component.find('a');
    //  expect(button)
    //  console.log(component);

  })

  it('renders Cars component', () => {
    const component = render(<AppComponent />);
    expect(component);
  })

  /*   it('renders welcome message', () => {
      const wrapper = shallow(<App />);
      const welcome = <Provider store={store}><div> <Router history={history} routes={routes} /></div></Provider>;
      // expect(wrapper.contains(welcome)).to.equal(true);
      expect(wrapper.contains(welcome)).toEqual(true);
    }); */

  /*   it('should mount in a full DOM', () => {
      const component = mount(<App />)
     // expect(mount(<App />).find('div').length).toBe(1);
    }); */

  /*  it('renders console', () => {
     const component = mount(<Cars />);
     //const button = component.find('a');
     //  expect(button)
   //  console.log(component);
   }) */
  /*   it('should render without throwing an error', function() {
      expect(shallow(<App />).find('nav').length).toBe(1);
    }); */

  /*   it('should be selectable by class "foo"', function() {
      expect(shallow(<Foo />).is('.foo')).toBe(true);
    });
  
    it('should mount in a full DOM', function() {
      expect(mount(<Foo />).find('.foo').length).toBe(1);
    });
  
    it('should render to static HTML', function() {
      expect(render(<Foo />).text()).toEqual('Bar');
    }); */
});


describe('App', () => {



});