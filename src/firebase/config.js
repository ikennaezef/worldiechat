import firebase from "firebase";


// Initialize Firebase

const app = firebase.initializeApp({
  apiKey: "AIzaSyD1YMyNJgDz1vkr9Eq2rFSMBEpW83imbjM",
  authDomain: "worldiechat.firebaseapp.com",
  projectId: "worldiechat",
  storageBucket: "worldiechat.appspot.com",
  messagingSenderId: "307355247872",
  appId: "1:307355247872:web:1baa8705a7000efe227fe5",
  measurementId: "G-NPGF4Z2HFC"
});

const db = app.firestore();
const auth = firebase.auth();

export { db, auth } ;