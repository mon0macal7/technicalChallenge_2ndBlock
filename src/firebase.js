import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js"; // Inicializando firebase
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"; // Conexión con firestore,se importan metodos para editar app con firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Conexion con firebase
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

//Se exportan las funciones para acceder a la colección en cloud firestore

export const guardarMeta = (title, descripcion, categoria, fecha) => {
  addDoc(collection(db, "metas"), { title, descripcion, categoria, fecha });
};
export const enlistar = () => getDocs(collection(db, "metas"));

export const nuevaMeta = (acceder) =>
  onSnapshot(collection(db, "metas"), acceder);

export const borrarMeta = (id) => deleteDoc(doc(db, "metas", id));

export const proposito = (id) => getDoc(doc(db, "metas", id));

export const actualizar = (id, edicion) =>
  updateDoc(doc(db, "metas", id), edicion);
