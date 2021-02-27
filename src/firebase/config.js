  // Your web app's Firebase configuration
  import firebase from "firebase/app"
  import "firebase/storage";
  import "firebase/firestore";

  var firebaseConfig = {
    apiKey: "AIzaSyAhtgCG34-kuOu2kwqf7wYlKT13RuNnxhE",
    authDomain: "instaclone-e7884.firebaseapp.com",
    projectId: "instaclone-e7884",
    storageBucket: "instaclone-e7884.appspot.com",
    messagingSenderId: "757794485689",
    appId: "1:757794485689:web:3aa699217f43359816b268"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };