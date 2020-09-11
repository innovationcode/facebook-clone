import firebase from 'firebase';

const firebaseConfig = {
    apiKey: `${REACT_APP_APIKEY}`,
    authDomain: `${REACT_APP_AUTHDOMAIN}`,
    databaseURL: `${REACT_APP_DATABASEURL}`,
    projectId: `${REACT_APP_PROJECTID}`,
    storageBucket: `${REACT_APP_STORAGEBUCKET}`,
    messagingSenderId: `${REACT_APP_MESSINGSENDERID}`,
    appId: `${REACT_APP_APPID}`
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;