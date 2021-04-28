import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDP6JekAkCjk2YohMO1G_YbSKRg4t0eIlQ",
authDomain: "coursesite-3c0b0.firebaseapp.com",
projectId: "coursesite-3c0b0",
storageBucket: "coursesite-3c0b0.appspot.com",
messagingSenderId: "926590766315",
appId: "1:926590766315:web:726348765d36a2459502ae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();