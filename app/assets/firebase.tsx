// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn1m9hYo31keBKxFjJGYnpaUtHE-dnOz4",
  authDomain: "portfolio-14a29.firebaseapp.com",
  projectId: "portfolio-14a29",
  storageBucket: "portfolio-14a29.firebasestorage.app",
  messagingSenderId: "329694714280",
  appId: "1:329694714280:web:e2d307a78d5eca48d4a59d",
  measurementId: "G-EXHSHK55NJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});

export const storage = getStorage(app);
