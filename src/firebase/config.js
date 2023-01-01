import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDxKHDvPIy63GcyY6-Xssy6I0l-g1y2IDs",
  authDomain: "projekt-firebase-app.firebaseapp.com",
  projectId: "projekt-firebase-app",
  storageBucket: "projekt-firebase-app.appspot.com",
  messagingSenderId: "958410645156",
  appId: "1:958410645156:web:12f2e96b4404933fead031"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };


