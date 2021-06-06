import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA1megksd3RJsJ-TT-VnHGTqATLeEFfolY",
    authDomain: "lets-750e2.firebaseapp.com",
    projectId: "lets-750e2",
    storageBucket: "lets-750e2.appspot.com",
    messagingSenderId: "707215017171",
    appId: "1:707215017171:web:b37eaa9b59d6ba56f5c026"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);     
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;