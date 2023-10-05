import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdWMOkkqNbK4gEAHdkhK2t3kIcNXY4_jQ",
  authDomain: "doctors-portal-d7048.firebaseapp.com",
  projectId: "doctors-portal-d7048",
  storageBucket: "doctors-portal-d7048.appspot.com",
  messagingSenderId: "442876522562",
  appId: "1:442876522562:web:fdc8af3b04df660b073ddb",
  measurementId: "G-B64JJ3N009",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
