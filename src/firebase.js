// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAA1bztGfppJVq5eU-if6V0LYVPKJJOOs",
  authDomain: "twitter-trial-a8c40.firebaseapp.com",
  projectId: "twitter-trial-a8c40",
  storageBucket: "twitter-trial-a8c40.appspot.com",
  messagingSenderId: "767319885607",
  appId: "1:767319885607:web:e89621bbf56e68e7f54b02",
  measurementId: "G-F6SD9MNY27",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
