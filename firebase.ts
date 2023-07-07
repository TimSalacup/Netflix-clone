// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe8VHna7Xbnv6tKMvwhpGrMHi-VpgXMgs",
  authDomain: "netflix-clone-b9a44.firebaseapp.com",
  projectId: "netflix-clone-b9a44",
  storageBucket: "netflix-clone-b9a44.appspot.com",
  messagingSenderId: "946544930925",
  appId: "1:946544930925:web:d096b2340ae54923f54f64",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
