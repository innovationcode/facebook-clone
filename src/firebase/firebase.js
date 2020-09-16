import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_APIKEY,
//     authDomain: process.env.REACT_APP_AUTHDOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASEURL,
//     projectId: process.env.REACT_APP_PROJECTID,
//     storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSINGSENDERID,
//     appId: process.env.REACT_APP_APPID
// };

const firebaseConfig = {
    apiKey: "AIzaSyAbfvsmJM7jU1JwomEo7cNUpYd88DVs2nQ",
    authDomain: "facebook-clone-a009f.firebaseapp.com",
    databaseURL: "https://facebook-clone-a009f.firebaseio.com",
    projectId: "facebook-clone-a009f",
    storageBucket: "facebook-clone-a009f.appspot.com",
    messagingSenderId: "992230458025",
    appId: "1:992230458025:web:57932996a74e5f730b9fb8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;