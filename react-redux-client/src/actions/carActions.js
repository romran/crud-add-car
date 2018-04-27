// ./react-redux-client/src/actions/carActions.js

const apiUrl = "/api/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_CAR'
  }
}

export const addNewCar = (car) => {
  console.log(car)
  return (dispatch) => {
    dispatch(addNewCarRequest(car));
    return fetch(apiUrl, {
      method: 'post',
      body: car,
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log(data.car);
          dispatch(addNewCarRequestSuccess(data.car, data.message))
        })
      }
      else {
        response.json().then(error => {
          dispatch(addNewCarRequestFailed(error))
        })
      }
    })
  }
}

export const addNewCarRequest = (car) => {
  return {
    type: 'ADD_NEW_CAR_REQUEST',
    car
  }
}

export const addNewCarRequestSuccess = (car, message) => {
  return {
    type: 'ADD_NEW_CAR_REQUEST_SUCCESS',
    car: car,
    message: message
  }
}

export const addNewCarRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_CAR_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchCars = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchCarsRequest());
    // Returns a promise
    return fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            dispatch(fetchCarsSuccess(data.cars, data.message));
          })
        }
        else {
          response.json().then(error => {
            dispatch(fetchCarsFailed(error));
          })
        }
      })


  }
}

export const fetchCarsRequest = () => {
  return {
    type: 'FETCH_CARS_REQUEST'
  }
}


//Sync action
export const fetchCarsSuccess = (cars, message) => {
  return {
    type: 'FETCH_CARS_SUCCESS',
    cars: cars,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchCarsFailed = (error) => {
  return {
    type: 'FETCH_CARS_FAILED',
    error
  }
}

export const fetchCarById = (carId) => {
  return (dispatch) => {
    dispatch(fetchCarRequest());
    // Returns a promise
    return fetch(apiUrl + carId)
      .then(response => {
        console.log(response)
        if (response.ok) {
          response.json().then(data => {
            dispatch(fetchCarSuccess(data.car[0], data.message));
          })
        }
        else {
          response.json().then(error => {
            dispatch(fetchCarFailed(error));
          })
        }
      })

  }
}

export const fetchCarRequest = () => {
  return {
    type: 'FETCH_CAR_REQUEST'
  }
}


//Sync action
export const fetchCarSuccess = (car, message) => {
  return {
    type: 'FETCH_CAR_SUCCESS',
    car: car,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchCarFailed = (error) => {
  return {
    type: 'FETCH_CAR_FAILED',
    error
  }
}

/* export const showEditModal = (todoToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    todo:todoToEdit
  }
} */

/* export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
} */

/* export const editTodo = (todo) => {
    return (dispatch) => {
      dispatch(editTodoRequest(todo));
      return fetch(apiUrl, {
        method:'put',
        body:todo
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editTodoSuccess(data.todo,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editTodoFailed(error));
          })
        }
      })
    }
} */

/* export const editTodoRequest = (todo) => {
   return {
     type:'EDIT_TODO_REQUEST',
     todo
   }
} */

/* export const editTodoSuccess = (todo,message) => {
  return {
    type:'EDIT_TODO_SUCCESS',
    todo:todo,
    message:message
  }
} */

/* export const editTodoFailed = (error) => {
  return {
    type:'EDIT_TODO_FAILED',
    error
  }
} */

export const deleteCar = (car) => {
  return (dispatch) => {
    dispatch(deleteCarRequest(car));
    return fetch(apiUrl + car._id, {
      method: 'delete'
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(deleteCarSuccess(data.message));
        })
      }
      else {
        response.json().then(error => {
          dispatch(deleteCarFailed(error));
        })
      }
    })

  }
}

export const deleteCarRequest = (car) => {
  return {
    type: 'DELETE_CAR_REQUEST',
    car
  }
}

export const deleteCarSuccess = (message) => {
  return {
    type: 'DELETE_CAR_SUCCESS',
    message: message
  }
}

export const deleteCarFailed = (error) => {
  return {
    type: 'DELETE_CAR_FAILED',
    error
  }
}

export const showDeleteModal = (carToDelete) => {
  return {
    type: 'SHOW_DELETE_MODAL',
    car: carToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type: 'HIDE_DELETE_MODAL'
  }
}
