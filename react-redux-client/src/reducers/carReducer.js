 const INITIAL_STATE = {
  cars: [],
  car: null,
  isFetching: false,
  error: null,
  successMsg: null,
  showDeleteModal: false,
  carToDelete: null,
  newCar: null
}

export const carReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CARS_REQUEST':
      return {
        ...currentState,
        cars: [],
        car: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        carToDelete: null,
      }

    case 'FETCH_CARS_SUCCESS':
      return {
        ...currentState,
        cars: action.cars,
        car: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        carToDelete: null,
      }

    case 'FETCH_CARS_FAILED':
      return {
        ...currentState,
        cars: [],
        car: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        carToDelete: null,
      }

    case 'ADD_NEW_CAR_REQUEST':
      return {
        ...currentState,
        cars: currentState.cars,
        car: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        carToDelete: null,
        newCar: action.car
      }

    case 'ADD_NEW_CAR_REQUEST_FAILED':
      return {
        ...currentState,
        cars: currentState.cars,
        car: null,
        isFetching: true,
        error: action.error,
        successMsg: null,
        showDeleteModal: false,
        carToDelete: null,
        newCar: null
      }

    case 'ADD_NEW_CAR_REQUEST_SUCCESS':
      const nextState = {
        ...currentState,
        cars: [...currentState.cars, action.car],
        car: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: false,
        carToDelete: null,
        newCar: action.car
      }
      return nextState;

    case 'DELETE_CAR_REQUEST':
      return {
        ...currentState,
        cars: currentState.cars,
        car: null,
        isFetching: true,
        error: null,
        successMsg: null,
        showDeleteModal: true,
        carToDelete: action.car,
        newCar: null
      }

    case 'DELETE_CAR_SUCCESS':
      const filteredCars = currentState.cars.filter((car) => (car !== undefined) ? car._id !== currentState.carToDelete._id : null)
      return {
        ...currentState,
        cars: filteredCars,
        car: null,
        isFetching: false,
        error: null,
        successMsg: action.message,
        showDeleteModal: true,
        carToDelete: null,
        newCar: null
      }


    case 'DELETE_CAR_FAILED':
      return {
        ...currentState,
        cars: currentState.cars,
        car: null,
        isFetching: false,
        error: action.error,
        successMsg: null,
        showDeleteModal: true,
        carToDelete: null,
        newCar: null
      }

    case 'SHOW_MODAL':
      return {
        ...currentState,
        cars: currentState.cars,
        car: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: true,
        carToDelete: action.car,
        newCar: null
      }

    case 'HIDE_MODAL':
      return {
        ...currentState,
        cars: currentState.cars,
        car: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        carToDelete: null,
        newCar: null
      }


    default:
      return currentState;

  }
}
