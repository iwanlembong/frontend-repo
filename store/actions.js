// store/actions.js
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../apis/firebaseConfig';

export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

export const listenToAuthChanges = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user));  // User is logged in
    } else {
      dispatch(setUser(null));  // User is logged out
    }
  });
};
