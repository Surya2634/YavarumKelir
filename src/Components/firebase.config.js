import firebase from 'firebase';
import "firebase/firestore";


const firebaseApp = firebase.initializeApp( {
  // Add your cdn 
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
  