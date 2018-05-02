import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as appActions from '../actions/appActions'
import * as carActions from '../actions/carActions'

configure({ adapter: new Adapter() });

describe('App actions', () => {
  it('Should create an action to toggle add car component', () => {
    const expectedAction = {
      type: "TOGGLE_ADD_CAR",
    }
    expect(appActions.toggleAddCar()).toEqual(expectedAction)
  })

  it('Should create an action to hide car component', () => {
    const expectedAction = {
      type: "OFF_ADD_CAR",
    }
    expect(appActions.offAddCar()).toEqual(expectedAction)
  })
})


describe('Car actions', () => {

  it('Should create an action to add new car', () => {
    const expectedAction = {
      type: "ADD_NEW_CAR_REQUEST",
      car: undefined
    }
    expect(carActions.addNewCarRequest()).toEqual(expectedAction)
  })

  it('Should create an action if new car request was successfull', () => {
    const expectedAction = {
      type: "ADD_NEW_CAR_REQUEST_SUCCESS",
      car: undefined,
      message: undefined
    }
    expect(carActions.addNewCarRequestSuccess()).toEqual(expectedAction)
  })

  it('Should create an action if new car request failed', () => {
    const expectedAction = {
      type: "ADD_NEW_CAR_REQUEST_FAILED",
      error: undefined
    }
    expect(carActions.addNewCarRequestFailed()).toEqual(expectedAction)
  })

  it('Should create an action to fetch car requests', () => {
    const expectedAction = {
      type: "FETCH_CARS_REQUEST",
    }
    expect(carActions.fetchCarsRequest()).toEqual(expectedAction)
  })

  it('Should create an action if cars fetched successfully', () => {
    const expectedAction = {
      type: "FETCH_CARS_SUCCESS",
      cars: undefined,
      message: undefined,
      receivedAt: Date.now
    }
    expect(carActions.fetchCarsSuccess()).toEqual(expectedAction)
  })

  it('Should create an action if cars fetched faled', () => {
    const expectedAction = {
      type: "FETCH_CARS_FAILED",
      error: undefined
    }
    expect(carActions.fetchCarsFailed()).toEqual(expectedAction)
  })

  it('Should create an action to delete car', () => {
    const expectedAction = {
      type: "DELETE_CAR_REQUEST",
      car: undefined
    }
    expect(carActions.deleteCarRequest()).toEqual(expectedAction)
  })

  it('Should create an action if car deletion was successful', () => {
    const expectedAction = {
      type: "DELETE_CAR_SUCCESS",
      message: undefined
    }
    expect(carActions.deleteCarSuccess()).toEqual(expectedAction)
  })

  it('Should create an action if car deletion failed', () => {
    const expectedAction = {
      type: "DELETE_CAR_FAILED",
      message: undefined
    }
    expect(carActions.deleteCarFailed()).toEqual(expectedAction)
  })

  it('Should create an action to show modal', () => {
    const expectedAction = {
      type: "SHOW_MODAL",
      car: undefined
    }
    expect(carActions.showModal()).toEqual(expectedAction)
  })

  it('Should create an action to hide modal', () => {
    const expectedAction = {
      type: "HIDE_MODAL",
    }
    expect(carActions.hideModal()).toEqual(expectedAction)
  })

})






