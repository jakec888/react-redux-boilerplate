import {SAMPLE} from '../actions/sample.actions';

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
