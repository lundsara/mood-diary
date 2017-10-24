import firebase from 'firebase'


 const  config = {
    apiKey: "AIzaSyD38xWYGDyPcO_miyrYfZyTwmR7Xp7HH9Q",
    authDomain: "mood-diary-c02ee.firebaseapp.com",
    databaseURL: "https://mood-diary-c02ee.firebaseio.com",
    projectId: "mood-diary-c02ee",
    storageBucket: "mood-diary-c02ee.appspot.com",
    messagingSenderId: "364517834490"
  };
  firebase.initializeApp(config);



  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;
