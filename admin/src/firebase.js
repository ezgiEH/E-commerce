// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn0tOZ26N4OXqq-PsoEgunWaqASyXdlnQ",
  authDomain: "shop-42718.firebaseapp.com",
  projectId: "shop-42718",
  storageBucket: "shop-42718.appspot.com",
  messagingSenderId: "562027025186",
  appId: "1:562027025186:web:03812594d87cc9bdf5cb7b",
  measurementId: "G-XX7X72ENDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;