import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  id: 1,
  title: 'Web Programming',
  category: 'programmingg',
};

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
