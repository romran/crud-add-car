// ./react-redux-client/src/containers/Car.js
import { connect } from 'react-redux';
import * as carActions from '../actions/carActions';
import Car from '../components/Car';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedCarState: state.carState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchCarById: carId => dispatch(carActions.fetchCarById(carId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Car);
