import {SAMPLE} from '../types/sample.types';

const initialState = {
  sample: 'This is a sample',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SAMPLE:
      return {...state, ...payload};
    default:
      return state;
  }
};
