// reducers/globalReducer.js

const initialState = {
    mode: 'light',
  };
  
  const globalReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MODE':
        return {
          ...state,
          mode: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default globalReducer;
  