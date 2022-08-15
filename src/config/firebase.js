// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyD0HGv6UUC5VuFKdG45d8CQHf1K0633IEM",
  authDomain: "hotel-app-4a7a9.firebaseapp.com",
  projectId: "hotel-app-4a7a9",
  storageBucket: "hotel-app-4a7a9.appspot.com",
  messagingSenderId: "402016979954",
  appId: "1:402016979954:web:0f68abef7b9587a54a396b",
  measurementId: "G-EH6P8YQ6LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const analytics = getAnalytics(app);

export {auth, db,storage};