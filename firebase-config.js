// Importar Firebase desde el CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Configuración del proyecto (la tuya)
const firebaseConfig = {
  apiKey: "AIzaSyCzA3mTRkGlNNNpspzps7RBUFCe-KiZPmM",
  authDomain: "proyecto7l.firebaseapp.com",
  projectId: "proyecto7l",
  storageBucket: "proyecto7l.firebasestorage.app",
  messagingSenderId: "682157927077",
  appId: "1:682157927077:web:f8eddbda29d7eee596bb4c",
  measurementId: "G-FB90YY2DZH",
};

// Inicializar Firebase y Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
