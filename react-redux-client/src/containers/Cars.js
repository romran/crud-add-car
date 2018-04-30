// ./react-redux-client/src/containers/Cars.js
import { connect } from 'react-redux';
import * as carActions from '../actions/carActions';
import Cars from '../components/Cars';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedCarState: state.carState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchCars: () => dispatch(carActions.fetchCars()),
    mappedDeleteCar: carToDelete => dispatch(carActions.deleteCar(carToDelete)),
    mappedshowModal: carToDelete => dispatch(carActions.showModal(carToDelete)),
    mappedhideModal: () => dispatch(carActions.hideModal()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cars);
