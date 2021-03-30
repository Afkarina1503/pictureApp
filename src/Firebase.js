import Firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyDqQ4mnieUzdenKB0dY2x8rAZiuRtSptS8",
  authDomain: "pictureapp-43a2d.firebaseapp.com",
  projectId: "pictureapp-43a2d",
  storageBucket: "pictureapp-43a2d.appspot.com",
  messagingSenderId: "629180461743",
  appId: "1:629180461743:web:6c37a8b8af66bf84f21a5a",
  measurementId: "G-Q6E9N2E6R0"
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;


