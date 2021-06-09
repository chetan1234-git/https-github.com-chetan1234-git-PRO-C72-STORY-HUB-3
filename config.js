import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAYB0mspVOjz7x4KIBODvVbpiUGPuU8unc",
    authDomain: "newsletter-c35b4.firebaseapp.com",
    projectId: "newsletter-c35b4",
    storageBucket: "newsletter-c35b4.appspot.com",
    messagingSenderId: "558744419267",
    appId: "1:558744419267:web:9f4bc56161765c54cadb76"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();
