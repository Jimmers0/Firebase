import app from 'firebase/app';
import 'firebase/auth';

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

      this.auth = app.auth();
    }
    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  }
  export default Firebase;