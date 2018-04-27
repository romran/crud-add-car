// ./react-redux-client/src/components/CarForm.js
import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


/* class CarForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const adCa = this.props
    return (
      <form className="form form-horizontal" id="addCarForm" onSubmit={props.addCar}>
        <div className="row">
          <h3 className="centerAlign">Add Car</h3>
          <div className="col-md-12">
            <FormGroup validationState={this.getValidationState()}>
              <ControlLabel>Car: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter car plate number"
                name="carNumber" maxLength="6" minLength="6" value={this.state.value}  onChange={this.handleChange}
              />
            </FormGroup>
          </div>
          <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Owner: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter car's owner"
                name="carOwner"
              />
            </FormGroup>
          </div>
        </div>
        <FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
        </FormGroup>
      </form>
    )
  }
}
 */


  const CarForm = (props) => {
    return (
      <form className="form form-horizontal" id="addCarForm" onSubmit={props.addCar}>
        <div className="row">
          <h3 className="centerAlign">Add Car</h3>
          <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Car: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter car plate number"
                name="carNumber" maxLength="6" minLength="6" value="testin"
              />
            </FormGroup>
          </div>
          <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Owner: </ControlLabel>
              <FormControl
                type="text" placeholder="Enter car's owner"
                name="carOwner"
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
