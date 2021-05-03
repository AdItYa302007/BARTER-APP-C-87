import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCLv9QtWg5UD9WHYR85hqhTN3QM200ivhc",
    authDomain: "barter-app-latest.firebaseapp.com",
    projectId: "barter-app-latest",
    storageBucket: "barter-app-latest.appspot.com",
    messagingSenderId: "981298673525",
    appId: "1:981298673525:web:373380dfec666d6800453c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
