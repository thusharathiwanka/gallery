import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyCxXkA5HFpKqQPQGCopLNetELiT9mz9HL0",
   authDomain: "gallery-4e4b5.firebaseapp.com",
   projectId: "gallery-4e4b5",
   storageBucket: "gallery-4e4b5.appspot.com",
   messagingSenderId: "468582369781",
   appId: "1:468582369781:web:c2ca36a33937490db1b8bc",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appFirestore, appStorage, timestamp };
