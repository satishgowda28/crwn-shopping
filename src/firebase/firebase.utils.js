import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch(error) {
      console.log(error.message, 'Error in creating the user');
    }
  }
  return userRef;
}

export default firebase;