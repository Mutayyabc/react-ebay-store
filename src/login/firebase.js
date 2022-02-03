// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCHelUbVAXqMlJ8AO-pzd4njIZJg5f2RTM",
  authDomain: "online-store-c2de1.firebaseapp.com",
  projectId: "online-store-c2de1",
  storageBucket: "online-store-c2de1.appspot.com",
  messagingSenderId: "1053084786577",
  appId: "1:1053084786577:web:b11e98287944dcb171c430",
  measurementId: "G-Q9XHQ5SPB8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };
