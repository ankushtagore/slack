import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAHD4arD1D7UQI9G1GIvvpFrCKL2fPhXN4",
  authDomain: "slack-e7ed5.firebaseapp.com",
  projectId: "slack-e7ed5",
  storageBucket: "slack-e7ed5.appspot.com",
  messagingSenderId: "828277156146",
  appId: "1:828277156146:web:d72c6c8c01b24f45b40f2b",
  measurementId: "G-QLR1BS4EKQ",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
firebase.analytics();

export { db, provider, auth };
