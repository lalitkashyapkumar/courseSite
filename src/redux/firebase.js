import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
//enter your credentials
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
