import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxSAx2KOtN-rbI7LTNqgEEsjh40dVQEvQ",
  authDomain: "fire-contact-81880.firebaseapp.com",
  databaseURL: "https://fire-contact-81880-default-rtdb.firebaseio.com",
  projectId: "fire-contact-81880",
  storageBucket: "fire-contact-81880.appspot.com",
  messagingSenderId: "701398004557",
  appId: "1:701398004557:web:92dc692f3e83863be7fd04"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;