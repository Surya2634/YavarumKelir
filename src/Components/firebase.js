import firebase from 'firebase';
import "firebase/firestore";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl7jNPZ7wECR9A69SvxZGFBeyNZKykOvE",
  authDomain: "yavarumkelir-result.firebaseapp.com",
  projectId: "yavarumkelir-result",
  storageBucket: "yavarumkelir-result.appspot.com",
  messagingSenderId: "89566894059",
  appId: "1:89566894059:web:6ea09283d5af19d838ebae"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebaseConfig.auth();
export default firebase; 

