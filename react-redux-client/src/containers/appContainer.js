// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/AppComponent';
import * as carActions from '../actions/carActions';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedToggleAddCar: () => dispatch(appActions.toggleAddCar()),
    mappedOffAddCar: () => dispatch(appActions.offAddCar()),
    mappedAddCar: car => dispatch(carActions.addNewCar(car)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
