import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyBlaUK9wGizulfv3WOydofZpfw736jGc5s",
    authDomain: "react-firebase-authentic-8364d.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-8364d.firebaseio.com",
    projectId: "react-firebase-authentic-8364d",
    storageBucket: '',
    messagingSenderId: "835571822311",
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
  export default Firebase;