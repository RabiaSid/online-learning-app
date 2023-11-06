// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu9ybTm4IuzbOhtqZwG3ZhzNZ1ebL8nkw",
  authDomain: "e-learning-platform-d1e2a.firebaseapp.com",
  projectId: "e-learning-platform-d1e2a",
  storageBucket: "e-learning-platform-d1e2a.appspot.com",
  messagingSenderId: "713783954384",
  appId: "1:713783954384:web:c5ed2021736d3b837f87d5",
  measurementId: "G-R7JESGN0HC"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);