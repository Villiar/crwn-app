import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC2MqGiP7SWy0so1EdoVZ4ic1LFi8pGa3o',
  authDomain: 'crown-db-97baa.firebaseapp.com',
  databaseURL: 'https://crown-db-97baa.firebaseio.com',
  projectId: 'crown-db-97baa',
  storageBucket: 'crown-db-97baa.appspot.com',
  messagingSenderId: '979290000788',
  appId: '1:979290000788:web:65abe7add5c2c87576d381',
};

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

const auth = firebase.auth();
const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogle = () => auth.signInWithPopup(provider);

export {
  auth,
  createUserProfileDocument,
  firestore,
  signInWithGoogle,
  firebase as default,
};
