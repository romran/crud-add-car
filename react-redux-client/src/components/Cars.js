// ./react-redux-client/src/components/Cars.js
import React from 'react';
import { Alert, Glyphicon, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
//import TodoEditForm from './TodoEditForm';

export default class Cars extends React.Component {
  constructor(props) {
    super(props);
    // this.hideEditModal = this.hideEditModal.bind(this);
    //  this.submitEditTodo = this.submitEditTodo.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteCar = this.cofirmDeleteCar.bind(this);
  }

  componentWillMount() {
    this.props.fetchCars();
  }
 
  hideDeleteModal() {
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(carToDelete) {
    this.props.mappedshowDeleteModal(carToDelete);
  }

  cofirmDeleteCar() {
    this.props.mappedDeleteCar(this.props.mappedCarState.carToDelete);
  }

  render() {
    const carState = this.props.mappedCarState;
    const cars = carState.cars;
    //  const editTodo = carState.todoToEdit;
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
          <table className="table booksTable">
            <thead>
              <tr><th>Car</th>{/* <th className="textCenter">Edit</th> */}<th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
            </thead>
            <tbody>
              {cars.map((car, i) => <tr key={i}>
                <td>{car.carNumber} {car.carOwner}</td>
                <td className="textCenter"><Button onClick={() => this.showDeleteModal(car)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
                <td className="textCenter"><Link to={`/${car._id}`}>View Details</Link> </td>

              </tr>)
              }
            </tbody>
          </table>
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
                <Button onClick={this.hideDeleteModal}>No</Button>
              </div>
            }
            {carState.successMsg && !carState.isFetching &&
              <Button onClick={this.hideDeleteModal}>Close</Button>
            }
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
