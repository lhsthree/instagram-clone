//import { seedDatabase } from '../seed'

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDnOwNDYf_N7yttrnbpty0U18nBB7SmV4c",
    authDomain: "instagram-clone-b56d8.firebaseapp.com",
    databaseURL: 'https://instagram-clone-b56d8.firebaseio.com',
    projectId: "instagram-clone-b56d8",
    storageBucket: "instagram-clone-b56d8.appspot.com",
    messagingSenderId: "914786063986",
    appId: "1:914786063986:web:535ac53c14b6a2083494eb",
    measurementId: "G-JLG2GSWLMM"
  };



const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };