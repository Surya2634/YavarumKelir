import firebase from 'firebase';
import "firebase/firestore";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //Add your cdn
};

firebase.initializeApp(firebaseConfig);
export const auth = firebaseConfig.auth();
export default firebase; 

