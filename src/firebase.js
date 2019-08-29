import firebase from 'firebase/app';
import "firebase/auth";
import { VERSION } from 'upath';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

export const firebaseInit = firebase.initializeApp(firebaseConfig);


export default class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) => 
  this.auth.createUserWithEmailAndPassword(email, password); 

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => {
    return this.auth.signOut();
  }

  doFacebookLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    return firebase.auth().signInWithPopup(provider);
  }

  doGoogleLogin = () => {
     // Using a popup.
     var provider = new firebase.auth.GoogleAuthProvider();
    //  provider.addScope('profile');
    //  provider.addScope('email');
     return firebase.auth().signInWithPopup(provider);
  }


  verifyWithPhoneNumber = (phoneNumber) => {
    var appVerifier = window.recaptchaVerifier;
    return firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
  }
}

