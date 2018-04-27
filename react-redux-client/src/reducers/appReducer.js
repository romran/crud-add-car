// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
  showAddCar: false
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_CAR':
          return {
            ...currentState,showAddCar: !currentState.showAddCar
          }


    default:
       return currentState;

  }
}

export default appReducer;
