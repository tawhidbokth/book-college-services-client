// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1UlOz5laOf-V6MCiW-AWcZKg_q2WiTNs",
  authDomain: "college-booking-service-976e7.firebaseapp.com",
  projectId: "college-booking-service-976e7",
  storageBucket: "college-booking-service-976e7.firebasestorage.app",
  messagingSenderId: "658900292546",
  appId: "1:658900292546:web:f5c91cdb7a7c1ac83a7c5b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);