
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA-68ygLeN2T1FqtRqjxQlfATeAShkoZyk",
    authDomain: "waxx--apps.firebaseapp.com",
    projectId: "waxx--apps",
    storageBucket: "waxx--apps.appspot.com",
    messagingSenderId: "968878662535",
    appId: "1:968878662535:web:3740c4a83ea39e9be12922"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;