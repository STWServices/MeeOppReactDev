import Firebase from 'firebase';
 let config = {
     apiKey: "AIzaSyCJXAJfDxEKkhPHKvF7FR3YUZJM-0zhw7Q",
     authDomain: "mvpreact.firebaseapp.com",
     databaseURL: "https://mvpreact.firebaseio.com",
     projectId: "mvpreact",
     storageBucket: "mvpreact.appspot.com",
     messagingSenderId: "888404746402"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();