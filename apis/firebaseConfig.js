// import * as firebase from 'firebase/app';
// import 'firebase/auth';

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBN5Riz8ROj48qd8gyTqYKBSTnAvQf5f4o",
  authDomain: "ebuddy-technical-test-99e98.firebaseapp.com",
  projectId: "ebuddy-technical-test-99e98",
};

// Initialize Firebase only if it hasn’t been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firebase only if it hasn't been initialized yet
// if (!firebase.getApps().length) {
//     firebase.initializeApp(firebaseConfig);
//   }

// export const auth = firebase.auth();
