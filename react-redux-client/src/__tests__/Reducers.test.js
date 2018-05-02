import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import carReducer from '../reducers/carReducer'
import appReducer from '../reducers/appReducer'

configure({ adapter: new Adapter() });


describe('App reducers', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(
      {
        showAddCar: false
      }
    )
  })

  it('should handle TOGGLE_ADD_CAR', () => {
    expect(
      appReducer([], {
        type: "TOGGLE_ADD_CAR",
      })
    ).toEqual(
      {
        showAddCar: true
      }
    )
  })

  it('should handle OFF_ADD_CAR', () => {
    expect(
      appReducer([], {
        type: "OFF_ADD_CAR",
      })
    ).toEqual(
      {
        showAddCar: false
      }
    )
  })
})


describe('Car reducers', () => {
  it('should return the initial state', () => {
    expect(carReducer(undefined, {})).toEqual(
      {
        cars: [],
        car: null,
        isFetching: false,
        error: null,
        successMsg: null,
        showDeleteModal: false,
        carToDelete: null,
        newCar: null
      }
    )
  })

 

/*   it('should handle OFF_ADD_CAR', () => {
    expect(
      appReducer([], {
        type: "OFF_ADD_CAR",
      })
    ).toEqual(
      {
        showAddCar: false
      }
    )
  }) */
})



