import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA__MAqtf54VxjHtkg52bUn11k_cmvgxtc",
  authDomain: "full--clo.firebaseapp.com",
  projectId: "full--clo",
  storageBucket: "full--clo.appspot.com",
  messagingSenderId: "910270538302",
  appId: "1:910270538302:web:2f622b16c03a2e5dc3676f",
  measurementId: "G-NV65Q27F46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const auth = firebaseApp.auth();
export default db;
