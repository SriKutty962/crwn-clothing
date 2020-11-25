import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoQ9QSH0NiL0t3-wtGFteC7-rKTenMvOo",
    authDomain: "crwn-db-65c55.firebaseapp.com",
    databaseURL: "https://crwn-db-65c55.firebaseio.com",
    projectId: "crwn-db-65c55",
    storageBucket: "crwn-db-65c55.appspot.com",
    messagingSenderId: "1058633638828",
    appId: "1:1058633638828:web:71c06007c7ecca127c1009",
    measurementId: "G-BE3FLX22Z6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;