import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC9m-n_7tVcuuFdL_HpfRq7RNtRoGHPLiY",
  authDomain: "full--clone-e9cfa.firebaseapp.com",
  projectId: "full--clone-e9cfa",
  storageBucket: "full--clone-e9cfa.appspot.com",
  messagingSenderId: "119038837066",
  appId: "1:119038837066:web:f3e6327d0e8ec3abcc41b3",
  measurementId: "G-8B93KC18GD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const auth = firebaseApp.auth();
export default db;
