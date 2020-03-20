import {combineReducers} from 'redux';

import sampleReducers from './reducers/sample.reducers';

export const rootReducer = combineReducers({
  Sample: sampleReducers,
});
