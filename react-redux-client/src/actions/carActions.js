const apiUrl = "/api/";

export const addNewCar = car => {
  console.log(car);
  return dispatch => {
    dispatch(addNewCarRequest(car));
    return fetch(apiUrl, {
      method: "post",
      body: car
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText)
        }
      })
      .then(data => {
        dispatch(addNewCarRequestSuccess(data.car, data.message));
      })
      .catch(error => {
        dispatch(addNewCarRequestFailed(error.message));
      });
  };
};


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

export const showModal = (carToDelete) => {
  return {
    type: 'SHOW_MODAL',
    car: carToDelete
  }
}

export const hideModal = () => {
  return {
    type: 'HIDE_MODAL'
  }
}
