import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGJEhYt7OA2Z9WnZ-dJJoL3EaKBGfCNac",
    authDomain: "image-fadc0.firebaseapp.com",
    projectId: "image-fadc0",
    storageBucket: "image-fadc0.appspot.com",
    messagingSenderId: "476967084510",
    appId: "1:476967084510:web:93bc2bce4f3a7a90c2bd4f"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };