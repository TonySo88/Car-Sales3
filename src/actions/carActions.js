import { ADD_FEATURE, REMOVE_FEATURE } from '../reducers/carReducer'

export const removeFeature = (feature) => {
  return { type: REMOVE_FEATURE, payload: feature };
};
// dispatch passes this featue to the reducer

export const buyItem = (feature) => {
  return { type: ADD_FEATURE, payload: feature };
};
// dispatch passes this feature to the reducer
