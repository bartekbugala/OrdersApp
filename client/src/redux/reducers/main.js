import initialState from '../initialState';

//// Reducer
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
