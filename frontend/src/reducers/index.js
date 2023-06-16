// reducers/index.js

import { combineReducers } from 'redux';

// Import your individual reducers here
import globalReducer from './globalReducer';

// Combine all of your reducers into a single root reducer
const rootReducer = combineReducers({
  global: globalReducer,
  // Add more reducers here
});

export default rootReducer;
