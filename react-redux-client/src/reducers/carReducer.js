// ./react-redux-client/src/reducers/carReducer.js
const INITIAL_STATE = {
  cars:[],
  car:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  carToDelete: null,
 // showEditModal: false,
 // carToEdit: null,
  newCar: null
}

export  const carReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CARS_REQUEST':
          return {
            ...currentState,
            cars:[],
            car:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            carToDelete: null,
           // showEditModal: false,
          //  carToEdit: null,
          }

    case 'FETCH_CARS_SUCCESS':
          return {
            ...currentState,
            cars:action.cars,
            car:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            carToDelete: null,
            //showEditModal: false,
          //  carToEdit: null,
          }

    case 'FETCH_CARS_FAILED':
          return {
            ...currentState,
            cars:[],
            car:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            carToDelete: null,
           /// showEditModal: false,
          //  carToEdit: null,
          }

    case 'FETCH_CAR_REQUEST':
          return {
            ...currentState,
            cars:currentState.cars,
            car:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            carToDelete: null,
          //  showEditModal: false,
          //  carToEdit: null,
          }

    case 'FETCH_CAR_SUCCESS':
          return {
            ...currentState,
            cars:currentState.cars,
            car:action.car,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            carToDelete: null,
           // showEditModal: false,
          //  carToEdit: null,
          }

    case 'FETCH_CAR_FAILED':
          return {
            ...currentState,
            cars:[],
            car:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            carToDelete: null,
           // showEditModal: false,
          //  carToEdit: null,
          }

    case 'ADD_NEW_CAR_REQUEST':
          return {
            ...currentState,
            cars:currentState.cars,
            car:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            carToDelete: null,
           // showEditModal: false,
          //  carToEdit: null,
            newCar: action.car
          }

    case 'ADD_NEW_CAR_REQUEST_FAILED':
          return {
            ...currentState,
            cars:currentState.cars,
            car:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            carToDelete: null,
           // showEditModal: false,
          //  carToEdit: null,
            newCar: null
          }

    case 'ADD_NEW_CAR_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            cars:[...currentState.cars, action.car],
            car:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            carToDelete: null,
          //  showEditModal: false,
          //  carToEdit: null,
            newCar: action.car
          }
        return nextState;

/*   case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          cars:currentState.cars,
          car:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          carToDelete: null,
          showEditModal: true,
          carToEdit: action.car,
          newCar: null
        } */

/*   case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          cars:currentState.cars,
          car:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          carToDelete: null,
          showEditModal: false,
          carToEdit: null,
          newCar: null
        } */

/*     case 'EDIT_CAR_REQUEST':
          return {
            ...currentState,
            cars:currentState.cars,
            car:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            carToDelete: null,
            showEditModal: true,
            carToEdit: action.car,
            newCar: null
          } */

/*     case 'EDIT_CAR_SUCCESS':
         const updatedCars = currentState.cars.map((car) => {
           if(car._id !== action.car._id){
             //This is not the item we care about, keep it as is
             return car;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...car, ...action.car }
         })
          return {
            ...currentState,
            cars:updatedCars,
            car:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            carToDelete: null,
            showEditModal: true,
            carToEdit: action.car,
            newCar: null
          }
 */
/*   case 'EDIT_CAR_FAILED':
        return {
          ...currentState,
          cars:currentState.cars,
          car:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          carToDelete: null,
          showEditModal: true,
          carToEdit: currentState.carToEdit,
          newCar: null
        } */

  case 'DELETE_CAR_REQUEST':
        return {
          ...currentState,
          cars:currentState.cars,
          car:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          carToDelete: action.car,
        //  showEditModal: false,
       //   carToEdit: null,
          newCar: null
        }

  case 'DELETE_CAR_SUCCESS':
  const filteredCars = currentState.cars.filter((car) => car._id !== currentState.carToDelete._id)
        return {
          ...currentState,
          cars:filteredCars,
          car:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          carToDelete: null,
        //  showEditModal: false,
       //   carToEdit: null,
          newCar: null
        }


  case 'DELETE_CAR_FAILED':
        return {
          ...currentState,
          cars:currentState.cars,
          car:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          carToDelete: null,
        //  showEditModal: false,
        //  carToEdit: null,
          newCar: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          cars:currentState.cars,
          car:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          carToDelete: action.car,
        //  showEditModal: false,
        //  carToEdit: null,
          newCar: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          cars:currentState.cars,
          car:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          carToDelete: null,
         // showEditModal: false,
        //  carToEdit: null,
          newCar: null
        }


    default:
       return currentState;

  }
}
