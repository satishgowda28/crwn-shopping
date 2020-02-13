import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyA4Q9v0J_r1wSu4RolZPde5wQi8klYkXCU",
  authDomain: "crwn-db-10de7.firebaseapp.com",
  databaseURL: "https://crwn-db-10de7.firebaseio.com",
  projectId: "crwn-db-10de7",
  storageBucket: "crwn-db-10de7.appspot.com",
  messagingSenderId: "897227159565",
  appId: "1:897227159565:web:ba42e051b2af877316fd44"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
