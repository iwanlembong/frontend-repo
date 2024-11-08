// store/reducers.js
const initialState = {
  loading: false,
  userData: null,
  error: null,
  authUser: null,  // Store authenticated user data
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_USER_SUCCESS':
      return { ...state, loading: false, userData: action.payload };
    case 'FETCH_USER_FAILURE':
      return { ...state, loading: false, error: action.error };
    case 'SET_USER':
      return { ...state, authUser: action.payload };  // Set authenticated user
    default:
      return state;
  }
};

export default userReducer;
