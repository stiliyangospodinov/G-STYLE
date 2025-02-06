// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdnTETRNqxHI4wy72nX76ayBrS0o3lFVs",
  authDomain: "online-shopping-432d2.firebaseapp.com",
  projectId: "online-shopping-432d2",
  storageBucket: "online-shopping-432d2.firebasestorage.app",
  messagingSenderId: "943594378788",
  appId: "1:943594378788:web:9262947636389e096daab1",
  measurementId: "G-69SJ5S2E9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize Analytics if running in a browser
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    getAnalytics(app);
  });
}

// Initialize Firestore, Authentication, and Storage
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
