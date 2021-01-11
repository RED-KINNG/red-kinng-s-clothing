import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCuAEgU8g-NcOBMwBUHCCrQDpNaWdvQEQo",
    authDomain: "rk-s-crown-clothing-db.firebaseapp.com",
    projectId: "rk-s-crown-clothing-db",
    storageBucket: "rk-s-crown-clothing-db.appspot.com",
    messagingSenderId: "821950844953",
    appId: "1:821950844953:web:a058dc9f51a5604400da88",
    measurementId: "G-Q6VX0MQ4DL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;