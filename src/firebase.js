import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzuay_Pa2Pn_jPPbM-EhrkUK6zelyMek4",
  authDomain: "react-calendar-bradlee.firebaseapp.com",
  projectId: "react-calendar-bradlee",
  storageBucket: "react-calendar-bradlee.appspot.com",
  messagingSenderId: "715062640577",
  appId: "1:715062640577:web:ab9fb960f4f97165503940",
  measurementId: "G-CC9G397GGY"
}
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };