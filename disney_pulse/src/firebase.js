//need to use firebase and firebase-tools
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuHTXH_iILM_d1r9aVsNOu-UCsfRGnnKc",
  authDomain: "disney-pulse.firebaseapp.com",
  projectId: "disney-pulse",
  storageBucket: "disney-pulse.appspot.com",
  messagingSenderId: "325858443157",
  appId: "1:325858443157:web:96db10e7bd857c566f409c",
  measurementId: "G-H9CR3665JY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
