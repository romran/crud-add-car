// ./react-redux-client/src/components/Cars.js
import React from 'react';
import { Alert, Glyphicon, Button, Modal } from 'react-bootstrap';

export default class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.hideModal = this.hideModal.bind(this);
    this.cofirmDeleteCar = this.cofirmDeleteCar.bind(this);
  }

  componentWillMount() {
    this.props.fetchCars();
  }

  hideModal() {
    this.props.mappedhideModal();
  }

  showModal(carToDelete) {
    this.props.mappedshowModal(carToDelete);
  }

  cofirmDeleteCar() {
    this.props.mappedDeleteCar(this.props.mappedCarState.carToDelete);
  }

  render() {
    const carState = this.props.mappedCarState;
    let cars = carState.cars;

    cars = cars.filter(function (element) {
      return element !== undefined;
    });
    console.log(carState);
    return (
      <div className="col-md-12">
        <h3 className="centerAlign">Cars</h3>
        {!cars && carState.isFetching &&
          <p>Loading cars....</p>
        }
        {cars.length <= 0 && !carState.isFetching &&
          <p>No Cars Available. Add A Car to List here.</p>
        }
        {cars && cars.length > 0 && !carState.isFetching &&
          <div>
            <table className="table booksTable">
              <thead>
                <tr><th>Car Number</th><th>Car Owner</th><th className="textCenter">Delete</th></tr>
              </thead>
              <tbody>
                {cars.map((car, i) => <tr key={i}>
                  <td>{car.carNumber}</td>
                  <td>{car.carOwner}</td>
                  <td className="textCenter"><Button onClick={() => this.showModal(car)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
                </tr>)
                }
              </tbody>
            </table>
          </div>
        }

        {/* Modal for deleting todo */}
        <Modal
          show={carState.showDeleteModal}
          onHide={this.hideDeleteModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Delete Your Car</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {carState.carToDelete && !carState.error && !carState.isFetching &&
              <Alert bsStyle="warning">
                Are you sure you want to delete this car: <strong>{carState.carToDelete.carNumber} </strong> ?
              </Alert>
            }
            {carState.carToDelete && carState.error &&
              <Alert bsStyle="warning">
                Failed. <strong>{carState.error} </strong>
              </Alert>
            }

            {carState.carToDelete && !carState.error && carState.isFetching &&
              <Alert bsStyle="success">
                <strong>Deleting.... </strong>
              </Alert>
            }

            {!carState.carToDelete && !carState.error && !carState.isFetching &&
              <Alert bsStyle="success">
                Car <strong>{carState.successMsg} </strong>
              </Alert>
            }
          </Modal.Body>
          <Modal.Footer>
            {!carState.successMsg && !carState.isFetching &&
              <div>
                <Button onClick={this.cofirmDeleteCar}>Yes</Button>
                <Button onClick={this.hideModal}>No</Button>
              </div>
            }
            {carState.successMsg && !carState.isFetching &&
              <Button onClick={this.hideModal}>Close</Button>
            }
          </Modal.Footer>
        </Modal>

        {/* Modal for duplicate value*/}
        <Modal
          show={carState.newCar != null || carState.newCar === undefined}
          onHide={this.hideDeleteModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Your Car</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {carState.newCar === undefined &&
              <Alert bsStyle="warning">
                Failed. <strong>{carState.successMsg} </strong>
              </Alert>
            }

            {carState.newCar != null &&
              <Alert bsStyle="success">
                <strong>{carState.successMsg} </strong>
              </Alert>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
