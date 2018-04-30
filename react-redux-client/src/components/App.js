// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import CarForm from './CarForm';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggleAddCar = this.toggleAddCar.bind(this);
    this.addCar = this.addCar.bind(this);
    this.offAddCar = this.offAddCar.bind(this);
  }

  toggleAddCar(e) {
    e.preventDefault();
    this.props.mappedToggleAddCar();
  }

  offAddCar(e) {
    e.preventDefault();
    this.props.mappedOffAddCar();
  }

  //addCar(car) {
  addCar(e) {
    e.preventDefault();
    const form = document.getElementById('addCarForm');
    if (form.carNumber.value !== "" && form.carOwner.value !== "") {
      const data = new FormData();
      data.append('carNumber', form.carNumber.value.toUpperCase());
      data.append('carOwner', form.carOwner.value);
      this.props.mappedAddCar(data);
      form.reset();
    }
    else {
      return
    }
  }

  render() {
    const appState = this.props.mappedAppState;
    console.log(appState);
    return (
      <div>
        <Navbar inverse collapseOnSelect className="customNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/#">Add Car App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: '/', query: {} }} onClick={this.offAddCar}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to={{ pathname: '/', query: {} }} onClick={this.toggleAddCar}>
                <NavItem eventKey={1}>Add Car</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {appState.showAddCar &&
            <CarForm addCar={this.addCar} />
          }
          { /* Each Smaller Components */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
