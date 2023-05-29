import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiXnwKbadsrrEl5MnuORbMBPhYW3ij2MU",
  authDomain: "ltc-leetcode.firebaseapp.com",
  projectId: "ltc-leetcode",
  storageBucket: "ltc-leetcode.appspot.com",
  messagingSenderId: "901917163652",
  appId: "1:901917163652:web:494995884bc72d8fdec2d1"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export {
  auth,
  firestore,
  app
}