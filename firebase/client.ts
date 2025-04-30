import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5DoEHOKqfoSeEb_1bWZ0mn7KstdATYwA",
  authDomain: "prepwise-f57fa.firebaseapp.com",
  projectId: "prepwise-f57fa",
  storageBucket: "prepwise-f57fa.firebasestorage.app",
  messagingSenderId: "439146276704",
  appId: "1:439146276704:web:68a1fcb6eb3dfb78d5e005",
  measurementId: "G-G0YH8779TH",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
