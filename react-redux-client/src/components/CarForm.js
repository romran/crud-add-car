// ./react-redux-client/src/components/CarForm.js
import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


const CarForm = (props) => {
  return (
    <form className="form form-horizontal" id="addCarForm" onSubmit={props.addCar}>
      <div className="row">
        <h3 className="centerAlign">Add Car</h3>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Car: </ControlLabel>
            <FormControl
              required
              type="text"
              placeholder="Enter car plate number"
              name="carNumber"
              maxLength="6" minLength="6"
              pattern="(\w{3}).*?(\d{3})" title="Three letters and three numbers car number"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Owner: </ControlLabel>
            <FormControl
              required
              type="text"
              placeholder="Enter car's owner"
              name="carOwner"
              maxLength="250" minLength="1"
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
      </FormGroup>
    </form>
  );
}

export default CarForm;
