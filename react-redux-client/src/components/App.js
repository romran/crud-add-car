// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
//import CarForm from './CarForm';

import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggleAddCar = this.toggleAddCar.bind(this);
    this.addCar = this.addCar.bind(this);

  }

  toggleAddCar(e) {
    e.preventDefault();
    this.props.mappedToggleAddCar();
  }

  addCar(e) {
    e.preventDefault();
    const form = document.getElementById('addCarForm');
    if (form.carNumber.value !== "" && form.carOwner.value !== "") {
      const data = new FormData();
      data.append('carNumber', form.carNumber.value.toUpperCase());
      data.append('carOwner', form.carOwner.value);
      // const data = {
      //   todoText: form.todoText.value,
      //   todoDesc: form.todoDesc.value
      // }
      this.props.mappedAddCar(data);
      form.reset();
    }
    else {
      return;
    }
  }

  render() {
    const appState = this.props.mappedAppState;
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
              <LinkContainer to={{ pathname: '/', query: {} }}>
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

            <form className="form form-horizontal" id="addCarForm" onSubmit={this.addCar}>
              <div className="row">
                <h3 className="centerAlign">Add Car</h3>
                <div className="col-md-12">
                  <FormGroup>
                    <ControlLabel>Car: </ControlLabel>
                    <FormControl  
                      type="text" placeholder="Enter car plate number" required
                      name="carNumber" maxLength="6" minLength="6" 
                      pattern="(\w{3}).*?(\d{3})" title="Three letters and three numbers car number"
                    />
                  </FormGroup>
                </div>
                <div className="col-md-12">
                  <FormGroup>
                    <ControlLabel>Owner: </ControlLabel>
                    <FormControl
                      type="text" placeholder="Enter car's owner"
                      name="carOwner" required
                      maxLength="250" minLength="1" 
                    />
                  </FormGroup>
                </div>
              </div>
              <FormGroup>
                <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
              </FormGroup>
            </form>

            /* 
                        <CarForm addCar={this.addCar} /> */
          }
          { /* Each Smaller Components */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
