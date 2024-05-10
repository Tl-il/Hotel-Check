// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsKsg-dcSjcvK2ZyzSPTau00ov1arLojg",
  authDomain: "hotel-check.firebaseapp.com",
  projectId: "hotel-check",
  storageBucket: "hotel-check.appspot.com",
  messagingSenderId: "718962915881",
  appId: "1:718962915881:web:265c71c44e2fcec7d9fa38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};