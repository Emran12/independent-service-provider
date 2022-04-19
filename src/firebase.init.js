// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpHJzytPUs5fwIfXjdiVmQ3mSb9o-Fv9Q",
  authDomain: "orthopedic-physician-4ca6a.firebaseapp.com",
  projectId: "orthopedic-physician-4ca6a",
  storageBucket: "orthopedic-physician-4ca6a.appspot.com",
  messagingSenderId: "1009197669744",
  appId: "1:1009197669744:web:549868d34298b595cb43b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
