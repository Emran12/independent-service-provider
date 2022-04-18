// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqV6crAiudT_LLOkEzctVrbkn89pV1mqM",
  authDomain: "email-password-auth-92a7c.firebaseapp.com",
  projectId: "email-password-auth-92a7c",
  storageBucket: "email-password-auth-92a7c.appspot.com",
  messagingSenderId: "259723164143",
  appId: "1:259723164143:web:1853f300548f282e289e1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
