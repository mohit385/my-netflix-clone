import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCyxz4ZHhyroVu1-O5onNOcFniCzKfAi3w",
    authDomain: "netflix-clone-13d37.firebaseapp.com",
    projectId: "netflix-clone-13d37",
    storageBucket: "netflix-clone-13d37.appspot.com",
    messagingSenderId: "562843484161",
    appId: "1:562843484161:web:fd8106bc2339c463520000",
    measurementId: "G-XH2MGLGKC8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;