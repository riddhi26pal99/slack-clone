// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDChdxBmNlhRjSkBlWADJXLWWThpz4kzCg",
  authDomain: "slack-clone-ffbfe.firebaseapp.com",
  projectId: "slack-clone-ffbfe",
  storageBucket: "slack-clone-ffbfe.appspot.com",
  messagingSenderId: "370324516082",
  appId: "1:370324516082:web:bc4e3e4da4968c2e14746b",
  measurementId: "G-0ZYC05YY9K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, db, provider }; 