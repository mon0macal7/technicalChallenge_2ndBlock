import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js"; // Import the functions you need from the SDKs you need
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoCNWEndG8yCd5Ze7N-ZBbXcyiJzkf3O0",
  authDomain: "purposesapp-45107.firebaseapp.com",
  projectId: "purposesapp-45107",
  storageBucket: "purposesapp-45107.appspot.com",
  messagingSenderId: "951102290170",
  appId: "1:951102290170:web:0500c6c175c06271bb7143",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const guardarMeta = (title, descripcion, categoria, fecha) => {
  addDoc(collection(db, "metas"), { title, descripcion, categoria, fecha });
};
export const enlistar = () => getDocs(collection(db, "metas"));

export const nuevaMeta = (acceder) =>
  onSnapshot(collection(db, "metas"), acceder);
