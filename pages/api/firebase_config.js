import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrzPRZKL0EUtkFrdAXRk3D8F_2KPLNFAU",
  authDomain: "lean-firebase-bd780.firebaseapp.com",
  databaseURL: "https://lean-firebase-bd780-default-rtdb.firebaseio.com",
  projectId: "lean-firebase-bd780",
  storageBucket: "lean-firebase-bd780.appspot.com",
  messagingSenderId: "130778979212",
  appId: "1:130778979212:web:9d1b41bad228bf3c1ad4a9",
  measurementId: "G-4N3ZGSZXXY",
};
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
