// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE5OJlJrss4rIIafCtTvAn03JRvT5Z_wU",
  authDomain: "contact-app-crud-rj2920.firebaseapp.com",
  projectId: "contact-app-crud-rj2920",
  storageBucket: "contact-app-crud-rj2920.appspot.com",
  messagingSenderId: "999176216446",
  appId: "1:999176216446:web:1787ccd3188b3806a2dd2f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
