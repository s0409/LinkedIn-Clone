import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD4CbVH-5txYbx8AIiRzxkYNxI38wQT-i8",
    authDomain: "linkedin-clone-43bd0.firebaseapp.com",
    projectId: "linkedin-clone-43bd0",
    storageBucket: "linkedin-clone-43bd0.appspot.com",
    messagingSenderId: "211896223619",
    appId: "1:211896223619:web:f885f1ecc3fbeba957d8b6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth};
  