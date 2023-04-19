// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6w_euVzx8ibata4uyhBK6JrTtRx9r4Fs",
  authDomain: "auth-firebase-context-daisyui.firebaseapp.com",
  projectId: "auth-firebase-context-daisyui",
  storageBucket: "auth-firebase-context-daisyui.appspot.com",
  messagingSenderId: "256274423625",
  appId: "1:256274423625:web:b7574edbd4272c70f90498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;