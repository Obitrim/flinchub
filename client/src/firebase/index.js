import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

let firebaseApp;
if (firebase.apps.length){
	firebaseApp = firebaseApp.app();
} else {
	firebaseApp  = firebase.initializeApp(config)
}
// const firebaseApp  = firebase.initializeApp(config);
const DB = firebaseApp.firestore();

export { DB };
export default firebaseApp;
