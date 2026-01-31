// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2p6edhjeZS3EVjBbFTljlI4x82MbeJGQ",
  authDomain: "portfolio-atikshahriaopu.firebaseapp.com",
  projectId: "portfolio-atikshahriaopu",
  storageBucket: "portfolio-atikshahriaopu.firebasestorage.app",
  messagingSenderId: "957823797930",
  appId: "1:957823797930:web:ecaaae7c39cec3ef1d1ed3",
  measurementId: "G-VVGM8S00TG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
