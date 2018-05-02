import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn()

  const invoke = (action) => thunk(store)(next)(action)

  return { store, next, invoke }
};


describe('Middleware', () => {

  it('passes through non-function action', () => {
    const { next, invoke } = create()
    const action = { type: 'TEST' }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  })

  it('calls the function', () => {
    const { invoke } = create()
    const fn = jest.fn()
    invoke(fn)
    expect(fn).toHaveBeenCalled()
  });

  it('passes dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch('TEST DISPATCH')
      getState();
    })
    expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
    expect(store.getState).toHaveBeenCalled()
  });
});


