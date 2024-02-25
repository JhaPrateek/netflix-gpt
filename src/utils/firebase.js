// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlmhgN3xOV-7IJWsbYiVbfNLvENChPObw",
  authDomain: "netflixgpt-89a68.firebaseapp.com",
  projectId: "netflixgpt-89a68",
  storageBucket: "netflixgpt-89a68.appspot.com",
  messagingSenderId: "961938836855",
  appId: "1:961938836855:web:0c04ad9934d43f550ca572",
  measurementId: "G-62YZ3ZLP4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();