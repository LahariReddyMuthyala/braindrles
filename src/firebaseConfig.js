import firebase from 'firebase';

// copy/paste this from your firebase console
var config = {
  apiKey: "AIzaSyCNLq_efw3EQLSJi1H9bFEwkkmvggrfoYI",
  authDomain: "braindr-les.firebaseapp.com",
  databaseURL: "https://braindr-les.firebaseio.com",
  projectId: "braindr-les",
  storageBucket: "braindr-les.appspot.com",
  messagingSenderId: "102313057158"
};
firebase.initializeApp(config);

export const db = firebase.database();
