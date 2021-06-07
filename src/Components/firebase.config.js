import firebase from 'firebase';
import "firebase/firestore";


const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyBl7jNPZ7wECR9A69SvxZGFBeyNZKykOvE",
  authDomain: "yavarumkelir-result.firebaseapp.com",
  projectId: "yavarumkelir-result",
  storageBucket: "yavarumkelir-result.appspot.com",
  messagingSenderId: "89566894059",
  appId: "1:89566894059:web:6ea09283d5af19d838ebae"
  });
 

  var db=firebaseApp.firestore();

  var firebaseRef = firebase.database().ref("yavarumkelir");
  firebaseRef.on("value",function(snapshot){
     snapshot.forEach(function(element){
       console.log(element.val());
     });
  })
  
export { db }
export default firebase;
  