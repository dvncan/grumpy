// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh230sqIhg9whn8CON4-WScRss1M5TYyo",
  authDomain: "grumpy-386713.firebaseapp.com",
  projectId: "grumpy-386713",
  storageBucket: "grumpy-386713.appspot.com",
  messagingSenderId: "537987838231",
  appId: "1:537987838231:web:9718a028844535772cc752",
  measurementId: "G-PLXKX1D1QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
