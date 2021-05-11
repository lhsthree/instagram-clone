import { seedDatabase } from '../seed'

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyDNiSE371b8FvBtF3kYwLQsUJrLMexxDGY",
    authDomain: "instagram-clone-lhsthree.firebaseapp.com",
    projectId: "instagram-clone-lhsthree",
    storageBucket: "instagram-clone-lhsthree.appspot.com",
    messagingSenderId: "1027477898342",
    appId: "1:1027477898342:web:0f210f6f7100b46af3d9a7",
  };




const firebase = window.Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

seedDatabase(firebase);

export { firebase, FieldValue };