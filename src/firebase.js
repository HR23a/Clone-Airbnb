// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8eHuNx5cWoF_8rgExlzeyMcgEKTbVdTI",
  authDomain: "cloneairbnb-8ac92.firebaseapp.com",
  projectId: "cloneairbnb-8ac92",
  storageBucket: "cloneairbnb-8ac92.appspot.com",
  messagingSenderId: "691647897404",
  appId: "1:691647897404:web:731d658e68b50519f917fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
