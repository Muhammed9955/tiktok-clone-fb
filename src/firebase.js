import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIIwVQa_YlgN7SVJ-wcRbCVDbd2iZ3tI8",
  authDomain: "tik-tok-clone-29393.firebaseapp.com",
  projectId: "tik-tok-clone-29393",
  storageBucket: "tik-tok-clone-29393.appspot.com",
  messagingSenderId: "517391587965",
  appId: "1:517391587965:web:b6df33e5d121d6adc4af14",
  measurementId: "G-H7ZBZQ46HC",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
