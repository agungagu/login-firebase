import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDxSr1vvNbu3hlD6om-bPRZ-sZRKmqU94",
  authDomain: "auth-agung.firebaseapp.com",
  projectId: "auth-agung",
  storageBucket: "auth-agung.appspot.com",
  messagingSenderId: "603845777761",
  appId: "1:603845777761:web:c9dda3dca574e079280d20"
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app)