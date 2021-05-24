import firebase from "firebase";

var config = {
  apiKey: "AIzaSyC7_45dMDpIsfFU7v2jNvxdo6n1sfPphZo",
  authDomain: "simulation-credit.firebaseapp.com",
  projectId: "simulation-credit",
  storageBucket: "simulation-credit.appspot.com",
  messagingSenderId: "587492312083",
  appId: "1:587492312083:web:93d5c6a21f44fa2f2debe6",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
